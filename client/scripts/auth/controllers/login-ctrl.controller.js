'use strict';
var controllername = 'LoginCtrl';

module.exports = function ( app ) {
  var fullname = app.name + '.' + controllername;
  /*jshint validthis: true */

  var deps = ['UserModel'];

  function controller( UserModel ) {
    var vm = this;
    vm.controllername = fullname;
    vm.login = function () {
      UserModel.login(vm.user, function ( resource, headersGetter ) {
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
