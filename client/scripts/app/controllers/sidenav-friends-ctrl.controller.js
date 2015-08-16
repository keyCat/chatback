'use strict';
var controllername = 'SidenavFriendsCtrl';

module.exports = function ( app ) {
  var fullname = app.name + '.' + controllername;
  /*jshint validthis: true */

  var deps = ['$scope', 'chatback.chat.FriendManager'];

  function controller( $scope, fm ) {
    var vm = this;
    vm.controllername = fullname;
    vm.friends = [];

    function onNewFriend() {
      vm.friends = fm.getList();
      $scope.$apply();
    }

    vm.openFriendMenu = function ( $mdOpenMenu, evt ) {
      $mdOpenMenu(evt);
    };

    var activate = function () {
      vm.friends = fm.fetch();
      fm.onNewFriend(onNewFriend);
    };
    activate();
  }

  controller.$inject = deps;
  app.controller(fullname, controller);
};
