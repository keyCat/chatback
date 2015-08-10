'use strict';

module.exports = function(app) {
    // inject:start
    require('./lb-generated.service')(app);
    require('./socket.service')(app);
    require('./subscribe.service')(app);
    // inject:end
};
