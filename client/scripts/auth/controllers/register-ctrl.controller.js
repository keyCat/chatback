'use strict';
var controllername = 'RegisterCtrl';

module.exports = function ( app ) {
  var fullname = app.name + '.' + controllername;
  /*jshint validthis: true */

  var deps = ['UserModel', '$state', 'chatback.loopback.Socket'];

  function controller( User, $state, socket ) {
    var vm = this;
    vm.controllername = fullname;
    vm.authFail = false;
    vm.errors = {
      email: {
      },
      username: {
      },
      password: {
      }
    };

    vm.register = function () {
      User.create(vm.user, function ( resource, headersGetter ) {
          vm.authFail = false;
          vm.login();
        },
        function ( response ) {
          var error = response.data.error;
          var errorCodes = error.details.codes;
          var errorMessages = error.details.messages;
          vm.authFail = true;

          if ( errorCodes.email ) {
            vm.errors.email.e = {};
            vm.errors.email.m = {};
            vm.errors.email.v = vm.user.email;

            for ( var i = 0; i < errorCodes.email.length; i++ ) {
              vm.errors.email.e[errorCodes.email[i]] = true;
              vm.errors.email.m[errorCodes.email[i]] = errorMessages.email[i];
            }
          }

          if ( errorCodes.username ) {
            vm.errors.username.e = {};
            vm.errors.username.m = {};
            vm.errors.username.v = vm.user.username;

            for ( var i = 0; i < errorCodes.username.length; i++ ) {
              vm.errors.username.e[errorCodes.username[i]] = true;
              vm.errors.username.m[errorCodes.username[i]] = errorMessages.username[i];
            }
          }

          if ( errorCodes.password ) {
            vm.errors.password.e = {};
            vm.errors.password.m = {};
            vm.errors.password.v = vm.user.password;

            for ( var i = 0; i < errorCodes.password.length; i++ ) {
              vm.errors.password.e[errorCodes.password[i]] = true;
              vm.errors.password.m[errorCodes.password[i]] = errorMessages.password[i];
            }
          }

          console.log(vm.errors);
        });
    };

    vm.login = function () {
      User.login(vm.user, function () {
        socket.$reconnect();
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
