'use strict';

module.exports = function(app) {
    // inject:start
    require('./message-sender.service')(app);
    // inject:end
};