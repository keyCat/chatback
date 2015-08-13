'use strict';
var servicename = 'RoomManager';

module.exports = function ( app ) {

  var dependencies = ['$q', 'Room', app.name + '.Chat', 'chatback.loopback.Subscribe'];

  function service( $q, Room, Chat, subscriber ) {
    var RoomManager = {
      connRooms: {
        // roomId/resource pair
      },
      connChats: {
        // roomId/chat pair
      }
    };

    /**
     * Join a room
     * @param {Resource} room Room resource
     * @param {Object} room Configuration object {id: id}, {name: name} (id has most priority)
     * @param {Boolean} forceNew Force creation of new Chat object and Room resource. Useful for reconnects
     * @returns {Promise} promise Resolves into room resource with chat id and users present when room exists and server allowed to access it
     */

    RoomManager.join = function ( room, forceNew ) {
      var deferred = $q.defer();

      // ask server to join
      var join = function ( resource ) {
        resource.$join(function ( response ) {
            if ( response.chats && response.chats.id ) {
              deferred.resolve(resource);
            } else {
              deferred.reject(response);
            }
          }
          , function ( headers ) {
            deferred.reject(headers);
          });
      };

      // remember connected rooms
      var rememberRoomAndChat = function ( resource ) {
        var newRoom = !RoomManager.connRooms[resource.id] || forceNew;
        var newChat = !RoomManager.connChats[resource.id] || forceNew;

        if ( newRoom ) {
          RoomManager.connRooms[resource.id] = resource;
        }

        if ( newChat ) {
          RoomManager.connChats[resource.id] = new Chat(resource);
        }
      };

      if ( room ) {
        if ( room.$join ) {
          // we have a Room resource
          join(room);
        } else if ( room.id ) {
          // we have an object with id
          Room.findById(room.id
            , function ( resource ) {
              if ( resource && resource.$join ) join(resource);
              else deferred.reject(resource);
            }
            , function ( headers ) {
              deferred.reject(headers);
            });
        } else if ( room.name ) {
          // we have an object with name
          Room.findOne({filter: {where: {name: room.name}}}
            , function ( resource ) {
              if ( resource && resource.$join ) join(resource);
              else deferred.reject(resource);
            }
            , function ( headers ) {
              deferred.reject(headers);
            });
        }
      }

      deferred.promise.then(rememberRoomAndChat);

      return deferred.promise;
    };

    /**
     * Leave a room
     * @param {id} id Room id
     * @returns {Promise} promise Resolves into boolean when after server response
     */

    RoomManager.leave = function ( id ) {
      var deferred = $q.defer();
      var room = RoomManager.connRooms[id];
      var forgetRoom = function () {
        RoomManager.connRooms[id] = null;
      };

      if ( room ) {
        room.$leave(function ( response ) {
            $q.resolve(response);
          }
          , function ( headers ) {
            $q.reject(headers);
          });
      }

      deferred.promise.then(forgetRoom);

      return deferred.promise;
    };

    /**
     * Get associated chat
     * @param {id} id Room id
     * */

    RoomManager.getChat = function ( id ) {
      return RoomManager.connChats[id] || null;
    };

    /**
     * Get saved room resource
     * @param {id} id Room id
     * */

    RoomManager.getRoom = function ( id ) {
      return RoomManager.connRooms[id] || null;
    };

    return RoomManager;
  }

  service.$inject = dependencies;
  app.factory(app.name + '.' + servicename, service);
};
