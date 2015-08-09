'use strict';
var servicename = 'Subscribe';

module.exports = function ( app ) {

  var dependencies = ['Socket'];

  function service( Socket ) {
    var subscriptions = [];
    var service = {
      getSubscriptions: function () {
        return subscriptions;
      },

      subscribe: function ( options, cb ) {
        if ( options ) {
          var name;
          var modelName = options.modelName,
            method = options.method,
            modelId = options.modelId;

          name = method === 'POST'
            ? '/' + modelName + '/' + method
            : '/' + modelName + '/' + modelId + '/' + method;

          Socket.on(name, cb);
          this._pushSubscription(name);
        }
      },

      _pushSubscription: function ( subName ) {
        subscriptions.push(subName);
      },

      unsubscribeAll: function () {
        for ( var i = 0; i < subscriptions.length; i++ ) {
          socket.removeAllListeners(subscriptions[i]);
        }
      }
    };

    return service;
  }

  service.$inject = dependencies;
  app.factory(app.name + '.' + servicename, service);
};
