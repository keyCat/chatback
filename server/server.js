var loopback = require('loopback'),
  boot = require('loopback-boot');

var io = require('socket.io'),
  socketsHandler = require('./lib/socket');

var app = module.exports = loopback();

app.start = function () {
  // start the web server
  return app.listen(function () {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function ( err ) {
  if ( err ) throw err;

  // start the server if `$ node server.js`
  if ( require.main === module ) {
    app.io = io(app.start());
    socketsHandler(app.io, app);
  }
});
