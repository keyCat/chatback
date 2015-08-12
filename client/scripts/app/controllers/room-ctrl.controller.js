'use strict';
var controllername = 'RoomCtrl';

module.exports = function ( app ) {
  var fullname = app.name + '.' + controllername;
  /*jshint validthis: true */

  var deps = ['$scope', '$state', 'resolvedRoom', 'Chat', 'chatback.loopback.Subscribe'];

  function controller( $scope, $state, resolvedRoom, Chat, subscriber ) {
    var vm = this;
    vm.controllername = fullname;
    vm.messages = [];
    vm.users = [];

    vm.sendMessage = function () {
      if ( vm.message && resolvedRoom.chatId ) {
        Chat.messages.create({id: resolvedRoom.chatId}, {message: vm.message});
        vm.message = '';
      }
    };

    subscriber.subscribe({
      modelName: 'ChatMessage',
      method: 'POST'
    }, function ( message ) {
      vm.messages.push(message);
      $scope.$apply();
    });

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
    };
    activate();
  }

  controller.$inject = deps;
  app.controller(fullname, controller);
};
