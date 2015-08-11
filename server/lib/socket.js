var auth = require('socketio-auth');

module.exports = socketHandler;

function socketHandler( io, app ) {
  auth(io, {
    authenticate: function ( value, cb ) {
      authenticate(app, value, cb);
    },
    postAuthenticate: function ( socket, data ) {
      postAuthenticate(app, socket, data);
    }
  });
}

// authenticate socket
function authenticate( app, value, cb ) {
  var AccessToken = app.models.AccessToken,
    token = AccessToken.find({
        where: {
          and: [{userId: value.userId}, {id: value.id}]
        }
      },
      function ( err, tokenDetail ) {
        if ( err ) throw err;

        cb(null, tokenDetail.length > 0);
      });
}

// persist user data in socket
function postAuthenticate( app, socket, data ) {
  socket.client.data = {
    isIdentified: false
  };

  app.models.UserModel.find({id: data.userId}, function ( err, user ) {
    socket.client.data.user = user;
    socket.client.data.isIdentified = true;
  });
}
