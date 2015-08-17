'use strict';
var servicename = 'FriendManager';

module.exports = function ( app ) {

  var dependencies = ['Friend', 'chatback.loopback.Subscribe'];

  function service( FriendResource, subscriber ) {
    var Friends = {
      list: [],
      newFriendCbs: [],
      updateCbs: [],
      deleteCbs: []
    };

    var subscribeToUpdates = function ( id ) {
      subscriber.subscribe({
        modelName: 'Friend',
        modelId: id,
        method: 'PUT'
      }, function ( resource ) {
        var index = null;
        for ( var i = 0; i < Friends.list.length; i++ ) {
          if ( Friends.list[i].id.toString() === id.toString() ) {
            index = i;
            break;
          }
        }

        var changed = Friends.list[i];
        for ( var key in resource ) {
          if ( resource && resource.hasOwnProperty(key) ) {
            changed[key] = resource[key]
          }
        }

        for ( i = 0; i < Friends.updateCbs.length; i++ ) {
          Friends.updateCbs[i](changed);
        }
      });

      subscriber.subscribe({
        modelName: 'Friend',
        modelId: id,
        method: 'DELETE'
      }, function ( resource ) {
        for ( var i = 0; i < Friends.list.length; i++ ) {
          if ( Friends.list[i].id.toString() === id.toString() ) {
            Friends.list.splice(i);
            break;
          }
        }

        for ( i = 0; i < Friends.deleteCbs.length; i++ ) {
          Friends.deleteCbs[i](resource);
        }
      });
    };

    subscriber.subscribe({
      modelName: 'Friend',
      method: 'POST'
    }, function ( resource ) {
      // TODO: save new friend request in the list
      Friends.list.push(resource);
      subscribeToUpdates(resource.id);
      for ( var i = 0; i < Friends.newFriendCbs.length; i++ ) {
        Friends.newFriendCbs[i](resource);
      }
    });

    Friends.fetch = function () {
      var _self = this;

      return FriendResource.my(function ( resource ) {
        if ( resource ) {
          _self.list = resource;

          for ( var i = 0; i < _self.list.length; i++ ) {
            subscribeToUpdates(_self.list[i].id);
          }
        }

        return _self.getList();
      });
    };

    Friends.accept = function ( id ) {
      return FriendResource.accept({id: id});
    };

    Friends.remove = function ( id ) {
      return FriendResource.removeById({id: id});
    };

    Friends.add = function ( receiverId ) {
      return FriendResource.create({
        receiverId: receiverId
      });
    };

    Friends.onNewFriend = function ( cb ) {
      if ( typeof cb === 'function' ) {
        this.newFriendCbs.push(cb);
      }
    };

    Friends.onFriendUpdate = function ( cb ) {
      if ( typeof cb === 'function' ) {
        this.updateCbs.push(cb);
      }
    };

    Friends.onFriendDelete = function ( cb ) {
      if ( typeof cb === 'function' ) {
        this.deleteCbs.push(cb);
      }
    };

    Friends.getList = function () {
      return this.list;
    };

    return Friends;
  }

  service.$inject = dependencies;
  app.factory(app.name + '.' + servicename, service);
};
