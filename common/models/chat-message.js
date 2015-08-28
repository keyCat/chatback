var pubsub = require('../../server/lib/pubsub');
var socketHandler = require('../../server/lib/socket');

module.exports = function ( ChatMessage ) {
  ChatMessage.observe('before save', function ( ctx, next ) {
    var loopback = ChatMessage.app.loopback;
    var userId = loopback.getCurrentContext().active.accessToken.userId;

    ctx.instance.userId = userId;
    if ( ctx.isNewInstance ) {
      ctx.instance.setAttribute('sentTs', Date.now());
    }

    next();
  });

  ChatMessage.observe('after save', function ( ctx, next ) {
    var io = ChatMessage.app.io;
    var instance = ctx.instance;
    var converted = JSON.parse(JSON.stringify(instance));
    var options = {
      modelName: ChatMessage.modelName,
      modelId: instance.id,
      method: ctx.isNewInstance ? 'POST' : 'PUT',
      data: converted
    };

    instance.user({fields: {id: true, username: true, avatar: true}}, function ( err, user ) {
      if ( err ) return next(err);
      converted.user = user;
      pubsub.publishTo(io, socketHandler.SOCKET_ROOM_ALIAS + instance.chatId, options);

      next();
    });
  });

  ChatMessage.observe('access', function ( ctx, next ) {
    ctx.query.include = {relation: 'user', scope: {fields: ['username', 'avatar']}};

    next();
  });
};
