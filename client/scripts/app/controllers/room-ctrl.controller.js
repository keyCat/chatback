'use strict';
var controllername = 'RoomCtrl';

module.exports = function ( app ) {
  var fullname = app.name + '.' + controllername;
  /*jshint validthis: true */

  var deps = ['$scope', '$state', '$mdDialog', 'resolvedRoom', 'LoopBackAuth', 'chatback.chat.RoomManager'];

  function controller( $scope, $state, $mdDialog, resolvedRoom, Auth, rm ) {
    var vm = this;
    var userDialogSettings = {
      controller: app.name + '.UserDialogCtrl as vm',
      template: require('../views/user.dialog.html'),
      parent: angular.element(document.body)
    };

    vm.controllername = fullname;
    vm.chat = rm.getChat(resolvedRoom.id);
    vm.messages = [];

    vm.chat.onMessageReceived(function ( message ) {
      vm.messages = vm.chat.getMessages();
      $scope.$apply();
    });

    vm.sendMessage = function () {
      vm.chat.send(vm.message)
        .then(function () {
          vm.message = '';
        });
    };

    vm.triggerUserDialog = function ( message, evt ) {
      if ( Auth.currentUserId !== message.userId ) {
        $mdDialog.show(angular.extend(userDialogSettings, {
          targetEvent: evt,
          locals: {message: message}
        }));
      }
    };

    var activate = function () {
      var title = '#' + resolvedRoom.name;

      if ( $state.current.data ) {
        $state.current.data.title = title;
      } else {
        $state.current.data = {
          title: title
        }
      }
      vm.message = '';
      vm.messages = vm.chat.getMessages();
    };
    activate();
  }

  controller.$inject = deps;
  app.controller(fullname, controller);
};
