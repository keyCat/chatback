'use strict';
var controllername = 'RegisterCtrl';

module.exports = function ( app ) {
  var fullname = app.name + '.' + controllername;
  /*jshint validthis: true */

  var deps = ['User'];

  function controller( User ) {
    var vm = this;
    vm.controllername = fullname;

    vm.register = function () {
      User.create(vm.user, function ( resource, headersGetter ) {
        vm.login();
      });
    };

    vm.login = function () {
      User.login(vm.user);
    };

    var activate = function () {
      vm.user = {
        username: null,
        email: null,
        password: null
      };

      vm.options = {
        updateOn: 'blur'
      };
    };
    activate();
  }

  controller.$inject = deps;
  app.controller(fullname, controller);
};
