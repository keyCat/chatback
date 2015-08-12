'use strict';
var servicename = 'Chat';

module.exports = function ( app ) {

  var dependencies = ['$q', 'Chat', 'chatback.loopback.Subscribe'];

  function service( $q, ChatResource, subscriber ) {
    var messageModel = 'ChatMessage';

    /**
     * Chat class
     * @param {Object} room Room object. Chat instance can not exist without room.
     * */

    function Chat( room ) {
      var _self = this;
      this.messages = [];
      this.users = [];
      this.room = room;
      this._active = angular.isDefined(room.id) && angular.isDefined(room.chats.id);

      if ( this._active ) {
        this.id = this.chatId;
        subscriber.subscribe({
          modelName: messageModel,
          method: 'POST'
        }, function ( message ) {
          // TODO: store limited amount of messages and pull other from history
          _self.messages.push(message);
        });
      }
    }

    /**
     * Post a new message to the server
     * @param {String} msg Text of message
     * */

    Chat.prototype.send = function ( msg ) {
      var deferred = $q.defer();
      var message = null;

      if ( this._active && msg ) {
        msg = msg.toString();

        // strip spaces (sorry, ASCII art)
        msg = msg.replace(/^\s+/g, '').replace(/\s+/g, ' ').replace(/\s+$/g, '');
        message = ChatResource.messages.create({id: this.room.chats.id}, {message: msg}).$promise;
      } else {
        deferred.reject();
        message = deferred.promise;
      }

      return message;
    };

    return Chat;
  }

  service.$inject = dependencies;
  app.factory(app.name + '.' + servicename, service);
};
