'use strict';
var servicename = 'Publish';

module.exports = function ( app ) {

  var dependencies = [app.name + '.Socket'];

  function optionsToName( options ) {
    return options.method === 'POST'
      ? '/' + options.modelName + '/' + options.method
      : '/' + options.modelName + '/' + options.modelId + '/' + options.method;
  }

  function service( socket ) {
    var service = {
      publish: function ( options, data ) {
        if ( options ) {
          var name = optionsToName(options);
          socket.emit(name, data);
        }
      }
    };

    return service;
  }

  service.$inject = dependencies;
  app.factory(app.name + '.' + servicename, service);
};
