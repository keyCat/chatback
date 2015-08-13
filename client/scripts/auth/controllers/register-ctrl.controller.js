'use strict';
var controllername = 'RegisterCtrl';

module.exports = function ( app ) {
  var fullname = app.name + '.' + controllername;
  /*jshint validthis: true */

  var deps = ['UserModel', '$state'];

  function controller( User, $state ) {
    var vm = this;
    vm.controllername = fullname;

    vm.register = function () {
      User.create(vm.user, function ( resource, headersGetter ) {
        vm.login();
      });
    };

    vm.login = function () {
      User.login(vm.user, function () {
        $state.go('app.home')
      });
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
