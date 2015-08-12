var pubsub = require('../../server/lib/pubsub');
var socketHandler = require('../../server/lib/socket');

module.exports = function ( ChatMessage ) {
  var SOCKET_ROOM_ALIAS = '/chat/';

  ChatMessage.observe('before save', function ( ctx, next ) {
    var loopback = ChatMessage.app.loopback;
    var userId = loopback.getCurrentContext().active.accessToken.userId;

    ctx.instance.userId = userId;
    if ( ctx.isNewInstance ) {
      ctx.instance.sentTs = Date.now();
    }
    next();
  });

  ChatMessage.observe('after save', function ( ctx, next ) {
    var io = ChatMessage.app.io;
    var instance = ctx.instance;
    var options = {
      modelName: ChatMessage.modelName,
      modelId: instance.id,
      method: ctx.isNewInstance ? 'POST' : 'PUT',
      data: instance
    };
    pubsub.publishTo(io, SOCKET_ROOM_ALIAS + instance.chatId, options);

    next();
  });
};
