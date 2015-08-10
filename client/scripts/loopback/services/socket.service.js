'use strict';
var servicename = 'Socket';

module.exports = function ( app ) {
  var dependencies = ['LoopBackAuth'];

  function service( LoopBackAuth ) {
    var url = window.location.origin;
    var socket = io.connect(url);
    var atId = LoopBackAuth.accessTokenId;
    var userId = LoopBackAuth.currentUserId;

    socket.on('connect', function () {
      socket.emit('authentication', {id: atId, userId: userId});
    });

    return socket;
  }

  service.$inject = dependencies;
  app.factory(app.name + '.' + servicename, service);
};
