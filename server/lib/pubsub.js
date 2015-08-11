var socketHandler = require('./socket');
var pubsub = {};
var subscriptions = [];

function optionsToName( options ) {
  return options.method === 'POST'
    ? '/' + options.modelName + '/' + options.method
    : '/' + options.modelName + '/' + options.modelId + '/' + options.method;
}

/**
 * Publish an event
 * @param {Socket} socket The active socket
 * @param {Object} options Details about event
 */

pubsub.publish = function ( socket, options ) {
  if ( options ) {
    var name = optionsToName(options);
    var data = options.data;

    socket.emit(name, data);
  }
  else {
    throw new Error('`options` must be defined');
  }
};

/**
 * Subscribe to an event
 * @param {Object} options Details about the event
 * @param {Function} cb Callback
 */

pubsub.subscribe = function ( options, cb ) {
  if ( options ) {
    var name = optionsToName(options);
    pubsub._pushSubscription({name: name, cb: cb});
  }
};

/**
 * Utility function to add subscriptions to existing and new user sockets, use pubsub.subscribe
 * @param {Socket} socket Connected socket
 * @param {String} name Event name
 * @param {Function} cb Callback reference
 */

pubsub._subscribeSocket = function ( socket, name, cb ) {
  socket.on(name, cb);
};

/**
 * Subscribe a socket to all subscribtions
 * @param {Socket} socket Connected socket
 */

pubsub._subscribeToPast = function ( socket ) {
  for ( var i = 0; i < subscriptions.length; i++ ) {
    pubsub._subscribeSocket(socket, subscriptions[i].name, subscriptions[i].cb);
  }
};

/**
 * Remember subscription
 * @param {Object} sub
 */

pubsub._pushSubscription = function ( sub ) {
  var socketUsers = socketHandler.users;
  subscriptions.push(sub);

  if ( socketUsers ) {
    for ( var i = 0; i < socketUsers.length; i++ ) {
      pubsub._subscribeSocket(socketUsers[i].socket, sub.name, sub.cb);
    }
  }
};

/**
 * Check if an object is empty
 * @param {Object} obj
 */

pubsub.isEmpty = function ( obj ) {
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  if ( obj == null ) return true;
  if ( obj.length > 0 ) return false;
  if ( obj.length === 0 ) return true;

  for ( var key in obj ) {
    if ( hasOwnProperty.call(obj, key) ) {
      return false;
    }
  }

  return true;
};

pubsub.subscriptions = subscriptions;

module.exports = pubsub;
