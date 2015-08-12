'use strict';
var servicename = 'RoomManager';

module.exports = function ( app ) {

  var dependencies = ['$q', 'Room', 'chatback.loopback.Subscribe'];

  function service( $q, Room, subscriber ) {
    var RoomManager = {
      connRooms: {
        // id/resource pair
      }
    };

    /**
     * Join a room
     * @param {Resource} room Room resource
     * @param {Object} room Configuration object {id: id}, {name: name} (id has most priority)
     */

    RoomManager.join = function ( room ) {
      var deferred = $q.defer();

      // ask server to join
      var join = function ( resource ) {
        resource.$join(function ( response ) {
            if ( response.chatId ) {
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
      var rememberRoom = function ( resource ) {
        RoomManager.connRooms[resource.id] = resource;
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

      deferred.promise.then(rememberRoom);

      return deferred.promise;
    };

    /**
     * Leave a room
     * @param {id} id Room id
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

    return RoomManager;
  }

  service.$inject = dependencies;
  app.factory(app.name + '.' + servicename, service);
};
