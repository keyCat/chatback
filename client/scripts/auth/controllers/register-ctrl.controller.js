'use strict';
var controllername = 'RegisterCtrl';

module.exports = function ( app ) {
  var fullname = app.name + '.' + controllername;
  /*jshint validthis: true */

  var deps = ['UserModel'];

  function controller( UserModel ) {
    var vm = this;
    vm.controllername = fullname;

    vm.register = function () {
      UserModel.create(vm.user, function ( resource, headersGetter ) {
        vm.login();
      });
    };

    vm.login = function () {
      UserModel.login(vm.user);
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
