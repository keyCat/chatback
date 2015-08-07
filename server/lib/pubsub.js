var pubsub = {};

/**
 * Publish an event
 * @param {Socket} socket The active socket
 * @param {Object} options Details about event
 */

pubsub.publish = function ( socket, options ) {
  if ( options ) {
    var name;
    var modelName = options.modelName,
      method = options.method,
      data = options.data,
      modelId = options.modelId;

    if ( method === 'POST' ) {
      name = '/' + modelName + '/' + method;
    } else {
      name = '/' + modelName + '/' + modelId + '/' + method;
    }

    socket.emit(name, data);
  } else {
    throw new Error('`options` must be defined');
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

module.exports = pubsub;
