'use strict';
var controllername = 'UserDialogCtrl';

module.exports = function ( app ) {
  var fullname = app.name + '.' + controllername;
  /*jshint validthis: true */

  var deps = ['$mdDialog', 'chatback.chat.FriendManager', 'message'];

  function controller( $mdDialog, fm, message ) {
    var vm = this;
    vm.controllername = fullname;
    vm.message = message;

    vm.cancel = function () {
      $mdDialog.cancel();
    };

    vm.addToFriends = function () {
      fm.add(vm.message.userId).then(function () {
        $mdDialog.hide();
      });
    };

    var activate = function () {

    };
    activate();
  }

  controller.$inject = deps;
  app.controller(fullname, controller);
};
