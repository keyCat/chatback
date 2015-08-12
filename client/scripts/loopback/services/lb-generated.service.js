'use strict';
var servicename = 'lbGenerated';

module.exports = function(app) {

  /**
   * @ngdoc overview
   * @name lbServices
   * @module
   * @description
   *
   * The `lbServices` module provides services for interacting with
   * the models exposed by the LoopBack server via the REST API.
   *
   */

  var urlBase = "/api";
  var authHeader = 'authorization';

  /**
   * @ngdoc object
   * @name lbServices.AccessToken
   * @header lbServices.AccessToken
   * @object
   *
   * @description
   *
   * A $resource object for interacting with the `AccessToken` model.
   *
   * ## Example
   *
   * See
   * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
   * for an example of using this object.
   *
   */
  app.factory(
    "AccessToken",
    ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
      var R = Resource(
        urlBase + "/AccessTokens/:id",
        { 'id': '@id' },
        {

          /**
           * @ngdoc method
           * @name lbServices.AccessToken#prototype$__get__user
           * @methodOf lbServices.AccessToken
           *
           * @description
           *
           * Fetches belongsTo relation user.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - PersistedModel id
           *
           *  - `refresh` – `{boolean=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `AccessToken` object.)
           * </em>
           */
          "prototype$__get__user": {
            url: urlBase + "/AccessTokens/:id/user",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.AccessToken#create
           * @methodOf lbServices.AccessToken
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `AccessToken` object.)
           * </em>
           */
          "create": {
            url: urlBase + "/AccessTokens",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.AccessToken#createMany
           * @methodOf lbServices.AccessToken
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `AccessToken` object.)
           * </em>
           */
          "createMany": {
            isArray: true,
            url: urlBase + "/AccessTokens",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.AccessToken#upsert
           * @methodOf lbServices.AccessToken
           *
           * @description
           *
           * Update an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `AccessToken` object.)
           * </em>
           */
          "upsert": {
            url: urlBase + "/AccessTokens",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name lbServices.AccessToken#exists
           * @methodOf lbServices.AccessToken
           *
           * @description
           *
           * Check whether a model instance exists in the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `exists` – `{boolean=}` -
           */
          "exists": {
            url: urlBase + "/AccessTokens/:id/exists",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.AccessToken#findById
           * @methodOf lbServices.AccessToken
           *
           * @description
           *
           * Find a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `filter` – `{object=}` - Filter defining fields and include
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `AccessToken` object.)
           * </em>
           */
          "findById": {
            url: urlBase + "/AccessTokens/:id",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.AccessToken#find
           * @methodOf lbServices.AccessToken
           *
           * @description
           *
           * Find all instances of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `AccessToken` object.)
           * </em>
           */
          "find": {
            isArray: true,
            url: urlBase + "/AccessTokens",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.AccessToken#findOne
           * @methodOf lbServices.AccessToken
           *
           * @description
           *
           * Find first instance of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `AccessToken` object.)
           * </em>
           */
          "findOne": {
            url: urlBase + "/AccessTokens/findOne",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.AccessToken#updateAll
           * @methodOf lbServices.AccessToken
           *
           * @description
           *
           * Update instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "updateAll": {
            url: urlBase + "/AccessTokens/update",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.AccessToken#deleteById
           * @methodOf lbServices.AccessToken
           *
           * @description
           *
           * Delete a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "deleteById": {
            url: urlBase + "/AccessTokens/:id",
            method: "DELETE"
          },

          /**
           * @ngdoc method
           * @name lbServices.AccessToken#count
           * @methodOf lbServices.AccessToken
           *
           * @description
           *
           * Count instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` -
           */
          "count": {
            url: urlBase + "/AccessTokens/count",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.AccessToken#prototype$updateAttributes
           * @methodOf lbServices.AccessToken
           *
           * @description
           *
           * Update attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - PersistedModel id
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `AccessToken` object.)
           * </em>
           */
          "prototype$updateAttributes": {
            url: urlBase + "/AccessTokens/:id",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name lbServices.AccessToken#createChangeStream
           * @methodOf lbServices.AccessToken
           *
           * @description
           *
           * Create a change stream.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `changes` – `{ReadableStream=}` -
           */
          "createChangeStream": {
            url: urlBase + "/AccessTokens/change-stream",
            method: "POST"
          },

          // INTERNAL. Use UserModel.accessTokens.findById() instead.
          "::findById::UserModel::accessTokens": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/Users/:id/accessTokens/:fk",
            method: "GET"
          },

          // INTERNAL. Use UserModel.accessTokens.destroyById() instead.
          "::destroyById::UserModel::accessTokens": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/Users/:id/accessTokens/:fk",
            method: "DELETE"
          },

          // INTERNAL. Use UserModel.accessTokens.updateById() instead.
          "::updateById::UserModel::accessTokens": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/Users/:id/accessTokens/:fk",
            method: "PUT"
          },

          // INTERNAL. Use UserModel.accessTokens() instead.
          "::get::UserModel::accessTokens": {
            isArray: true,
            url: urlBase + "/Users/:id/accessTokens",
            method: "GET"
          },

          // INTERNAL. Use UserModel.accessTokens.create() instead.
          "::create::UserModel::accessTokens": {
            url: urlBase + "/Users/:id/accessTokens",
            method: "POST"
          },

          // INTERNAL. Use UserModel.accessTokens.createMany() instead.
          "::createMany::UserModel::accessTokens": {
            isArray: true,
            url: urlBase + "/Users/:id/accessTokens",
            method: "POST"
          },

          // INTERNAL. Use UserModel.accessTokens.destroyAll() instead.
          "::delete::UserModel::accessTokens": {
            url: urlBase + "/Users/:id/accessTokens",
            method: "DELETE"
          },

          // INTERNAL. Use UserModel.accessTokens.count() instead.
          "::count::UserModel::accessTokens": {
            url: urlBase + "/Users/:id/accessTokens/count",
            method: "GET"
          },
        }
      );



      /**
       * @ngdoc method
       * @name lbServices.AccessToken#updateOrCreate
       * @methodOf lbServices.AccessToken
       *
       * @description
       *
       * Update an existing model instance or insert a new one into the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *   This method does not accept any parameters.
       *   Supply an empty object or omit this argument altogether.
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `AccessToken` object.)
       * </em>
       */
      R["updateOrCreate"] = R["upsert"];

      /**
       * @ngdoc method
       * @name lbServices.AccessToken#update
       * @methodOf lbServices.AccessToken
       *
       * @description
       *
       * Update instances of the model matched by where from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R["update"] = R["updateAll"];

      /**
       * @ngdoc method
       * @name lbServices.AccessToken#destroyById
       * @methodOf lbServices.AccessToken
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R["destroyById"] = R["deleteById"];

      /**
       * @ngdoc method
       * @name lbServices.AccessToken#removeById
       * @methodOf lbServices.AccessToken
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R["removeById"] = R["deleteById"];


      /**
       * @ngdoc property
       * @name lbServices.AccessToken#modelName
       * @propertyOf lbServices.AccessToken
       * @description
       * The name of the model represented by this $resource,
       * i.e. `AccessToken`.
       */
      R.modelName = "AccessToken";


      return R;
    }]);

  /**
   * @ngdoc object
   * @name lbServices.UserModel
   * @header lbServices.UserModel
   * @object
   *
   * @description
   *
   * A $resource object for interacting with the `UserModel` model.
   *
   * ## Example
   *
   * See
   * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
   * for an example of using this object.
   *
   */
  app.factory(
    "UserModel",
    ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
      var R = Resource(
        urlBase + "/Users/:id",
        { 'id': '@id' },
        {

          // INTERNAL. Use UserModel.accessTokens.findById() instead.
          "prototype$__findById__accessTokens": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/Users/:id/accessTokens/:fk",
            method: "GET"
          },

          // INTERNAL. Use UserModel.accessTokens.destroyById() instead.
          "prototype$__destroyById__accessTokens": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/Users/:id/accessTokens/:fk",
            method: "DELETE"
          },

          // INTERNAL. Use UserModel.accessTokens.updateById() instead.
          "prototype$__updateById__accessTokens": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/Users/:id/accessTokens/:fk",
            method: "PUT"
          },

          // INTERNAL. Use UserModel.rooms.findById() instead.
          "prototype$__findById__rooms": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/Users/:id/rooms/:fk",
            method: "GET"
          },

          // INTERNAL. Use UserModel.rooms.destroyById() instead.
          "prototype$__destroyById__rooms": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/Users/:id/rooms/:fk",
            method: "DELETE"
          },

          // INTERNAL. Use UserModel.rooms.updateById() instead.
          "prototype$__updateById__rooms": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/Users/:id/rooms/:fk",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name lbServices.UserModel#prototype$__findById__messages
           * @methodOf lbServices.UserModel
           *
           * @description
           *
           * Find a related item by id for messages.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - User id
           *
           *  - `fk` – `{*}` - Foreign key for messages
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `UserModel` object.)
           * </em>
           */
          "prototype$__findById__messages": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/Users/:id/messages/:fk",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.UserModel#prototype$__destroyById__messages
           * @methodOf lbServices.UserModel
           *
           * @description
           *
           * Delete a related item by id for messages.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - User id
           *
           *  - `fk` – `{*}` - Foreign key for messages
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "prototype$__destroyById__messages": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/Users/:id/messages/:fk",
            method: "DELETE"
          },

          /**
           * @ngdoc method
           * @name lbServices.UserModel#prototype$__updateById__messages
           * @methodOf lbServices.UserModel
           *
           * @description
           *
           * Update a related item by id for messages.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - User id
           *
           *  - `fk` – `{*}` - Foreign key for messages
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `UserModel` object.)
           * </em>
           */
          "prototype$__updateById__messages": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/Users/:id/messages/:fk",
            method: "PUT"
          },

          // INTERNAL. Use UserModel.accessTokens() instead.
          "prototype$__get__accessTokens": {
            isArray: true,
            url: urlBase + "/Users/:id/accessTokens",
            method: "GET"
          },

          // INTERNAL. Use UserModel.accessTokens.create() instead.
          "prototype$__create__accessTokens": {
            url: urlBase + "/Users/:id/accessTokens",
            method: "POST"
          },

          // INTERNAL. Use UserModel.accessTokens.destroyAll() instead.
          "prototype$__delete__accessTokens": {
            url: urlBase + "/Users/:id/accessTokens",
            method: "DELETE"
          },

          // INTERNAL. Use UserModel.accessTokens.count() instead.
          "prototype$__count__accessTokens": {
            url: urlBase + "/Users/:id/accessTokens/count",
            method: "GET"
          },

          // INTERNAL. Use UserModel.rooms() instead.
          "prototype$__get__rooms": {
            isArray: true,
            url: urlBase + "/Users/:id/rooms",
            method: "GET"
          },

          // INTERNAL. Use UserModel.rooms.create() instead.
          "prototype$__create__rooms": {
            url: urlBase + "/Users/:id/rooms",
            method: "POST"
          },

          // INTERNAL. Use UserModel.rooms.destroyAll() instead.
          "prototype$__delete__rooms": {
            url: urlBase + "/Users/:id/rooms",
            method: "DELETE"
          },

          // INTERNAL. Use UserModel.rooms.count() instead.
          "prototype$__count__rooms": {
            url: urlBase + "/Users/:id/rooms/count",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.UserModel#prototype$__get__messages
           * @methodOf lbServices.UserModel
           *
           * @description
           *
           * Queries messages of UserModel.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - User id
           *
           *  - `filter` – `{object=}` -
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `UserModel` object.)
           * </em>
           */
          "prototype$__get__messages": {
            isArray: true,
            url: urlBase + "/Users/:id/messages",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.UserModel#prototype$__create__messages
           * @methodOf lbServices.UserModel
           *
           * @description
           *
           * Creates a new instance in messages of this model.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - User id
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `UserModel` object.)
           * </em>
           */
          "prototype$__create__messages": {
            url: urlBase + "/Users/:id/messages",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.UserModel#prototype$__delete__messages
           * @methodOf lbServices.UserModel
           *
           * @description
           *
           * Deletes all messages of this model.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - User id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "prototype$__delete__messages": {
            url: urlBase + "/Users/:id/messages",
            method: "DELETE"
          },

          /**
           * @ngdoc method
           * @name lbServices.UserModel#prototype$__count__messages
           * @methodOf lbServices.UserModel
           *
           * @description
           *
           * Counts messages of UserModel.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - User id
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` -
           */
          "prototype$__count__messages": {
            url: urlBase + "/Users/:id/messages/count",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.UserModel#create
           * @methodOf lbServices.UserModel
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `UserModel` object.)
           * </em>
           */
          "create": {
            url: urlBase + "/Users",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.UserModel#createMany
           * @methodOf lbServices.UserModel
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `UserModel` object.)
           * </em>
           */
          "createMany": {
            isArray: true,
            url: urlBase + "/Users",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.UserModel#upsert
           * @methodOf lbServices.UserModel
           *
           * @description
           *
           * Update an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `UserModel` object.)
           * </em>
           */
          "upsert": {
            url: urlBase + "/Users",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name lbServices.UserModel#exists
           * @methodOf lbServices.UserModel
           *
           * @description
           *
           * Check whether a model instance exists in the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `exists` – `{boolean=}` -
           */
          "exists": {
            url: urlBase + "/Users/:id/exists",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.UserModel#findById
           * @methodOf lbServices.UserModel
           *
           * @description
           *
           * Find a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `filter` – `{object=}` - Filter defining fields and include
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `UserModel` object.)
           * </em>
           */
          "findById": {
            url: urlBase + "/Users/:id",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.UserModel#find
           * @methodOf lbServices.UserModel
           *
           * @description
           *
           * Find all instances of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `UserModel` object.)
           * </em>
           */
          "find": {
            isArray: true,
            url: urlBase + "/Users",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.UserModel#findOne
           * @methodOf lbServices.UserModel
           *
           * @description
           *
           * Find first instance of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `UserModel` object.)
           * </em>
           */
          "findOne": {
            url: urlBase + "/Users/findOne",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.UserModel#updateAll
           * @methodOf lbServices.UserModel
           *
           * @description
           *
           * Update instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "updateAll": {
            url: urlBase + "/Users/update",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.UserModel#deleteById
           * @methodOf lbServices.UserModel
           *
           * @description
           *
           * Delete a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "deleteById": {
            url: urlBase + "/Users/:id",
            method: "DELETE"
          },

          /**
           * @ngdoc method
           * @name lbServices.UserModel#count
           * @methodOf lbServices.UserModel
           *
           * @description
           *
           * Count instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` -
           */
          "count": {
            url: urlBase + "/Users/count",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.UserModel#prototype$updateAttributes
           * @methodOf lbServices.UserModel
           *
           * @description
           *
           * Update attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - User id
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `UserModel` object.)
           * </em>
           */
          "prototype$updateAttributes": {
            url: urlBase + "/Users/:id",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name lbServices.UserModel#createChangeStream
           * @methodOf lbServices.UserModel
           *
           * @description
           *
           * Create a change stream.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `changes` – `{ReadableStream=}` -
           */
          "createChangeStream": {
            url: urlBase + "/Users/change-stream",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.UserModel#login
           * @methodOf lbServices.UserModel
           *
           * @description
           *
           * Login a user with username/email and password.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
           *   Default value: `user`.
           *
           *  - `rememberMe` - `boolean` - Whether the authentication credentials
           *     should be remembered in localStorage across app/browser restarts.
           *     Default: `true`.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * The response body contains properties of the AccessToken created on login.
           * Depending on the value of `include` parameter, the body may contain additional properties:
           *
           *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
           *
           *
           */
          "login": {
            params: {
              include: "user"
            },
            interceptor: {
              response: function(response) {
                var accessToken = response.data;
                LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
                LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
                LoopBackAuth.save();
                return response.resource;
              }
            },
            url: urlBase + "/Users/login",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.UserModel#logout
           * @methodOf lbServices.UserModel
           *
           * @description
           *
           * Logout a user with access token.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "logout": {
            interceptor: {
              response: function(response) {
                LoopBackAuth.clearUser();
                LoopBackAuth.clearStorage();
                return response.resource;
              }
            },
            url: urlBase + "/Users/logout",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.UserModel#confirm
           * @methodOf lbServices.UserModel
           *
           * @description
           *
           * Confirm a user registration with email verification token.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `uid` – `{string}` -
           *
           *  - `token` – `{string}` -
           *
           *  - `redirect` – `{string=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "confirm": {
            url: urlBase + "/Users/confirm",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.UserModel#resetPassword
           * @methodOf lbServices.UserModel
           *
           * @description
           *
           * Reset password for a user with email.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "resetPassword": {
            url: urlBase + "/Users/reset",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.UserModel#whoAmI
           * @methodOf lbServices.UserModel
           *
           * @description
           *
           * <em>
           * (The remote method definition does not provide any description.)
           * </em>
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `req` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `UserModel` object.)
           * </em>
           */
          "whoAmI": {
            url: urlBase + "/Users/whoAmI",
            method: "GET"
          },

          // INTERNAL. Use Room.owner() instead.
          "::get::Room::owner": {
            url: urlBase + "/Rooms/:id/owner",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.UserModel#getCurrent
           * @methodOf lbServices.UserModel
           *
           * @description
           *
           * Get data of the currently logged user. Fail with HTTP result 401
           * when there is no user logged in.
           *
           * @param {function(Object,Object)=} successCb
           *    Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *    `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           */
          "getCurrent": {
            url: urlBase + "/Users" + "/:id",
            method: "GET",
            params: {
              id: function() {
                var id = LoopBackAuth.currentUserId;
                if (id == null) id = '__anonymous__';
                return id;
              },
            },
            interceptor: {
              response: function(response) {
                LoopBackAuth.currentUserData = response.data;
                return response.resource;
              }
            },
            __isGetCurrentUser__ : true
          }
        }
      );



      /**
       * @ngdoc method
       * @name lbServices.UserModel#updateOrCreate
       * @methodOf lbServices.UserModel
       *
       * @description
       *
       * Update an existing model instance or insert a new one into the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *   This method does not accept any parameters.
       *   Supply an empty object or omit this argument altogether.
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `UserModel` object.)
       * </em>
       */
      R["updateOrCreate"] = R["upsert"];

      /**
       * @ngdoc method
       * @name lbServices.UserModel#update
       * @methodOf lbServices.UserModel
       *
       * @description
       *
       * Update instances of the model matched by where from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R["update"] = R["updateAll"];

      /**
       * @ngdoc method
       * @name lbServices.UserModel#destroyById
       * @methodOf lbServices.UserModel
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R["destroyById"] = R["deleteById"];

      /**
       * @ngdoc method
       * @name lbServices.UserModel#removeById
       * @methodOf lbServices.UserModel
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R["removeById"] = R["deleteById"];

      /**
       * @ngdoc method
       * @name lbServices.UserModel#getCachedCurrent
       * @methodOf lbServices.UserModel
       *
       * @description
       *
       * Get data of the currently logged user that was returned by the last
       * call to {@link lbServices.UserModel#login} or
       * {@link lbServices.UserModel#getCurrent}. Return null when there
       * is no user logged in or the data of the current user were not fetched
       * yet.
       *
       * @returns {Object} A UserModel instance.
       */
      R.getCachedCurrent = function() {
        var data = LoopBackAuth.currentUserData;
        return data ? new R(data) : null;
      };

      /**
       * @ngdoc method
       * @name lbServices.UserModel#isAuthenticated
       * @methodOf lbServices.UserModel
       *
       * @returns {boolean} True if the current user is authenticated (logged in).
       */
      R.isAuthenticated = function() {
        return this.getCurrentId() != null;
      };

      /**
       * @ngdoc method
       * @name lbServices.UserModel#getCurrentId
       * @methodOf lbServices.UserModel
       *
       * @returns {Object} Id of the currently logged-in user or null.
       */
      R.getCurrentId = function() {
        return LoopBackAuth.currentUserId;
      };

      /**
       * @ngdoc property
       * @name lbServices.UserModel#modelName
       * @propertyOf lbServices.UserModel
       * @description
       * The name of the model represented by this $resource,
       * i.e. `UserModel`.
       */
      R.modelName = "UserModel";

      /**
       * @ngdoc object
       * @name lbServices.UserModel.accessTokens
       * @header lbServices.UserModel.accessTokens
       * @object
       * @description
       *
       * The object `UserModel.accessTokens` groups methods
       * manipulating `AccessToken` instances related to `UserModel`.
       *
       * Call {@link lbServices.UserModel#accessTokens UserModel.accessTokens()}
       * to query all related instances.
       */


      /**
       * @ngdoc method
       * @name lbServices.UserModel#accessTokens
       * @methodOf lbServices.UserModel
       *
       * @description
       *
       * Queries accessTokens of UserModel.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `filter` – `{object=}` -
       *
       * @param {function(Array.<Object>,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Array.<Object>} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `AccessToken` object.)
       * </em>
       */
      R.accessTokens = function() {
        var TargetResource = $injector.get("AccessToken");
        var action = TargetResource["::get::UserModel::accessTokens"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.UserModel.accessTokens#count
       * @methodOf lbServices.UserModel.accessTokens
       *
       * @description
       *
       * Counts accessTokens of UserModel.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * Data properties:
       *
       *  - `count` – `{number=}` -
       */
      R.accessTokens.count = function() {
        var TargetResource = $injector.get("AccessToken");
        var action = TargetResource["::count::UserModel::accessTokens"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.UserModel.accessTokens#create
       * @methodOf lbServices.UserModel.accessTokens
       *
       * @description
       *
       * Creates a new instance in accessTokens of this model.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `AccessToken` object.)
       * </em>
       */
      R.accessTokens.create = function() {
        var TargetResource = $injector.get("AccessToken");
        var action = TargetResource["::create::UserModel::accessTokens"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.UserModel.accessTokens#createMany
       * @methodOf lbServices.UserModel.accessTokens
       *
       * @description
       *
       * Creates a new instance in accessTokens of this model.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Array.<Object>,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Array.<Object>} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `AccessToken` object.)
       * </em>
       */
      R.accessTokens.createMany = function() {
        var TargetResource = $injector.get("AccessToken");
        var action = TargetResource["::createMany::UserModel::accessTokens"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.UserModel.accessTokens#destroyAll
       * @methodOf lbServices.UserModel.accessTokens
       *
       * @description
       *
       * Deletes all accessTokens of this model.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R.accessTokens.destroyAll = function() {
        var TargetResource = $injector.get("AccessToken");
        var action = TargetResource["::delete::UserModel::accessTokens"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.UserModel.accessTokens#destroyById
       * @methodOf lbServices.UserModel.accessTokens
       *
       * @description
       *
       * Delete a related item by id for accessTokens.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `fk` – `{*}` - Foreign key for accessTokens
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R.accessTokens.destroyById = function() {
        var TargetResource = $injector.get("AccessToken");
        var action = TargetResource["::destroyById::UserModel::accessTokens"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.UserModel.accessTokens#findById
       * @methodOf lbServices.UserModel.accessTokens
       *
       * @description
       *
       * Find a related item by id for accessTokens.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `fk` – `{*}` - Foreign key for accessTokens
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `AccessToken` object.)
       * </em>
       */
      R.accessTokens.findById = function() {
        var TargetResource = $injector.get("AccessToken");
        var action = TargetResource["::findById::UserModel::accessTokens"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.UserModel.accessTokens#updateById
       * @methodOf lbServices.UserModel.accessTokens
       *
       * @description
       *
       * Update a related item by id for accessTokens.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `fk` – `{*}` - Foreign key for accessTokens
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `AccessToken` object.)
       * </em>
       */
      R.accessTokens.updateById = function() {
        var TargetResource = $injector.get("AccessToken");
        var action = TargetResource["::updateById::UserModel::accessTokens"];
        return action.apply(R, arguments);
      };
      /**
       * @ngdoc object
       * @name lbServices.UserModel.rooms
       * @header lbServices.UserModel.rooms
       * @object
       * @description
       *
       * The object `UserModel.rooms` groups methods
       * manipulating `Room` instances related to `UserModel`.
       *
       * Call {@link lbServices.UserModel#rooms UserModel.rooms()}
       * to query all related instances.
       */


      /**
       * @ngdoc method
       * @name lbServices.UserModel#rooms
       * @methodOf lbServices.UserModel
       *
       * @description
       *
       * Queries rooms of UserModel.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `filter` – `{object=}` -
       *
       * @param {function(Array.<Object>,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Array.<Object>} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Room` object.)
       * </em>
       */
      R.rooms = function() {
        var TargetResource = $injector.get("Room");
        var action = TargetResource["::get::UserModel::rooms"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.UserModel.rooms#count
       * @methodOf lbServices.UserModel.rooms
       *
       * @description
       *
       * Counts rooms of UserModel.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * Data properties:
       *
       *  - `count` – `{number=}` -
       */
      R.rooms.count = function() {
        var TargetResource = $injector.get("Room");
        var action = TargetResource["::count::UserModel::rooms"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.UserModel.rooms#create
       * @methodOf lbServices.UserModel.rooms
       *
       * @description
       *
       * Creates a new instance in rooms of this model.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Room` object.)
       * </em>
       */
      R.rooms.create = function() {
        var TargetResource = $injector.get("Room");
        var action = TargetResource["::create::UserModel::rooms"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.UserModel.rooms#createMany
       * @methodOf lbServices.UserModel.rooms
       *
       * @description
       *
       * Creates a new instance in rooms of this model.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Array.<Object>,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Array.<Object>} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Room` object.)
       * </em>
       */
      R.rooms.createMany = function() {
        var TargetResource = $injector.get("Room");
        var action = TargetResource["::createMany::UserModel::rooms"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.UserModel.rooms#destroyAll
       * @methodOf lbServices.UserModel.rooms
       *
       * @description
       *
       * Deletes all rooms of this model.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R.rooms.destroyAll = function() {
        var TargetResource = $injector.get("Room");
        var action = TargetResource["::delete::UserModel::rooms"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.UserModel.rooms#destroyById
       * @methodOf lbServices.UserModel.rooms
       *
       * @description
       *
       * Delete a related item by id for rooms.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `fk` – `{*}` - Foreign key for rooms
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R.rooms.destroyById = function() {
        var TargetResource = $injector.get("Room");
        var action = TargetResource["::destroyById::UserModel::rooms"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.UserModel.rooms#findById
       * @methodOf lbServices.UserModel.rooms
       *
       * @description
       *
       * Find a related item by id for rooms.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `fk` – `{*}` - Foreign key for rooms
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Room` object.)
       * </em>
       */
      R.rooms.findById = function() {
        var TargetResource = $injector.get("Room");
        var action = TargetResource["::findById::UserModel::rooms"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.UserModel.rooms#updateById
       * @methodOf lbServices.UserModel.rooms
       *
       * @description
       *
       * Update a related item by id for rooms.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `fk` – `{*}` - Foreign key for rooms
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Room` object.)
       * </em>
       */
      R.rooms.updateById = function() {
        var TargetResource = $injector.get("Room");
        var action = TargetResource["::updateById::UserModel::rooms"];
        return action.apply(R, arguments);
      };

      return R;
    }]);

  /**
   * @ngdoc object
   * @name lbServices.Room
   * @header lbServices.Room
   * @object
   *
   * @description
   *
   * A $resource object for interacting with the `Room` model.
   *
   * ## Example
   *
   * See
   * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
   * for an example of using this object.
   *
   */
  app.factory(
    "Room",
    ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
      var R = Resource(
        urlBase + "/Rooms/:id",
        { 'id': '@id' },
        {

          // INTERNAL. Use Room.owner() instead.
          "prototype$__get__owner": {
            url: urlBase + "/Rooms/:id/owner",
            method: "GET"
          },

          // INTERNAL. Use Room.chats() instead.
          "prototype$__get__chats": {
            url: urlBase + "/Rooms/:id/chats",
            method: "GET"
          },

          // INTERNAL. Use Room.chats.create() instead.
          "prototype$__create__chats": {
            url: urlBase + "/Rooms/:id/chats",
            method: "POST"
          },

          // INTERNAL. Use Room.chats.update() instead.
          "prototype$__update__chats": {
            url: urlBase + "/Rooms/:id/chats",
            method: "PUT"
          },

          // INTERNAL. Use Room.chats.destroy() instead.
          "prototype$__destroy__chats": {
            url: urlBase + "/Rooms/:id/chats",
            method: "DELETE"
          },

          /**
           * @ngdoc method
           * @name lbServices.Room#create
           * @methodOf lbServices.Room
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Room` object.)
           * </em>
           */
          "create": {
            url: urlBase + "/Rooms",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.Room#createMany
           * @methodOf lbServices.Room
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Room` object.)
           * </em>
           */
          "createMany": {
            isArray: true,
            url: urlBase + "/Rooms",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.Room#upsert
           * @methodOf lbServices.Room
           *
           * @description
           *
           * Update an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Room` object.)
           * </em>
           */
          "upsert": {
            url: urlBase + "/Rooms",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name lbServices.Room#exists
           * @methodOf lbServices.Room
           *
           * @description
           *
           * Check whether a model instance exists in the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `exists` – `{boolean=}` -
           */
          "exists": {
            url: urlBase + "/Rooms/:id/exists",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Room#findById
           * @methodOf lbServices.Room
           *
           * @description
           *
           * Find a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `filter` – `{object=}` - Filter defining fields and include
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Room` object.)
           * </em>
           */
          "findById": {
            url: urlBase + "/Rooms/:id",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Room#find
           * @methodOf lbServices.Room
           *
           * @description
           *
           * Find all instances of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Room` object.)
           * </em>
           */
          "find": {
            isArray: true,
            url: urlBase + "/Rooms",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Room#findOne
           * @methodOf lbServices.Room
           *
           * @description
           *
           * Find first instance of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Room` object.)
           * </em>
           */
          "findOne": {
            url: urlBase + "/Rooms/findOne",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Room#updateAll
           * @methodOf lbServices.Room
           *
           * @description
           *
           * Update instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "updateAll": {
            url: urlBase + "/Rooms/update",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.Room#deleteById
           * @methodOf lbServices.Room
           *
           * @description
           *
           * Delete a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "deleteById": {
            url: urlBase + "/Rooms/:id",
            method: "DELETE"
          },

          /**
           * @ngdoc method
           * @name lbServices.Room#count
           * @methodOf lbServices.Room
           *
           * @description
           *
           * Count instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` -
           */
          "count": {
            url: urlBase + "/Rooms/count",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Room#prototype$updateAttributes
           * @methodOf lbServices.Room
           *
           * @description
           *
           * Update attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - PersistedModel id
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Room` object.)
           * </em>
           */
          "prototype$updateAttributes": {
            url: urlBase + "/Rooms/:id",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name lbServices.Room#createChangeStream
           * @methodOf lbServices.Room
           *
           * @description
           *
           * Create a change stream.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `changes` – `{ReadableStream=}` -
           */
          "createChangeStream": {
            url: urlBase + "/Rooms/change-stream",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.Room#join
           * @methodOf lbServices.Room
           *
           * @description
           *
           * Join chat room (subscribe to updates and allow to post)
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{string=}` -
           *
           * @param {Object} postData Request data.
           *
           *  - `req` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Room` object.)
           * </em>
           */
          "join": {
            url: urlBase + "/Rooms/:id/join",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name lbServices.Room#leave
           * @methodOf lbServices.Room
           *
           * @description
           *
           * Leave chat room
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{string=}` -
           *
           * @param {Object} postData Request data.
           *
           *  - `req` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `leaved` – `{boolean=}` -
           */
          "leave": {
            url: urlBase + "/Rooms/:id/leave",
            method: "PUT"
          },

          // INTERNAL. Use UserModel.rooms.findById() instead.
          "::findById::UserModel::rooms": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/Users/:id/rooms/:fk",
            method: "GET"
          },

          // INTERNAL. Use UserModel.rooms.destroyById() instead.
          "::destroyById::UserModel::rooms": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/Users/:id/rooms/:fk",
            method: "DELETE"
          },

          // INTERNAL. Use UserModel.rooms.updateById() instead.
          "::updateById::UserModel::rooms": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/Users/:id/rooms/:fk",
            method: "PUT"
          },

          // INTERNAL. Use UserModel.rooms() instead.
          "::get::UserModel::rooms": {
            isArray: true,
            url: urlBase + "/Users/:id/rooms",
            method: "GET"
          },

          // INTERNAL. Use UserModel.rooms.create() instead.
          "::create::UserModel::rooms": {
            url: urlBase + "/Users/:id/rooms",
            method: "POST"
          },

          // INTERNAL. Use UserModel.rooms.createMany() instead.
          "::createMany::UserModel::rooms": {
            isArray: true,
            url: urlBase + "/Users/:id/rooms",
            method: "POST"
          },

          // INTERNAL. Use UserModel.rooms.destroyAll() instead.
          "::delete::UserModel::rooms": {
            url: urlBase + "/Users/:id/rooms",
            method: "DELETE"
          },

          // INTERNAL. Use UserModel.rooms.count() instead.
          "::count::UserModel::rooms": {
            url: urlBase + "/Users/:id/rooms/count",
            method: "GET"
          },

          // INTERNAL. Use Chat.room() instead.
          "::get::Chat::room": {
            url: urlBase + "/Chats/:id/room",
            method: "GET"
          },
        }
      );



      /**
       * @ngdoc method
       * @name lbServices.Room#updateOrCreate
       * @methodOf lbServices.Room
       *
       * @description
       *
       * Update an existing model instance or insert a new one into the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *   This method does not accept any parameters.
       *   Supply an empty object or omit this argument altogether.
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Room` object.)
       * </em>
       */
      R["updateOrCreate"] = R["upsert"];

      /**
       * @ngdoc method
       * @name lbServices.Room#update
       * @methodOf lbServices.Room
       *
       * @description
       *
       * Update instances of the model matched by where from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R["update"] = R["updateAll"];

      /**
       * @ngdoc method
       * @name lbServices.Room#destroyById
       * @methodOf lbServices.Room
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R["destroyById"] = R["deleteById"];

      /**
       * @ngdoc method
       * @name lbServices.Room#removeById
       * @methodOf lbServices.Room
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R["removeById"] = R["deleteById"];


      /**
       * @ngdoc property
       * @name lbServices.Room#modelName
       * @propertyOf lbServices.Room
       * @description
       * The name of the model represented by this $resource,
       * i.e. `Room`.
       */
      R.modelName = "Room";


      /**
       * @ngdoc method
       * @name lbServices.Room#owner
       * @methodOf lbServices.Room
       *
       * @description
       *
       * Fetches belongsTo relation owner.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       *  - `refresh` – `{boolean=}` -
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `UserModel` object.)
       * </em>
       */
      R.owner = function() {
        var TargetResource = $injector.get("UserModel");
        var action = TargetResource["::get::Room::owner"];
        return action.apply(R, arguments);
      };
      /**
       * @ngdoc object
       * @name lbServices.Room.chats
       * @header lbServices.Room.chats
       * @object
       * @description
       *
       * The object `Room.chats` groups methods
       * manipulating `Chat` instances related to `Room`.
       *
       * Call {@link lbServices.Room#chats Room.chats()}
       * to query all related instances.
       */


      /**
       * @ngdoc method
       * @name lbServices.Room#chats
       * @methodOf lbServices.Room
       *
       * @description
       *
       * Fetches hasOne relation chats.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       *  - `refresh` – `{boolean=}` -
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Chat` object.)
       * </em>
       */
      R.chats = function() {
        var TargetResource = $injector.get("Chat");
        var action = TargetResource["::get::Room::chats"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.Room.chats#create
       * @methodOf lbServices.Room.chats
       *
       * @description
       *
       * Creates a new instance in chats of this model.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Chat` object.)
       * </em>
       */
      R.chats.create = function() {
        var TargetResource = $injector.get("Chat");
        var action = TargetResource["::create::Room::chats"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.Room.chats#createMany
       * @methodOf lbServices.Room.chats
       *
       * @description
       *
       * Creates a new instance in chats of this model.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Array.<Object>,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Array.<Object>} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Chat` object.)
       * </em>
       */
      R.chats.createMany = function() {
        var TargetResource = $injector.get("Chat");
        var action = TargetResource["::createMany::Room::chats"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.Room.chats#destroy
       * @methodOf lbServices.Room.chats
       *
       * @description
       *
       * Deletes chats of this model.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R.chats.destroy = function() {
        var TargetResource = $injector.get("Chat");
        var action = TargetResource["::destroy::Room::chats"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.Room.chats#update
       * @methodOf lbServices.Room.chats
       *
       * @description
       *
       * Update chats of this model.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Chat` object.)
       * </em>
       */
      R.chats.update = function() {
        var TargetResource = $injector.get("Chat");
        var action = TargetResource["::update::Room::chats"];
        return action.apply(R, arguments);
      };

      return R;
    }]);

  /**
   * @ngdoc object
   * @name lbServices.Chat
   * @header lbServices.Chat
   * @object
   *
   * @description
   *
   * A $resource object for interacting with the `Chat` model.
   *
   * ## Example
   *
   * See
   * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
   * for an example of using this object.
   *
   */
  app.factory(
    "Chat",
    ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
      var R = Resource(
        urlBase + "/Chats/:id",
        { 'id': '@id' },
        {

          // INTERNAL. Use Chat.room() instead.
          "prototype$__get__room": {
            url: urlBase + "/Chats/:id/room",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Chat#prototype$__findById__messages
           * @methodOf lbServices.Chat
           *
           * @description
           *
           * Find a related item by id for messages.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - PersistedModel id
           *
           *  - `fk` – `{*}` - Foreign key for messages
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Chat` object.)
           * </em>
           */
          "prototype$__findById__messages": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/Chats/:id/messages/:fk",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Chat#prototype$__destroyById__messages
           * @methodOf lbServices.Chat
           *
           * @description
           *
           * Delete a related item by id for messages.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - PersistedModel id
           *
           *  - `fk` – `{*}` - Foreign key for messages
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "prototype$__destroyById__messages": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/Chats/:id/messages/:fk",
            method: "DELETE"
          },

          /**
           * @ngdoc method
           * @name lbServices.Chat#prototype$__updateById__messages
           * @methodOf lbServices.Chat
           *
           * @description
           *
           * Update a related item by id for messages.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - PersistedModel id
           *
           *  - `fk` – `{*}` - Foreign key for messages
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Chat` object.)
           * </em>
           */
          "prototype$__updateById__messages": {
            params: {
              'fk': '@fk'
            },
            url: urlBase + "/Chats/:id/messages/:fk",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name lbServices.Chat#prototype$__get__messages
           * @methodOf lbServices.Chat
           *
           * @description
           *
           * Queries messages of Chat.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - PersistedModel id
           *
           *  - `filter` – `{object=}` -
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Chat` object.)
           * </em>
           */
          "prototype$__get__messages": {
            isArray: true,
            url: urlBase + "/Chats/:id/messages",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Chat#prototype$__create__messages
           * @methodOf lbServices.Chat
           *
           * @description
           *
           * Creates a new instance in messages of this model.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - PersistedModel id
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Chat` object.)
           * </em>
           */
          "prototype$__create__messages": {
            url: urlBase + "/Chats/:id/messages",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.Chat#prototype$__delete__messages
           * @methodOf lbServices.Chat
           *
           * @description
           *
           * Deletes all messages of this model.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - PersistedModel id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "prototype$__delete__messages": {
            url: urlBase + "/Chats/:id/messages",
            method: "DELETE"
          },

          /**
           * @ngdoc method
           * @name lbServices.Chat#prototype$__count__messages
           * @methodOf lbServices.Chat
           *
           * @description
           *
           * Counts messages of Chat.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - PersistedModel id
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` -
           */
          "prototype$__count__messages": {
            url: urlBase + "/Chats/:id/messages/count",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Chat#create
           * @methodOf lbServices.Chat
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Chat` object.)
           * </em>
           */
          "create": {
            url: urlBase + "/Chats",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.Chat#createMany
           * @methodOf lbServices.Chat
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Chat` object.)
           * </em>
           */
          "createMany": {
            isArray: true,
            url: urlBase + "/Chats",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.Chat#upsert
           * @methodOf lbServices.Chat
           *
           * @description
           *
           * Update an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Chat` object.)
           * </em>
           */
          "upsert": {
            url: urlBase + "/Chats",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name lbServices.Chat#exists
           * @methodOf lbServices.Chat
           *
           * @description
           *
           * Check whether a model instance exists in the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `exists` – `{boolean=}` -
           */
          "exists": {
            url: urlBase + "/Chats/:id/exists",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Chat#findById
           * @methodOf lbServices.Chat
           *
           * @description
           *
           * Find a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `filter` – `{object=}` - Filter defining fields and include
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Chat` object.)
           * </em>
           */
          "findById": {
            url: urlBase + "/Chats/:id",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Chat#find
           * @methodOf lbServices.Chat
           *
           * @description
           *
           * Find all instances of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Chat` object.)
           * </em>
           */
          "find": {
            isArray: true,
            url: urlBase + "/Chats",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Chat#findOne
           * @methodOf lbServices.Chat
           *
           * @description
           *
           * Find first instance of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Chat` object.)
           * </em>
           */
          "findOne": {
            url: urlBase + "/Chats/findOne",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Chat#updateAll
           * @methodOf lbServices.Chat
           *
           * @description
           *
           * Update instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "updateAll": {
            url: urlBase + "/Chats/update",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.Chat#deleteById
           * @methodOf lbServices.Chat
           *
           * @description
           *
           * Delete a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "deleteById": {
            url: urlBase + "/Chats/:id",
            method: "DELETE"
          },

          /**
           * @ngdoc method
           * @name lbServices.Chat#count
           * @methodOf lbServices.Chat
           *
           * @description
           *
           * Count instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` -
           */
          "count": {
            url: urlBase + "/Chats/count",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Chat#prototype$updateAttributes
           * @methodOf lbServices.Chat
           *
           * @description
           *
           * Update attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - PersistedModel id
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Chat` object.)
           * </em>
           */
          "prototype$updateAttributes": {
            url: urlBase + "/Chats/:id",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name lbServices.Chat#createChangeStream
           * @methodOf lbServices.Chat
           *
           * @description
           *
           * Create a change stream.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `changes` – `{ReadableStream=}` -
           */
          "createChangeStream": {
            url: urlBase + "/Chats/change-stream",
            method: "POST"
          },

          // INTERNAL. Use Room.chats() instead.
          "::get::Room::chats": {
            url: urlBase + "/Rooms/:id/chats",
            method: "GET"
          },

          // INTERNAL. Use Room.chats.create() instead.
          "::create::Room::chats": {
            url: urlBase + "/Rooms/:id/chats",
            method: "POST"
          },

          // INTERNAL. Use Room.chats.createMany() instead.
          "::createMany::Room::chats": {
            isArray: true,
            url: urlBase + "/Rooms/:id/chats",
            method: "POST"
          },

          // INTERNAL. Use Room.chats.update() instead.
          "::update::Room::chats": {
            url: urlBase + "/Rooms/:id/chats",
            method: "PUT"
          },

          // INTERNAL. Use Room.chats.destroy() instead.
          "::destroy::Room::chats": {
            url: urlBase + "/Rooms/:id/chats",
            method: "DELETE"
          },
        }
      );



      /**
       * @ngdoc method
       * @name lbServices.Chat#updateOrCreate
       * @methodOf lbServices.Chat
       *
       * @description
       *
       * Update an existing model instance or insert a new one into the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *   This method does not accept any parameters.
       *   Supply an empty object or omit this argument altogether.
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Chat` object.)
       * </em>
       */
      R["updateOrCreate"] = R["upsert"];

      /**
       * @ngdoc method
       * @name lbServices.Chat#update
       * @methodOf lbServices.Chat
       *
       * @description
       *
       * Update instances of the model matched by where from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R["update"] = R["updateAll"];

      /**
       * @ngdoc method
       * @name lbServices.Chat#destroyById
       * @methodOf lbServices.Chat
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R["destroyById"] = R["deleteById"];

      /**
       * @ngdoc method
       * @name lbServices.Chat#removeById
       * @methodOf lbServices.Chat
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R["removeById"] = R["deleteById"];


      /**
       * @ngdoc property
       * @name lbServices.Chat#modelName
       * @propertyOf lbServices.Chat
       * @description
       * The name of the model represented by this $resource,
       * i.e. `Chat`.
       */
      R.modelName = "Chat";


      /**
       * @ngdoc method
       * @name lbServices.Chat#room
       * @methodOf lbServices.Chat
       *
       * @description
       *
       * Fetches belongsTo relation room.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       *  - `refresh` – `{boolean=}` -
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Room` object.)
       * </em>
       */
      R.room = function() {
        var TargetResource = $injector.get("Room");
        var action = TargetResource["::get::Chat::room"];
        return action.apply(R, arguments);
      };

      return R;
    }]);


  app
    .factory('LoopBackAuth', function() {
      var props = ['accessTokenId', 'currentUserId'];
      var propsPrefix = '$LoopBack$';

      function LoopBackAuth() {
        var self = this;
        props.forEach(function(name) {
          self[name] = load(name);
        });
        this.rememberMe = undefined;
        this.currentUserData = null;
      }

      LoopBackAuth.prototype.save = function() {
        var self = this;
        var storage = this.rememberMe ? localStorage : sessionStorage;
        props.forEach(function(name) {
          save(storage, name, self[name]);
        });
      };

      LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
        this.accessTokenId = accessTokenId;
        this.currentUserId = userId;
        this.currentUserData = userData;
      }

      LoopBackAuth.prototype.clearUser = function() {
        this.accessTokenId = null;
        this.currentUserId = null;
        this.currentUserData = null;
      }

      LoopBackAuth.prototype.clearStorage = function() {
        props.forEach(function(name) {
          save(sessionStorage, name, null);
          save(localStorage, name, null);
        });
      };

      return new LoopBackAuth();

      // Note: LocalStorage converts the value to string
      // We are using empty string as a marker for null/undefined values.
      function save(storage, name, value) {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      }

      function load(name) {
        var key = propsPrefix + name;
        return localStorage[key] || sessionStorage[key] || null;
      }
    })
    .config(['$httpProvider', function($httpProvider) {
      $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
    }])
    .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
                                                 function($q, LoopBackAuth) {
                                                   return {
                                                     'request': function(config) {

                                                       // filter out non urlBase requests
                                                       if (config.url.substr(0, urlBase.length) !== urlBase) {
                                                         return config;
                                                       }

                                                       if (LoopBackAuth.accessTokenId) {
                                                         config.headers[authHeader] = LoopBackAuth.accessTokenId;
                                                       } else if (config.__isGetCurrentUser__) {
                                                         // Return a stub 401 error for User.getCurrent() when
                                                         // there is no user logged in
                                                         var res = {
                                                           body: { error: { status: 401 } },
                                                           status: 401,
                                                           config: config,
                                                           headers: function() { return undefined; }
                                                         };
                                                         return $q.reject(res);
                                                       }
                                                       return config || $q.when(config);
                                                     }
                                                   }
                                                 }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
    .provider('LoopBackResource', function LoopBackResourceProvider() {
      /**
       * @ngdoc method
       * @name lbServices.LoopBackResourceProvider#setAuthHeader
       * @methodOf lbServices.LoopBackResourceProvider
       * @param {string} header The header name to use, e.g. `X-Access-Token`
       * @description
       * Configure the REST transport to use a different header for sending
       * the authentication token. It is sent in the `Authorization` header
       * by default.
       */
      this.setAuthHeader = function(header) {
        authHeader = header;
      };

      /**
       * @ngdoc method
       * @name lbServices.LoopBackResourceProvider#setUrlBase
       * @methodOf lbServices.LoopBackResourceProvider
       * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
       * @description
       * Change the URL of the REST API server. By default, the URL provided
       * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
       */
      this.setUrlBase = function(url) {
        urlBase = url;
      };

      this.$get = ['$resource', function($resource) {
        return function(url, params, actions) {
          var resource = $resource(url, params, actions);

          // Angular always calls POST on $save()
          // This hack is based on
          // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
          resource.prototype.$save = function(success, error) {
            // Fortunately, LoopBack provides a convenient `upsert` method
            // that exactly fits our needs.
            var result = resource.upsert.call(this, {}, this, success, error);
            return result.$promise || result;
          };
          return resource;
        };
      }];
    });
};
