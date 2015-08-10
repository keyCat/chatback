'use strict';
var controllername = 'CreateRoomDialogCtrl';

module.exports = function ( app ) {
  var fullname = app.name + '.' + controllername;
  /*jshint validthis: true */

  var deps = ['$mdDialog', 'UserModel', 'LoopBackAuth'];

  function controller( $mdDialog, UserModel, LoopBackAuth ) {
    var vm = this;
    var user = {};
    vm.controllername = fullname;
    vm.room = {};

    vm.cancel = function () {
      $mdDialog.cancel();
    };

    vm.confirm = function () {
      UserModel.rooms.create(user, vm.room, function ( resource ) {
        $mdDialog.hide(resource);
      });
    };

    var activate = function () {
      vm.room.name = '';
      user.id = LoopBackAuth.currentUserId;
    };
    activate();
  }

  controller.$inject = deps;
  app.controller(fullname, controller);
};
