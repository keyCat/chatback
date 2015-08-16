var loopback = require('loopback');
var pubsub = require('../../server/lib/pubsub');
var socketHandler = require('../../server/lib/socket');
var extend = require('extend');

module.exports = function ( Friend ) {
  var mapUser = function ( user ) {
    return {
      id: user.id,
      username: user.username,
      avatar: user.avatar
    };
  };

  var mapFriend = function ( friend, user ) {
    return {
      id: friend.id,
      sendTs: friend.sendTs,
      status: friend.status,
      user: user
    };
  };

  Friend.observe('before save', function ( ctx, next ) {
    var instance = ctx.instance;

    if ( ctx.isNewInstance ) {
      var userId = loopback.getCurrentContext().active.accessToken.userId;
      //      status codes: 0 - awaiting confirmation, 1 - accepted
      instance.setAttribute('status', 0);
      instance.setAttribute('sendTs', Date.now());
      instance.setAttribute('senderId', userId);

      Friend.find({
          where: {
            and: [
              {
                'senderId': {
                  inq: [instance.senderId, instance.receiverId]
                }
              },
              {
                'receiverId': {
                  inq: [instance.senderId, instance.receiverId]
                }
              }
            ]
          }
        }
        , function ( err, records ) {
          if ( records && records.length ) {
            err = new Error('Friend request for ' + instance.senderId + ' and ' + instance.receiverId + ' exist');
          }
          next(err);
        });
    } else {
      next();
    }
  });

  Friend.observe('after save', function ( ctx, next ) {
    var userId = loopback.getCurrentContext().active.accessToken.userId;

    Friend.findById(ctx.instance.id, {include: ['sender', 'receiver']}, function ( err, instance ) {
      if ( err ) console.error(err);
      if ( instance ) {
        var senderPayload = {};
        var receiverPayload = {};
        var convInstance = JSON.parse(JSON.stringify(instance));
        var opts = {
          modelName: Friend.modelName,
          modelId: ctx.instance.id,
          method: ctx.isNewInstance ? 'POST' : 'PUT'
        };

        senderPayload = mapFriend(convInstance, mapUser(convInstance.receiver));
        receiverPayload = mapFriend(convInstance, mapUser(convInstance.sender));

        // publish to sender
        pubsub.publishTo(Friend.app.io, socketHandler.USER_ROOM_ALIAS + ctx.instance.senderId, extend(opts, {data: senderPayload}));

        // publish to receiver
        pubsub.publishTo(Friend.app.io, socketHandler.USER_ROOM_ALIAS + ctx.instance.receiverId, extend(opts, {data: receiverPayload}));
      }
    });

    next();
  });

  /**
   * Accept friend request
   * @param {id} id Request id
   * @param {Function} next Cb
   * */

  Friend.accept = function ( id, next ) {
    Friend.findById(id, function ( err, friendReq ) {
      if ( friendReq && friendReq.id ) {
        friendReq.setAttribute('status', 1);
        friendReq.save(function ( err, res ) {
          next(err, res);
        });
      } else {
        next(err);
      }
    });
  };

  Friend.remoteMethod('accept', {
    description: 'Accept friend request',
    accessType: 'WRITE',
    accepts: {arg: 'id', type: 'string', http: {source: 'path'}},
    returns: {arg: 'response', type: 'object', root: true},
    http: {path: '/:id/accept', verb: 'put'}
  });

  /**
   * Return list of friend requests and related UserModels for current user
   * */

  Friend.my = function ( next ) {
    var userId = loopback.getCurrentContext().active.accessToken.userId;

    Friend.find(
      {
        where: {
          or: [{'senderId': userId}, {'receiverId': userId}]
        },
        include: ['sender', 'receiver']
      }
      , function ( err, friends ) {
        var response = [];

        response = friends.map(function ( val ) {
          var f = JSON.parse(JSON.stringify(val));
          var user = f.senderId.toString() === userId.toString() ? mapUser(f.receiver) : mapUser(f.sender);
          return mapFriend(f, user);
        });

        next(err, response);
      });
  };

  Friend.remoteMethod('my', {
    description: 'Return list of friend requests and related UserModels for current user',
    accessType: 'READ',
    returns: {arg: 'friends', type: 'array', root: true},
    http: {path: '/my', verb: 'get'}
  });
};
