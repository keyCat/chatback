'use strict';
var servicename = 'MessageSender';

module.exports = function ( app ) {

  var dependencies = ['$q', 'chatback.loopback.Socket', 'chatback.loopback.Publish', 'chatback.loopback.Subscribe'];

  function service( $q, socket, publisher, subscriber ) {
    var MessageSender = {
      roomIds: {}
    };

    /**
     * Join a room
     * @param {id} id Room id
     */

    MessageSender.join = function ( id ) {
      var deffered = $q.defer();

      var options = {
        modelName: 'Room',
        method: 'JOIN',
        modelId: id
      };

      publisher.publish(options);
      subscriber.once(options, function ( payload ) {
        if ( payload.rejected ) {
          deffered.reject(payload);
          MessageSender.ids[id] = false;
        } else {
          deffered.resolve(payload);
          MessageSender.ids[id] = true;
        }
      });

      return deffered;
    };

    /**
     * Leave a room
     * @param {id} id Room id (will use MessageSender.currentRoom if undefined)
     */

    MessageSender.leave = function ( id ) {
      if ( id ) {
        var options = {
          modelName: 'Room',
          method: 'LEAVE',
          modelId: id
        };

        // TODO: unsubscribe from chatroom events
        publisher.publish(options);
        MessageSender.ids[id] = false;
      }
    };

    return MessageSender;
  }

  service.$inject = dependencies;
  app.factory(app.name + '.' + servicename, service);
};
