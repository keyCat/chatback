'use strict';
var servicename = 'FriendManager';

module.exports = function ( app ) {

  var dependencies = ['Friend', 'chatback.loopback.Subscribe'];

  function service( FriendResource, subscriber ) {
    var Friends = {
      list: []
    };

    subscriber.subscribe({
      modelName: 'Friend',
      method: 'POST'
    }, function ( resource ) {
      // TODO: save new friend request in the list
    });

    Friends.fetch = function () {
      var _self = this;

      return FriendResource.my(function ( resource ) {
        _self.list.splice(0, _self.list.length);
        _self.list.concat(resource);

        return _self.getList();
      });
    };

    Friends.add = function ( receiverId ) {
      return FriendResource.create({
        receiverId: receiverId
      });
    };

    Friends.getList = function () {
      return this.list;
    };

    return Friends;
  }

  service.$inject = dependencies;
  app.factory(app.name + '.' + servicename, service);
};
