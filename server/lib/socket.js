var auth = require('socketio-auth');
var pubsub = require('./pubsub');

/**
 * Activate authentication middleware on socket.io instance
 * */
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

// storage for connected user/socket pair
socketHandler.users = [];
socketHandler.users.findById = function ( id ) {
  var user = null;
  for ( var i = 0; i < socketHandler.users.length; i++ ) {
    if ( socketHandler.users[i].id.toString() === id.toString() ) {
      user = socketHandler.users[i];
      break;
    }
  }

  return user;
};

socketHandler.users.removeById = function ( id ) {
  var removed = null;

  for ( var i = 0; i < socketHandler.users.length; i++ ) {
    if ( socketHandler.users[i].id.toString() === id.toString() ) {
      removed = socketHandler.users.splice(i, 1);
      break;
    }
  }

  return removed;
};

/**
 * Authentication function called against every new connected socket
 * @param {Object} app Express app
 * @param {Object} value Client credentials
 * @param {Function} cb Next middleware
 */

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

/**
 * Post authentication. Used for storing connected users and socket references
 * @param {Object} app Express app
 * @param {Socket} socket Connected socket
 * @param {Object} data Data received in authentication step
 */

function postAuthenticate( app, socket, data ) {
  socket.client.data = {
    userId: data.userId,
    isIdentified: false,
    rooms: {}
  };

  app.models.UserModel.findById(data.userId, function ( err, user ) {
    socket.client.data.user = user;
    socket.client.data.isIdentified = !!user;
  });

  pubsub._subscribeToPast(socket);
  socketHandler.users.push({id: data.userId, socket: socket});
  socket.on('disconnect', function () {
    socketHandler.users.removeById(data.userId);
  });
}

module.exports = socketHandler;
