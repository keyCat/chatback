var pubsub = require('../../server/lib/pubsub');
var socketHandler = require('../../server/lib/socket');

module.exports = function ( Room ) {
  var SOCKET_ROOM_ALIAS = '/chat/';

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

    Room.findById(id, function ( err, room ) {
      if ( !room ) err = new Error('No room with the given id');
      if ( err ) next(err);
      if ( room ) {
        room.chats(function ( err, chat ) {
          var response = {};
          var socketUser = socketHandler.users.findById(userId);
          var socket = socketUser ? socketUser.socket : null;

          if ( err ) next(err);
          if ( chat ) {
            response.cid = chat.id;
            if ( socket && socket.client ) {
              socket.client.data.rooms[id] = {chatId: chat.id};
              socket.join(SOCKET_ROOM_ALIAS + chat.id);
            }
          }

          next(null, response);
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
    var socketUser = socketHandler.users.findById(userId);
    var socket = socketUser ? socketUser.socket : null;
    var leave = !!socket && !!socket.client;

    if ( leave ) {
      var roomPresense = socket.client.data.rooms[id];

      if ( roomPresense ) {
        socket.leave(SOCKET_ROOM_ALIAS + chat.id);
        delete socket.client.data.rooms[id];
      }
    }

    next(null, leave);
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
