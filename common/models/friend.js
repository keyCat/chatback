var loopback = require('loopback');

module.exports = function ( Friend ) {
  Friend.observe('access', function ( ctx, next ) {
    var userId = loopback.getCurrentContext().active.accessToken.userId;
    var or = [
      {'senderId': userId},
      {'receiverId': userId}
    ];

    // force restrict find only to records that involves current user
    if ( !Object.keys(ctx.query).length ) {
      ctx.query.where = {
        or: or
      };
    } else {
      if ( ctx.query.where && ctx.query.where.id ) {
        var id = ctx.query.where.id;
        delete ctx.query.where.id;
        ctx.query.where.and = [{id: id}, {or: or}]

      }
    }
    next();
  });

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

  Friend.my = function ( next ) {
    var UserModel = Friend.app.models.UserModel;
    var userId = loopback.getCurrentContext().active.accessToken.userId;

    Friend.find({}, function ( err, friendReqs ) {
      if ( friendReqs && friendReqs.length ) {
        var ids = friendReqs.map(function ( val ) {
          var notUser = val.senderId.toString() === userId.toString() ? val.receiverId : val.senderId;

          return notUser;
        });

        UserModel.find({where: {id: {inq: ids}}, fields: {id: true, username: true}}, function ( err, users ) {
          next(err, users);
        });
      } else {
        next(err, friendReqs);
      }
    });
  };

  Friend.remoteMethod('my', {
    description: 'Return current user friends',
    accessType: 'READ',
    returns: {arg: 'friends', type: 'array', root: true},
    http: {path: '/my', verb: 'get'}
  });
};
