'use strict';

module.exports = function ( app ) {
  // inject:start
  require('./app-ctrl.controller')(app);
  require('./create-room-dialog-ctrl.controller')(app);
  require('./home-ctrl.controller')(app);
  require('./room-ctrl.controller')(app);
  require('./sidenav-friends-ctrl.controller')(app);
  require('./sidenav-rooms-ctrl.controller')(app);
  require('./user-dialog-ctrl.controller')(app);
  // inject:end
};
