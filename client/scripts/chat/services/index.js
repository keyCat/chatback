'use strict';

module.exports = function(app) {
    // inject:start
    require('./chat.service')(app);
    require('./room-manager.service')(app);
    // inject:end
};
