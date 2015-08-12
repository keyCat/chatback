'use strict';

module.exports = function(app) {
    // inject:start
    require('./room-manager.service')(app);
    // inject:end
};
