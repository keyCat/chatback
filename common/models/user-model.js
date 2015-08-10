module.exports = function ( UserModel ) {
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
};
