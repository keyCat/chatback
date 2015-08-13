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
          initSockets: [namespace + '.loopback.Socket', function ( socket ) {
            return socket.$conn.promise;
          }],

          authentication: ['$q', '$state', 'UserModel', 'LoopBackAuth', function ( $q, $state, User, Auth ) {

            return User.getCurrent(function ( user ) {
                var at = Auth.accessTokenId;
                Auth.clearUser();
                Auth.setUser(at, user.id, user);
              },
              function ( headers ) {
                $state.go('auth.login');
              });
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
          resolvedRoom: ['$q',
                         '$state',
                         '$stateParams',
                         namespace + '.chat.RoomManager',
                         namespace + '.loopback.Socket',
                         function ( $q, $state, $stateParams, rm, socket ) {
                           var name = $stateParams.name;

                           return socket.$conn.promise
                             .then(function () {
                               return rm.join({name: name})
                                 .then(function ( room ) { return room });
                             });
                         }]
        }
      });
  };
  configRoutes.$inject = configRoutesDeps;
  app.config(configRoutes);

  return app;
};
