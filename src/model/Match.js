/**
 * Webida Restful API
 * Minimal, Basic Webida Restful API definitions
 *
 * OpenAPI spec version: 0.2.0
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
    root.WebidaRestfulApi.Match = factory(root.WebidaRestfulApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Match model module.
   * @module model/Match
   * @version 0.2.0
   */

  /**
   * Constructs a new <code>Match</code>.
   * search result for a file
   * @alias module:model/Match
   * @class
   * @param line {Integer} 
   * @param text {String} 
   */
  var exports = function(line, text) {
    var _this = this;

    _this['line'] = line;
    _this['text'] = text;
  };

  /**
   * Constructs a <code>Match</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Match} obj Optional instance to populate.
   * @return {module:model/Match} The populated <code>Match</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('line')) {
        obj['line'] = ApiClient.convertToType(data['line'], 'Integer');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} line
   */
  exports.prototype['line'] = undefined;
  /**
   * @member {String} text
   */
  exports.prototype['text'] = undefined;



  return exports;
}));


