var auth = require('socketio-auth');
var pubsub = require('./pubsub');

var SOCKET_ROOM_ALIAS = '/chat/';

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

socketHandler.SOCKET_ROOM_ALIAS = SOCKET_ROOM_ALIAS;

/**
 * storage for connected userId/socket {id: 1, socket: Socket}
 * */
socketHandler.users = [];

/**
 * Find connected user socket by user id
 * @param {id} id User id
 * @returns {Object} User id and connected socket {id: 1, socket: Socket}
 **/

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

/**
 * Remove connected user socket by user id
 * @param {id} id User id
 * @returns {Boolean} removed User was found and removed
 * */

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
 * Find user sockets in specific room. Room means chat room, not a socket.io room
 * @param {id} id Room id
 * @param {Boolean} idsOnly Return only user ids
 * @returns {Array} filtered Users sockets (ids) that belong to a room
 * */

socketHandler.users.findInRoom = function ( id, idsOnly ) {
  var filtered = socketHandler.users.filter(function ( user ) {
    var socket = user.socket;
    return socket.client && socket.client.data && socket.client.data.rooms[id];
  });

  if ( idsOnly ) {
    filtered = filtered.map(function ( user ) {
      return user.id;
    });
  }

  return filtered;
};

/**
 * Join socket.io room
 * @param {id} userId User id
 * @param {id} roomId Room id
 * @param {id} chatId Chat id
 * */

socketHandler.joinRoom = function ( userId, roomId, chatId ) {
  var user = socketHandler.users.findById(userId);
  var socket = user ? user.socket : null;

  if ( socket && socket.client ) {
    socket.client.data.rooms[roomId] = {chatId: chatId};
    socket.join(SOCKET_ROOM_ALIAS + chatId);
  }
};

/**
 * Leave room
 * @param {id} userId User id
 * @param {id} roomId Room id
 * @param {id} chatId Chat id
 * @returns {Boolean} leave User removed from the room
 * */

socketHandler.leaveRoom = function ( userId, roomId, chatId ) {
  var user = socketHandler.users.findById(userId);
  var socket = user ? user.socket : null;
  var leave = !!socket && !!socket.client;

  if ( leave ) {
    var roomPresense = socket.client.data.rooms[roomId];

    if ( roomPresense ) {
      socket.leave(SOCKET_ROOM_ALIAS + chatId);
      delete socket.client.data.rooms[id];
    }
  }

  return leave;
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
