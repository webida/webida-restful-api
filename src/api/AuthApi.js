/**
 * Webida Restful API
 * Restful API for Webida clients to use server's data & features
 *
 * OpenAPI spec version: 0.7.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/User', 'model/RestError', 'model/Token', 'model/Credential'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/User'), require('../model/RestError'), require('../model/Token'), require('../model/Credential'));
  } else {
    // Browser globals (root is window)
    if (!root.WebidaRestfulApi) {
      root.WebidaRestfulApi = {};
    }
    root.WebidaRestfulApi.AuthApi = factory(root.WebidaRestfulApi.ApiClient, root.WebidaRestfulApi.User, root.WebidaRestfulApi.RestError, root.WebidaRestfulApi.Token, root.WebidaRestfulApi.Credential);
  }
}(this, function(ApiClient, User, RestError, Token, Credential) {
  'use strict';

  /**
   * Auth service.
   * @module api/AuthApi
   * @version 0.7.0
   */

  /**
   * Constructs a new AuthApi. 
   * @alias module:api/AuthApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getInfo operation.
     * @callback module:api/AuthApi~getInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets user information of that can be identified with current access token. Implementations should provide a more restful api based on domain data model, not extending this operation. (e.g. GET,PUT and DELETE on /Users/{userId} to read, update and delete user) 
     * @param {module:api/AuthApi~getInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/User}
     */
    this.getInfo = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['webida-simple-auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/octet-stream'];
      var returnType = User;

      return this.apiClient.callApi(
        '/auth/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the issueToken operation.
     * @callback module:api/AuthApi~issueTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Token} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates new token from current access token, inheriting workspace id &amp; session id. The duration of generated token is (and should not be) parameterizable. Server should set proper duration, respecting \&quot;reconnect\&quot; period of socket.io clients. Remember that most of socket.io client implementations (including official js client) do not provide any ways to change connection parameters (header or query) while reconnecting to server.  Like login API, this endpoint does not provide any encryption. Server should not set any data to harm security in the token &amp; should provide some signinig/encryption mechanism to protect token. Simple JSON Web Token with HMAC-SHA will do. 
     * @param {module:model/String} type 
     * @param {Object} opts Optional parameters
     * @param {String} opts.workspaceId Clients to save some remote access info should issue a MASTER type token restricted to specific workspace id.
     * @param {module:api/AuthApi~issueTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Token}
     */
    this.issueToken = function(type, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'type' is set
      if (type == undefined || type == null) {
        throw "Missing the required parameter 'type' when calling issueToken";
      }


      var pathParams = {
      };
      var queryParams = {
        'type': type,
        'workspaceId': opts['workspaceId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['webida-simple-auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/octet-stream'];
      var returnType = Token;

      return this.apiClient.callApi(
        '/auth/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the login operation.
     * @callback module:api/AuthApi~loginCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Token} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * A \&quot;VERY\&quot; basic authentication, required to use webida-simple-auth security scheme.  Service / Product implementations who need better security, should override this operation or add their own login api or some other specs like OAuth2. Simple auth is not suitable for large-sacle, multi-tennant service, for the scheme assumes a single, trusted user only.  Logging-in with master token, the generated access token inherits all restriction from it. On the other hand, normal log-in with login id &amp; password creates an unrestricted access token, with reasonably short expiration time.  Every client should spawn another access token with issueToken API before current access token expires, inheriting session id from current token. To save remote access info, client should create a (restricted but long-ttl) master token to start IDE from remote. The remote client should not use the unrestricted acccess token from login to use any other perpose than finding available workspaces, and should not refresh the token. (Let user log-in again)  Login API does not force any encryption. Server should provide secure transport channel, usually https, to provide remote access, always. 
     * @param {module:model/Credential} body 
     * @param {module:api/AuthApi~loginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Token}
     */
    this.login = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling login";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/octet-stream'];
      var returnType = Token;

      return this.apiClient.callApi(
        '/auth/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
