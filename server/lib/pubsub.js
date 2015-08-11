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
 * @param {Socket} socket The active socket
 * @param {Object} options Details about the event
 * @param {Function} cb Callback
 */

pubsub.subscribe = function ( socket, options, cb ) {
  if ( options ) {
    var name = optionsToName(options);

    socket.on(name, cb);
    pubsub._pushSubscription(name);
  }
};

/**
 * Remember subscription
 * @param {String} subName Subscription (event) name
 */

pubsub._pushSubscription = function ( subName ) {
  subscriptions.push(subName);
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

module.exports = pubsub;
