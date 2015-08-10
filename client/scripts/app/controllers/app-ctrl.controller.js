'use strict';
var controllername = 'AppCtrl';

module.exports = function ( app ) {
  var fullname = app.name + '.' + controllername;
  /*jshint validthis: true */

  var deps = ['$mdMedia', '$mdDialog', 'Room', 'chatback.loopback.Socket'];

  function controller( $mdMedia, $mdDialog, Room, Socket ) {
    var vm = this;
    var createRoomDialogSettings = {
      controller: app.name + '.CreateRoomDialogCtrl as vm',
      template: require('../views/create-room.dialog.html'),
      parent: angular.element(document.body)
    };

    vm.controllername = fullname;
    vm.rooms = [];

    vm.triggerCreateRoomDialog = function ( evt ) {
      $mdDialog.show(angular.extend(createRoomDialogSettings, {targetEvent: evt}))
        .then(function ( resource ) {
          vm.rooms.push(resource);
        });

    };

    var activate = function () {
      vm.$mdMedia = $mdMedia;
      vm.rooms = Room.find();
    };
    activate();
  }

  controller.$inject = deps;
  app.controller(fullname, controller);
};
