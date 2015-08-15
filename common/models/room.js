var pubsub = require('../../server/lib/pubsub');
var socketHandler = require('../../server/lib/socket');

module.exports = function ( Room ) {
  Room.validatesUniquenessOf('name');
  Room.validatesLengthOf('name', {min: 3, max: 20});

  Room.beforeCreate = function ( next, instance ) {
    instance.setAttribute('created', Date.now());
    next();
  };

  /**
   * Join chat room (subscribe to updates and allow to post)
   * @param {id} id Room id
   * @param {Object} req Http request object to receive userId
   * @param {Function} next Next method
   */

  Room.join = function ( id, req, next ) {
    var userId = req.accessToken.userId;
    var response = {};
    var UserModel = Room.app.models.UserModel;

    Room.findById(id, {include: 'chats'}, function ( err, room ) {
      if ( room ) {
        // this is required in order to get chats instance instead of method
        var converted = JSON.parse(JSON.stringify(room));
        var userIds = socketHandler.users.findInRoom(id, true);
        socketHandler.joinRoom(userId, id, converted.chats.id);

        UserModel.find({where: {id: {inq: userIds}}, fields: {id: true, username: true, avatar: true}}, function ( err, users ) {
          converted.users = users;
          response = converted;
          next(err, response);
        });


      }
    });
  };

  Room.remoteMethod('join', {
    description: 'Join chat room (subscribe to updates and allow to post)',
    accessType: 'WRITE',
    accepts: [{arg: 'id', type: 'string', http: {source: 'path'}},
      {arg: 'req', type: 'object', http: {source: 'req'}}],
    returns: {arg: 'response', type: 'object', root: true},
    http: {path: '/:id/join', verb: 'put'}
  });

  /**
   * Leave chat room
   * @param {Socket} socket Connected socket
   * @param {ModelBuilder} instance Room instance
   */

  Room.leave = function ( id, req, next ) {
    var userId = req.accessToken.userId;
    var response = false;

    Room.findById(id, {include: 'chats'}, function ( err, room ) {
      if ( room ) {
        // this is required in order to get chats instance instead of method
        var converted = JSON.parse(JSON.stringify(room));
        response = socketHandler.leaveRoom(userId, id, converted.chats.id);
      } else {
        err = new Error('No room with the given id');
      }

      next(err, response);
    });
  };

  Room.remoteMethod('leave', {
    description: 'Leave chat room',
    accessType: 'WRITE',
    accepts: [{arg: 'id', type: 'string', http: {source: 'path'}},
      {arg: 'req', type: 'object', http: {source: 'req'}}],
    returns: {arg: 'leaved', type: 'boolean'},
    http: {path: '/:id/leave', verb: 'put'}
  });

  // trim leading/trailing whitespaces and whitespaces in the middle
  Room.observe('before save', function ( ctx, next ) {
    var rName = ctx.instance.name;
    ctx.instance.name = rName.replace(/^\s+|\s$/g, '').replace(/\s+/g, ' ');

    next();
  });

  Room.observe('after save', function ( ctx, next ) {
    var socket = Room.app.io;
    var instance = ctx.instance;
    var options = {
      modelName: Room.modelName,
      data: instance,
      modelId: instance.id,
      method: ctx.isNewInstance ? 'POST' : 'PUT'
    };

    if ( ctx.isNewInstance ) {
      var chat = instance.chats.build();
      chat.save(function ( err, chat ) {
        pubsub.publish(socket, options);
        next(err);
      });
    } else {
      pubsub.publish(socket, options);
      next();
    }
  });

  Room.observe('before delete', function ( ctx, next ) {
    var socket = Room.app.io;
    pubsub.publish(socket, {
      modelName: Room.modelName,
      data: ctx.instance.id,
      modelId: ctx.instance.id,
      method: 'DELETE'
    });
    next();
  });
};
