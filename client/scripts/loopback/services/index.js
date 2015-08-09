'use strict';

module.exports = function(app) {
    // inject:start
    require('./subscribe.service')(app);
    require('./socket.service')(app);
    // inject:end
};
