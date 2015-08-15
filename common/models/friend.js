var loopback = require('loopback');

module.exports = function ( Friend ) {
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
    var UserModel = Friend.app.models.UserModel;
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
        var mapUser = function ( user ) {
          return {
            id: user.id,
            username: user.username
          };
        };

        response = friends.map(function ( val ) {
          var f = JSON.parse(JSON.stringify(val));
          return {
            id: f.id,
            sendTs: f.sendTs,
            status: f.status,
            user: f.senderId.toString() === userId.toString() ? mapUser(f.receiver) : mapUser(f.sender)
          };
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
