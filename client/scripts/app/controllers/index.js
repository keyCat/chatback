'use strict';

module.exports = function ( app ) {
  // inject:start
  require('./app-ctrl.controller')(app);
  require('./create-room-dialog-ctrl.controller')(app);
  require('./home-ctrl.controller')(app);
  // inject:end
};
