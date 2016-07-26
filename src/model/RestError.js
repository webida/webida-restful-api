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
    root.WebidaRestfulApi.RestError = factory(root.WebidaRestfulApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RestError model module.
   * @module model/RestError
   * @version 0.7.1
   */

  /**
   * Constructs a new <code>RestError</code>.
   * Error object with code and message. code is bound to status code, but not always same to standard HTTP status text. For example, some 409 error may have code \&quot;Invalid Argument\&quot; instead of \&quot;Conflic\&quot;. So, Client should read message property to know what happend exactly, when an error is returned from server. And, some 500 errors can have system errno instead of useless \&quot;internal\&quot;. Like other errors, details are hidden in message.
   * @alias module:model/RestError
   * @class
   * @param message {String} 
   */
  var exports = function(message) {
    var _this = this;


    _this['message'] = message;


  };

  /**
   * Constructs a <code>RestError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestError} obj Optional instance to populate.
   * @return {module:model/RestError} The populated <code>RestError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('errno')) {
        obj['errno'] = ApiClient.convertToType(data['errno'], 'String');
      }
      if (data.hasOwnProperty('stack')) {
        obj['stack'] = ApiClient.convertToType(data['stack'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * errno code for some internal errors in server. Since service implementation can use many different platform api & runtime, client should avoid relying on errno code. If server provides errno code, it should be translated into human readable string like ENOENT or ENOMEM, not pure integer value.
   * @member {String} errno
   */
  exports.prototype['errno'] = undefined;
  /**
   * stack trace for this error. Server should not include stack trace in production and client should not print or show this stack to user. This property should be used in 'developer mode' only, for debugging.
   * @member {String} stack
   */
  exports.prototype['stack'] = undefined;



  return exports;
}));


