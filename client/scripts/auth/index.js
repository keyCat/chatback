'use strict';
require('angular-ui-router');
require('angular-material');

var modulename = 'auth';

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
    $stateProvider.state('auth', {
      abstract: true,
      template: require('./views/auth.html')
    });

    $stateProvider.state('auth.login', {
      url: '/login',
      controller: fullname + '.LoginCtrl as vm',
      template: require('./views/login.html')
    });

    $stateProvider.state('auth.register', {
      url: '/register',
      controller: fullname + '.RegisterCtrl as vm',
      template: require('./views/register.html')
    });
  };
  configRoutes.$inject = configRoutesDeps;
  app.config(configRoutes);

  return app;
};
