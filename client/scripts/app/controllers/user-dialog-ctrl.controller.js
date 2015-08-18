'use strict';
var controllername = 'UserDialogCtrl';

module.exports = function ( app ) {
  var fullname = app.name + '.' + controllername;
  /*jshint validthis: true */

  var deps = ['$mdDialog', 'chatback.chat.FriendManager', 'message'];

  function controller( $mdDialog, fm, message ) {
    var vm = this;
    var friends = fm.getList();
    vm.controllername = fullname;
    vm.message = message;
    vm.isFriend = false;

    vm.cancel = function () {
      $mdDialog.cancel();
    };

    vm.addToFriends = function () {
      fm.add(vm.message.userId).then(function () {
        $mdDialog.hide();
      });
    };

    var activate = function () {
      for ( var i = 0; i < friends.length; i++ ) {
        if ( friends[i].status == 1 ) {
          if ( friends[i].user.id.toString() === message.userId.toString() ) {
            vm.isFriend = true;
            break;
          }
        }
      }
    };
    activate();
  }

  controller.$inject = deps;
  app.controller(fullname, controller);
};
