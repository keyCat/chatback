module.exports = {
  "initial:before": {
    "loopback#favicon": {}
  },
  "initial": {
    "compression": {},
    "cors": {
      "params": {
        "origin": true,
        "credentials": true,
        "maxAge": 86400
      }
    }
  },
  "session": {},
  "auth": {},
  "parse": {},
  "routes": {},
  "files": {
    "loopback#static": {
      "params": "$!../dist/app/dev/"
    }
  },
  "final": {
    "loopback#urlNotFound": {}
  },
  "final:after": {
    "errorhandler": {}
  }
};
