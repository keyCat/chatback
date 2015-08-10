'use strict';
require('angular-ui-router');
require('angular-material');

module.exports = function ( namespace ) {
  var modulename = 'loopback';
  var fullname = namespace + '.' + modulename;
  var angular = require('angular');

  var app = angular.module(fullname, ['ngResource']);
  // inject:folders start
  require('./services')(app);
  // inject:folders end

  return app;
};
