'use strict';
var controllername = 'LoginCtrl';

module.exports = function ( app ) {
  var fullname = app.name + '.' + controllername;
  /*jshint validthis: true */

  var deps = ['$state', 'UserModel', 'chatback.loopback.Socket'];

  function controller( $state, User, socket ) {
    var vm = this;
    vm.controllername = fullname;
    vm.authFail = false;
    vm.login = function () {
      User.login(vm.user, function ( resource ) {
          socket.$reconnect();
          $state.go('app.home');
          vm.authFail = false;
        }
        , function ( response ) {
          vm.authFail = true;
        });
    };

    var activate = function () {
      vm.user = {
        email: '',
        password: ''
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
