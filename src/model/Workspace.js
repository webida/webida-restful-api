/**
 * Webida Restful API
 * Restful API for Webida clients to use server's data & features
 *
 * OpenAPI spec version: 0.7.1
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WebidaRestfulApi) {
      root.WebidaRestfulApi = {};
    }
    root.WebidaRestfulApi.Workspace = factory(root.WebidaRestfulApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Workspace model module.
   * @module model/Workspace
   * @version 0.7.1
   */

  /**
   * Constructs a new <code>Workspace</code>.
   * A workspace in server
   * @alias module:model/Workspace
   * @class
   * @param id {String} the id of a workspace. usually same to file system id
   * @param name {String} display text of this workspace for UI
   * @param description {String} human readable description on this workspace
   * @param createdAt {Date} the time when this workspace is created (registered from local file system)
   * @param workspacePath {String} absolute path of this workspace in server. Server may not expose this property to some untrusted clients.
   * @param excludedPaths {Array.<String>} Ignore patterns to exclude from watch service and search-and-replace operations.  Pattern follows '.gitignore' syntax, 1 item per line. It should work as a .gitignore file in the workspace directory. Server should remove all comment items (any item that begins with '#') and blank items. Escaping with '\\' char for the beginning '!' and ending white-spaces shoule be supported, too.  To exclude a directory, client may have to put '/' at the end of the item to exclude everything underneath it. When a dir path is excluded with 'ending /', watch service  may not deliver unlinkDir/addDir events for the path and client should manually check the existence or stats. 
   * @param offlineCachePaths {Array.<String>} Any paths (including excluded paths) to be cached in remote clients.  Browser client should respect offline cache paths always. Desktop-app client may not use off-line cache for local (embedded) server but shall use cache for any remote servers, even for same host. All caches should be partitioned with workspace id, globally unique value through time and space.  Client should pre-fetch the contents of offline cache paths when it start IDE sessions on a workspace to use for off-line state. When client goes to off-line, after losing connection to server, it can use cached data as reply of some WFS operations and can write some data to cache to save workspace data & metadata. The changes should be persistent on client side safely. C  When a client recovers connectivity to server, it should check the stats of files and  dirs to upload if it has got some changes in offline state. If server has more recents contents, client should drop chagnes and refill the cache with fresher data. Client may have some 'time-tolerance' to accept server's data is fresher than client's, smaller than serveral seconds. If server has more recent contents, client should drop the changes and refill the cache with fresher data. If not, client should replay the changes 1 by 1.  Same protocol should be applied when client application starts with some 'unuploaded change' evertime. That means, client should save 'change history' with 'changed data' too, to process it later, when starting app again in normal condition.  All Clients should not replay any 'delete' operations while replaying changes on client's cache, to protect from more serious problems with skewed timer or unexpected behaviors. And, of course, client should not rely on cached data while connection state is healthy. 
   */
  var exports = function(id, name, description, createdAt, workspacePath, excludedPaths, offlineCachePaths) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
    _this['description'] = description;
    _this['createdAt'] = createdAt;

    _this['workspacePath'] = workspacePath;

    _this['excludedPaths'] = excludedPaths;
    _this['offlineCachePaths'] = offlineCachePaths;
  };

  /**
   * Constructs a <code>Workspace</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Workspace} obj Optional instance to populate.
   * @return {module:model/Workspace} The populated <code>Workspace</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('accessedAt')) {
        obj['accessedAt'] = ApiClient.convertToType(data['accessedAt'], 'Date');
      }
      if (data.hasOwnProperty('workspacePath')) {
        obj['workspacePath'] = ApiClient.convertToType(data['workspacePath'], 'String');
      }
      if (data.hasOwnProperty('ephemeral')) {
        obj['ephemeral'] = ApiClient.convertToType(data['ephemeral'], 'Boolean');
      }
      if (data.hasOwnProperty('excludedPaths')) {
        obj['excludedPaths'] = ApiClient.convertToType(data['excludedPaths'], ['String']);
      }
      if (data.hasOwnProperty('offlineCachePaths')) {
        obj['offlineCachePaths'] = ApiClient.convertToType(data['offlineCachePaths'], ['String']);
      }
    }
    return obj;
  }

  /**
   * the id of a workspace. usually same to file system id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * display text of this workspace for UI
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * human readable description on this workspace
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * the time when this workspace is created (registered from local file system)
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * the time when the last session on this workspace was made. (optional)
   * @member {Date} accessedAt
   */
  exports.prototype['accessedAt'] = undefined;
  /**
   * absolute path of this workspace in server. Server may not expose this property to some untrusted clients.
   * @member {String} workspacePath
   */
  exports.prototype['workspacePath'] = undefined;
  /**
   * If set, workspace is ephemeral - Server will drop registration when it stops working. Ususally, side-loaded workspace via desktop app is ephemeral. Client with proper access right can flip this flag to declare the workspace should be persist, after rebooting. 
   * @member {Boolean} ephemeral
   */
  exports.prototype['ephemeral'] = undefined;
  /**
   * Ignore patterns to exclude from watch service and search-and-replace operations.  Pattern follows '.gitignore' syntax, 1 item per line. It should work as a .gitignore file in the workspace directory. Server should remove all comment items (any item that begins with '#') and blank items. Escaping with '\\' char for the beginning '!' and ending white-spaces shoule be supported, too.  To exclude a directory, client may have to put '/' at the end of the item to exclude everything underneath it. When a dir path is excluded with 'ending /', watch service  may not deliver unlinkDir/addDir events for the path and client should manually check the existence or stats. 
   * @member {Array.<String>} excludedPaths
   */
  exports.prototype['excludedPaths'] = undefined;
  /**
   * Any paths (including excluded paths) to be cached in remote clients.  Browser client should respect offline cache paths always. Desktop-app client may not use off-line cache for local (embedded) server but shall use cache for any remote servers, even for same host. All caches should be partitioned with workspace id, globally unique value through time and space.  Client should pre-fetch the contents of offline cache paths when it start IDE sessions on a workspace to use for off-line state. When client goes to off-line, after losing connection to server, it can use cached data as reply of some WFS operations and can write some data to cache to save workspace data & metadata. The changes should be persistent on client side safely. C  When a client recovers connectivity to server, it should check the stats of files and  dirs to upload if it has got some changes in offline state. If server has more recents contents, client should drop chagnes and refill the cache with fresher data. Client may have some 'time-tolerance' to accept server's data is fresher than client's, smaller than serveral seconds. If server has more recent contents, client should drop the changes and refill the cache with fresher data. If not, client should replay the changes 1 by 1.  Same protocol should be applied when client application starts with some 'unuploaded change' evertime. That means, client should save 'change history' with 'changed data' too, to process it later, when starting app again in normal condition.  All Clients should not replay any 'delete' operations while replaying changes on client's cache, to protect from more serious problems with skewed timer or unexpected behaviors. And, of course, client should not rely on cached data while connection state is healthy. 
   * @member {Array.<String>} offlineCachePaths
   */
  exports.prototype['offlineCachePaths'] = undefined;



  return exports;
}));


