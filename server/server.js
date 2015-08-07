var loopback = require('loopback'),
  boot = require('loopback-boot');

var io = require('socket.io'),
  ioAuth = require('socketio-auth');

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

    ioAuth(app.io, {
      authenticate: function ( value, cb ) {
        var AccessToken = app.models.AccessToken,
          token = AccessToken.find({
              where: {
                and: [{userId: value.userId}, {id: value.id}]
              }
            },
            function ( err, tokenDetail ) {
              if ( err ) throw err;

              cb(null, tokenDetail.length > 0);
            });
      }
    });
  }
});
