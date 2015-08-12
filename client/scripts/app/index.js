'use strict';
require('angular-ui-router');
require('angular-material');

var modulename = 'app';

module.exports = function ( namespace ) {

  var fullname = namespace + '.' + modulename;

  var angular = require('angular');
  var app = angular.module(fullname, ['ui.router', 'ngMaterial']);
  // inject:folders start
  require('./controllers')(app);
  // inject:folders end

  var configRoutesDeps = ['$stateProvider', '$urlRouterProvider'];
  var configRoutes = function ( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('app', {
        abstract: true,
        template: require('./views/app.html'),
        controller: fullname + '.AppCtrl as vm',
        resolve: {
          initSockets: [namespace + '.loopback.Socket', function (socket) {
            return socket.$conn.promise;
          }]
        }
      })
      .state('app.home', {
        url: '/',
        template: require('./views/home.html'),
        controller: fullname + '.HomeCtrl as homeVm',
        data: {title: 'Chatback'}
      })
      .state('app.room', {
        url: '/room/:name',
        template: require('./views/room.html'),
        controller: fullname + '.RoomCtrl as roomVm',
        resolve: {
          resolvedRoom: ['$q', '$state', '$stateParams', 'Room', namespace + '.loopback.Socket', function ( $q, $state, $stateParams, Room, socket ) {
            var name = $stateParams.name;
            var deferred = $q.defer();

            socket.$conn.promise.then(function () {
              Room.findOne({filter: {where: {"name": name}}},
                function ( resource ) {
                  resource.$join(function ( response ) {
                    if ( response.chatId ) {
                      deferred.resolve(resource);
                    } else {
                      deferred.reject(resource);
                    }
                  });
                },
                function ( headers ) {
                  deferred.reject(headers);
                  $state.go('app.home');
                });
            });

            return deferred.promise;
          }]
        }
      });
  };
  configRoutes.$inject = configRoutesDeps;
  app.config(configRoutes);

  return app;
};
