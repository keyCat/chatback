'use strict';
require('angular-ui-router');
require('angular-material');

var modulename = 'chat';

module.exports = function(namespace) {

    var fullname = namespace + '.' + modulename;

    var angular = require('angular');
    var app = angular.module(fullname, ['ui.router', 'ngMaterial']);
    // inject:folders start
    require('./services')(app);
    // inject:folders end

    return app;
};