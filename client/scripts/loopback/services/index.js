'use strict';

module.exports = function(app) {
    // inject:start
    require('./socket.service')(app);
    // inject:end
};