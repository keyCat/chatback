'use strict';

module.exports = function(app) {
    // inject:start
    require('./login-ctrl.controller')(app);
    require('./register-ctrl.controller')(app);
    // inject:end
};