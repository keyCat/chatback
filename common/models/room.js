var pubsub = require('../../server/lib/pubsub');

module.exports = function ( Room ) {
  Room.validatesUniquenessOf('name');
  Room.validatesLengthOf('name', {min: 3, max: 20});

  Room.beforeCreate = function ( next, instance ) {
    instance.setAttribute('created', Date.now());
    next();
  };

  function subscribeToEvents( room ) {
    pubsub.subscribe({
      modelName: Room.modelName,
      modelId: room.id,
      method: 'JOIN'
    }, function () { Room.join(this, room); });

    pubsub.subscribe({
      modelName: Room.modelName,
      modelId: room.id,
      method: 'LEAVE'
    }, function () { Room.leave(this, room); });
  }

  /**
   * Join chat room (subscribe to updates and allow to post)
   * @param {Socket} socket Connected socket
   * @param {ModelBuilder} instance Room instance
   */

  Room.join = function ( socket, instance ) {
    var payload = {rejected: false};
    var roomPresense = socket.client.data.rooms[instance.id];

    if ( roomPresense ) return;

    instance.chats(function ( err, chat ) {
      payload.rejected = err || !chat;
      if ( err ) console.error(err);
      if ( chat && !payload.rejected ) {
        payload.id = chat.id;
        socket.client.data.rooms[instance.id] = {chatId: chat.id};
        socket.join('/chat/' + chat.id);
      }

      pubsub.publishTo(Room.app.io, socket.id, {
        modelName: Room.modelName,
        modelId: instance.id,
        method: 'JOIN',
        data: payload
      });
    });
  };

  /**
   * Leave chat room
   * @param {Socket} socket Connected socket
   * @param {ModelBuilder} instance Room instance
   */

  Room.leave = function ( socket, instance ) {
    var roomPresense = socket.client.data.rooms[instance.id];

    if ( roomPresense ) {
      socket.leave('/chat/' + chat.id);
    }
    delete socket.client.data.rooms[instance.id];
  };

  Room.on('dataSourceAttached', function ( ds ) {
    Room.find({}, function ( err, rooms ) {
      if ( err ) throw err;

      for ( var i = 0; i < rooms.length; i++ ) {
        subscribeToEvents(rooms[i]);
      }
    });
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
        subscribeToEvents(instance);
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
