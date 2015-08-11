'use strict';
var servicename = 'Publish';

module.exports = function ( app ) {

  var dependencies = [app.name + '.Socket'];

  function service( Socket ) {
    var service = {
      publish: function ( options, data ) {
        if ( options ) {
          var name;
          var modelName = options.modelName,
            method = options.method,
            modelId = options.modelId;

          name = method === 'POST'
            ? '/' + modelName + '/' + method
            : '/' + modelName + '/' + modelId + '/' + method;

          Socket.emit(name, data);
        }
      }
    };

    return service;
  }

  service.$inject = dependencies;
  app.factory(app.name + '.' + servicename, service);
};
