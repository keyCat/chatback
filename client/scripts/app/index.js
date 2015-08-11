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
        controller: fullname + '.AppCtrl as vm'
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
          resolvedRoom: ['$q', '$state', '$stateParams', 'Room', function ( $q, $state, $stateParams, Room ) {
            var name = $stateParams.name;
            var deferred = $q.defer();

            Room.findOne({filter: {where: {"name": name}}},
              function ( resource ) {
                deferred.resolve(resource);
              },
              function ( headers ) {
                deferred.reject(headers);
                $state.go('app.home');
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
