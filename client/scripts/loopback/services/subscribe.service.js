'use strict';
var servicename = 'Subscribe';

module.exports = function ( app ) {

  var dependencies = [app.name + '.Socket'];

  function optionsToName( options ) {
    return options.method === 'POST'
      ? '/' + options.modelName + '/' + options.method
      : '/' + options.modelName + '/' + options.modelId + '/' + options.method;
  }

  function service( socket ) {
    var subscriptions = [];
    var service = {
      getSubscriptions: function () {
        return subscriptions;
      },

      subscribe: function ( options, cb ) {
        if ( options ) {
          var name = optionsToName(options);
          socket.on(name, cb);
          this._pushSubscription(name);
        }
      },

      once: function ( options, cb ) {
        var name = optionsToName(options);
        socket.once(name, cb);
      },

      _pushSubscription: function ( subName ) {
        subscriptions.push(subName);
      },

      unsubscribeAll: function () {
        for ( var i = 0; i < subscriptions.length; i++ ) {
          socket.removeAllListeners(subscriptions[i]);
        }

        subscriptions = [];
      },

      unsubscribe: function ( options ) {
        var name = optionsToName(options);
        socket.removeAllListeners(name);
        for ( var i = 0; i < subscriptions.length; i++ ) {
          if ( subscriptions[i] === name ) {
            subscriptions.splice(i, 1);
            break;
          }
        }
      },

      unsubscribeForRoute: function () {
        // TODO: remove subscriptions for specific route to use onExit
      }
    };

    return service;
  }

  service.$inject = dependencies;
  app.factory(app.name + '.' + servicename, service);
};
