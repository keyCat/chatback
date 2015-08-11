var auth = require('socketio-auth');
var pubsub = require('./pubsub');

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

socketHandler.users = [];
socketHandler.users.findById = function ( id ) {
  var user = null;
  for ( var i = 0; i < socketHandler.users.length; i++ ) {
    if ( socketHandler.users[i].id === id ) {
      user = socketHandler.users[i];
      break;
    }
  }
};

socketHandler.users.removeById = function ( id ) {
  for ( var i = 0; i < socketHandler.users.length; i++ ) {
    if ( socketHandler.users[i].id === id ) {
      socketHandler.users.splice(i, 1);
      break;
    }
  }
};

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
    userId: data.userId,
    isIdentified: false
  };

  app.models.UserModel.find({id: data.userId}, function ( err, user ) {
    socket.client.data.user = user;
    socket.client.data.isIdentified = true;
  });

  pubsub._subscribeToPast(socket);
  socketHandler.users.push({id: data.userId, socket: socket});
  socket.on('disconnect', function () {
    socketHandler.users.removeById(data.userId);
  });
}

module.exports = socketHandler;
