var md5 = require('md5');

module.exports = function ( UserModel ) {
  var GRAVATAR_URL = 'http://www.gravatar.com/avatar/';

  UserModel.whoAmI = function ( req, next ) {
    var AccessToken = UserModel.app.models.AccessToken;

    AccessToken.findForRequest(req, {}, function ( aux, at ) {
      UserModel.findById(at.userId, function ( err, user ) {
        next(err, user);
      });
    });
  };

  UserModel.remoteMethod('whoAmI', {
    accepts: {arg: 'req', type: 'object', http: {source: 'req'}},
    returns: {arg: 'user', type: UserModel.modelName, root: true},
    http: {path: '/whoAmI', verb: 'get'}
  });

  UserModel.observe('before save', function ( ctx, next ) {
    var instance = ctx.instance;

    if ( ctx.isNewInstance && instance.email && !instance.avatar ) {
      instance.setAttribute('avatar', GRAVATAR_URL + md5(instance.email));
    }

    next();
  });
};
