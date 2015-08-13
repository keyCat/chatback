var pubsub = require('../../server/lib/pubsub');
var socketHandler = require('../../server/lib/socket');

module.exports = function ( ChatMessage ) {
  ChatMessage.observe('before save', function ( ctx, next ) {
    var loopback = ChatMessage.app.loopback;
    var userId = loopback.getCurrentContext().active.accessToken.userId;

    ctx.instance.userId = userId;
    if ( ctx.isNewInstance ) {
      ctx.instance.sentTs = Date.now();
      ChatMessage.app.models.UserModel.findById(userId, function ( err, user ) {
        if ( err ) return next(err);
        if ( user ) {
          ctx.instance.setAttribute('username', user.username);
          next();
        } else {
          next(new Error('No associated user.'))
        }
      });
    } else {
      next();
    }
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
    pubsub.publishTo(io, socketHandler.SOCKET_ROOM_ALIAS + instance.chatId, options);

    next();
  });
};
