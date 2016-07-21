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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WebidaRestfulApi) {
      root.WebidaRestfulApi = {};
    }
    root.WebidaRestfulApi.Token = factory(root.WebidaRestfulApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Token model module.
   * @module model/Token
   * @version 0.7.0
   */

  /**
   * Constructs a new <code>Token</code>.
   * a json webtoken and accessible data
   * @alias module:model/Token
   * @class
   * @param text {String} actual token text that should be shipped in header or query
   * @param tokenType {module:model/Token.TokenTypeEnum} MASTER : used to create an access token from clients, without login credential ACCESS : protects api access. should be unique for each ide session  Note that here\"s no REFRESH token, nor LOGIN token. The login api will create unrestricted access token & master token pair. Desktop app has a side-way to create an unrestricted master token before starting IDE instances. 
   * @param expiresAt {Date} 
   * @param issuedAt {Date} 
   */
  var exports = function(text, tokenType, expiresAt, issuedAt) {
    var _this = this;

    _this['text'] = text;
    _this['tokenType'] = tokenType;
    _this['expiresAt'] = expiresAt;
    _this['issuedAt'] = issuedAt;


  };

  /**
   * Constructs a <code>Token</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Token} obj Optional instance to populate.
   * @return {module:model/Token} The populated <code>Token</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('tokenType')) {
        obj['tokenType'] = ApiClient.convertToType(data['tokenType'], 'String');
      }
      if (data.hasOwnProperty('expiresAt')) {
        obj['expiresAt'] = ApiClient.convertToType(data['expiresAt'], 'Date');
      }
      if (data.hasOwnProperty('issuedAt')) {
        obj['issuedAt'] = ApiClient.convertToType(data['issuedAt'], 'Date');
      }
      if (data.hasOwnProperty('sessionId')) {
        obj['sessionId'] = ApiClient.convertToType(data['sessionId'], 'String');
      }
      if (data.hasOwnProperty('workspaceId')) {
        obj['workspaceId'] = ApiClient.convertToType(data['workspaceId'], 'String');
      }
    }
    return obj;
  }

  /**
   * actual token text that should be shipped in header or query
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * MASTER : used to create an access token from clients, without login credential ACCESS : protects api access. should be unique for each ide session  Note that here\"s no REFRESH token, nor LOGIN token. The login api will create unrestricted access token & master token pair. Desktop app has a side-way to create an unrestricted master token before starting IDE instances. 
   * @member {module:model/Token.TokenTypeEnum} tokenType
   */
  exports.prototype['tokenType'] = undefined;
  /**
   * @member {Date} expiresAt
   */
  exports.prototype['expiresAt'] = undefined;
  /**
   * @member {Date} issuedAt
   */
  exports.prototype['issuedAt'] = undefined;
  /**
   * mandatory for ACCESS token, identifying client instance
   * @member {String} sessionId
   */
  exports.prototype['sessionId'] = undefined;
  /**
   * If truthy, access rights are restricted to specified workspace only.
   * @member {String} workspaceId
   */
  exports.prototype['workspaceId'] = undefined;


  /**
   * Allowed values for the <code>tokenType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TokenTypeEnum = {
    /**
     * value: "MASTER"
     * @const
     */
    "MASTER": "MASTER",
    /**
     * value: "ACCESS"
     * @const
     */
    "ACCESS": "ACCESS"  };


  return exports;
}));


