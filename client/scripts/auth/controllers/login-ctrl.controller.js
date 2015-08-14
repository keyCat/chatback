'use strict';
var controllername = 'LoginCtrl';

module.exports = function ( app ) {
  var fullname = app.name + '.' + controllername;
  /*jshint validthis: true */

  var deps = ['$state', 'UserModel', 'chatback.loopback.Socket'];

  function controller( $state, User, socket ) {
    var vm = this;
    vm.controllername = fullname;
    vm.login = function () {
      User.login(vm.user, function ( resource ) {
        socket.$reconnect();
        $state.go('app.home');
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
