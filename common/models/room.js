var pubsub = require('../../server/lib/pubsub');

module.exports = function ( Room ) {
  Room.validatesUniquenessOf('name');
  Room.validatesLengthOf('name', {min: 3, max: 20});

  Room.beforeCreate = function ( next, instance ) {
    instance.setAttribute('created', Date.now());
    next();
  };

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
