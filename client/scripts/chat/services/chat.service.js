'use strict';
var servicename = 'Chat';

module.exports = function ( app ) {

  var dependencies = ['$q', '$rootScope', 'Chat', 'chatback.loopback.Subscribe'];

  function service( $q, $rootScope, ChatResource, subscriber ) {
    var messageModel = 'ChatMessage';

    /**
     * Chat class
     * @param {Object} room Room object. Chat instance can not exist without room.
     * */

    function Chat( room ) {
      var _self = this;
      this.receivedCbs = [];
      this.messages = [];
      this.users = [];
      this.room = room;
      this._active = angular.isDefined(room.id) && angular.isDefined(room.chats.id);

      if ( this._active ) {
        this.id = this.room.chats.id;
        subscriber.subscribe({
          modelName: messageModel,
          method: 'POST'
        }, function ( message ) {
          // TODO: store limited amount of messages and pull other from history
          if ( message.chatId === _self.id ) {
            _self.messages.push(message);
            for ( var i = 0; i < _self.receivedCbs.length; i++ ) {
              _self.receivedCbs[i](message);
            }
          }
        });

        _self.getHistory().then(function ( messages ) {
          for ( var i = 0; messages[i]; i++ ) {
            _self.messages.push(messages[i]);
          }
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
        message = ChatResource.messages.create({id: this.room.chats.id}, {message: msg}).$promise;
      } else {
        deferred.reject();
        message = deferred.promise;
      }

      return message;
    };

    /*
     * Fetch chat history
     * @returns Promise
     * */

    Chat.prototype.getHistory = function () {
      var req = {
        id: this.id,
        filter: {
          limit: 50,
          skip: this.messages.length,
          order: 'sentTs DESC'
        }
      };

      return ChatResource.messages(req).$promise;
    };

    /**
     * Register callback on receiving new message
     * @param {Function} cb Callback
     * */

    Chat.prototype.onMessageReceived = function ( cb ) {
      if ( typeof cb === 'function' ) {
        this.receivedCbs.push(cb);
      }
    };

    /**
     * Return messages
     * */

    Chat.prototype.getMessages = function () {
      return this.messages;
    };

    return Chat;
  }

  service.$inject = dependencies;
  app.factory(app.name + '.' + servicename, service);
};
