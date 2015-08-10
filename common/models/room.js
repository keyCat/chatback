var pubsub = require('../../server/lib/pubsub');

module.exports = function ( Room ) {
    Room.validatesUniquenessOf('name');

  Room.beforeCreate = function ( next, instance ) {
    instance.setAttribute('created', Date.now());
    next();
  };

  Room.observe('after save', function ( ctx, next ) {
    var socket = Room.app.io;
    var payload = {
      modelName: Room.modelName,
      data: ctx.instance,
      modelId: ctx.instance.id,
      method: ctx.isNewInstance ? 'POST' : 'PUT'
    };

    pubsub.publish(socket, payload);
    next();
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
