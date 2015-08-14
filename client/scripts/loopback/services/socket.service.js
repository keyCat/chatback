'use strict';
var servicename = 'Socket';

module.exports = function ( app ) {
  var dependencies = ['$q', 'LoopBackAuth'];

  var ioConfig = {
    'remember transport': true,
    forceNew: true,
    transports: [
      'websocket',
      'xhr-multipart',
      'xhr-polling',
      'jsonp-polling'
    ]
  };

  function service( $q, LoopBackAuth ) {
    var url = window.location.origin;
    var socket = io.connect(url, ioConfig);

    function defer() {
      socket.$conn = $q.defer();
      socket.$auth = $q.defer();
    }

    function onConnect() {
      socket.$conn.resolve();
      socket.emit('authentication', {id: LoopBackAuth.accessTokenId, userId: LoopBackAuth.currentUserId});

      socket.on('authenticated', function () {
        socket.$auth.resolve();
      });

      socket.on('unauthorized', function () {
        socket.$auth.reject();
      });
    }

    function reconnect() {
      var cbs = socket._callbacks;
      socket = io.connect(url, ioConfig);
      defer();
      socket._callbacks = cbs;
      socket.$reconnect = reconnect;
    }

    socket.$reconnect = reconnect;

    defer();

    socket.on('connect', onConnect);

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
