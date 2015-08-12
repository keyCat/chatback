'use strict';
var servicename = 'Socket';

module.exports = function ( app ) {
  var dependencies = ['$q', 'LoopBackAuth'];

  var ioConfig = {
    'remember transport': true,
    'transports': [
      'websocket',
      'xhr-multipart',
      'xhr-polling',
      'jsonp-polling'
    ]
  };

  function service( $q, LoopBackAuth ) {
    var url = window.location.origin;
    var socket = io.connect(url, ioConfig);
    var atId = LoopBackAuth.accessTokenId;
    var userId = LoopBackAuth.currentUserId;

    socket.$conn = $q.defer();
    socket.$auth = $q.defer();

    socket.on('connect', function () {
      socket.$conn.resolve();
      socket.emit('authentication', {id: atId, userId: userId});

      socket.on('authenticated', function () {
        socket.$auth.resolve();
      });

      socket.on('unauthorized', function () {
        socket.$auth.reject();
      });
    });

    socket.on('connect_timeout', function () {
      var m = 'timeout';
      socket.$conn.reject(m);
      socket.$auth.reject(m);
    });
    socket.on('connect_error', function () {
      var m = 'conn_error';
      socket.$conn.reject(m);
      socket.$auth.reject(m);
    });
    socket.on('disconnect', function () {
      var m = 'disconnect';
      socket.$conn.reject(m);
      socket.$auth.reject(m);
    });

    return socket;
  }

  service.$inject = dependencies;
  app.factory(app.name + '.' + servicename, service);
};
