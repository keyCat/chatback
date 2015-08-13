'use strict';
var controllername = 'RoomCtrl';

module.exports = function ( app ) {
  var fullname = app.name + '.' + controllername;
  /*jshint validthis: true */

  var deps = ['$scope', '$state', 'resolvedRoom', 'chatback.loopback.Subscribe', 'chatback.chat.RoomManager'];

  function controller( $scope, $state, resolvedRoom, subscriber, rm ) {
    var vm = this;
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
