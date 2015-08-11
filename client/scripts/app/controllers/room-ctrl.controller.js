'use strict';
var controllername = 'RoomCtrl';

module.exports = function ( app ) {
  var fullname = app.name + '.' + controllername;
  /*jshint validthis: true */

  var deps = ['$state', 'resolvedRoom'];

  function controller( $state, resolvedRoom ) {
    var vm = this;
    vm.controllername = fullname;

    var activate = function () {
      var title = '#' + resolvedRoom.name;

      if ( $state.current.data ) {
        $state.current.data.title = title;
      } else {
        $state.current.data = {
          title: title
        }
      }
    };
    activate();
  }

  controller.$inject = deps;
  app.controller(fullname, controller);
};
