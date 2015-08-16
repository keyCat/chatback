'use strict';
var controllername = 'SidenavRoomsCtrl';

module.exports = function ( app ) {
  var fullname = app.name + '.' + controllername;
  /*jshint validthis: true */

  var deps = ['$scope', '$state', '$mdDialog', 'Room', 'chatback.loopback.Subscribe'];

  function controller( $scope, $state, $mdDialog, Room, subscriber ) {
    var vm = this;
    var createRoomDialogSettings = {
      controller: app.name + '.CreateRoomDialogCtrl as vm',
      template: require('../views/create-room.dialog.html'),
      parent: angular.element(document.body)
    };
    vm.controllername = fullname;
    vm.rooms = [];
    vm.progress = {};

    function onRoomCreate( room ) {
      vm.rooms.push(room);
      subscribeToUpdates(room);
      $scope.$apply();
    }

    function onRoomUpdate( room ) {
      for ( var i = 0; i < vm.rooms.length; i++ ) {
        if ( vm.rooms[i].id === room.id ) {
          vm.rooms[i].name = room.name;
          break;
        }
      }
      $scope.$apply();
    }

    function onRoomDelete( roomId ) {
      // TODO: Deletion code with soft user disconnect
      for ( var i = 0; i < vm.rooms.length; i++ ) {
        if ( vm.rooms[i].id === roomId ) {
          vm.rooms.splice(i, 1);
          break;
        }
      }
      $scope.$apply();
    }

    function subscribeToUpdates( room ) {
      subscriber.subscribe({
        modelName: Room.modelName,
        method: 'PUT',
        modelId: room.id
      }, onRoomUpdate);

      subscriber.subscribe({
        modelName: Room.modelName,
        method: 'DELETE',
        modelId: room.id
      }, onRoomDelete);
    }

    vm.join = function ( room ) {
      $state.go('app.room', {name: room.name});
    };

    vm.triggerCreateRoomDialog = function ( evt ) {
      $mdDialog.show(angular.extend(createRoomDialogSettings, {targetEvent: evt}));
    };

    vm.showProgress = function ( target ) {
      vm.progress[target] = true;
    };

    vm.hideProgress = function ( target ) {
      vm.progress[target] = false;
    };

    var activate = function () {
      vm.showProgress('rooms');
      vm.rooms = Room.find(function ( resource ) {
        vm.hideProgress('rooms');

        subscriber.subscribe({
          modelName: Room.modelName,
          method: 'POST'
        }, onRoomCreate);

        for ( var i = 0; i < resource.length; i++ ) {
          subscribeToUpdates(resource[i]);
        }
      });
    };
    activate();
  }

  controller.$inject = deps;
  app.controller(fullname, controller);
};
