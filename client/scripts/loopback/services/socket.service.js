'use strict';
var servicename = 'Socket';

module.exports = function ( app ) {
  var dependencies = ['LoopBackAuth'];

  function service( LoopBackAuth ) {
    var url = window.location.origin;
    var socket = io.connect(url);

    // TODO: Socket authentication

    return socket;
  }

  service.$inject = dependencies;
  app.factory(app.name + '.' + servicename, service);
};
