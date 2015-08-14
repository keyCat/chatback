'use strict';

module.exports = function(app) {
    // inject:start
    require('./chat.service')(app);
    require('./friend-manager.service')(app);
    require('./room-manager.service')(app);
    // inject:end
};
