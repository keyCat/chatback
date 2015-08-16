'use strict';
var controllername = 'AppCtrl';

module.exports = function ( app ) {
  var fullname = app.name + '.' + controllername;
  /*jshint validthis: true */

  var deps = ['$mdMedia', '$mdUtil', '$mdSidenav', '$state', 'LoopBackAuth'];

  function controller( $mdMedia, $mdUtil, $mdSidenav, $state, Auth ) {
    var vm = this;
    vm.controllername = fullname;
    vm.$state = $state;
    vm.user = Auth.currentUserData;
    vm.sidenavLeftID = 'sidenav-left';

    vm.toggleMainSidenav = $mdUtil.debounce(function () {
      $mdSidenav(vm.sidenavLeftID).toggle();
    }, 200);

    var activate = function () {
      vm.$mdMedia = $mdMedia;
    };
    activate();
  }

  controller.$inject = deps;
  app.controller(fullname, controller);
};
