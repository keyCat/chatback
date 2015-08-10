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
      });
  };
  configRoutes.$inject = configRoutesDeps;
  app.config(configRoutes);

  return app;
};
