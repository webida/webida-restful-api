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
    root.WebidaRestfulApi.ChildProcess = factory(root.WebidaRestfulApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ChildProcess model module.
   * @module model/ChildProcess
   * @version 0.7.0
   */

  /**
   * Constructs a new <code>ChildProcess</code>.
   * a process in execution, spawned by exec or other means.
   * @alias module:model/ChildProcess
   * @class
   * @param pid {Integer} child process pid
   * @param command {String} execution command in execution request
   * @param args {Array.<String>} arguments of command in execution request
   * @param execId {String} execution id from execution request
   * @param state {module:model/ChildProcess.StateEnum} State of process. Where   CREATED - process is just created. no event has arrived yet.   WORKING - some output on stdout/stderr is arrived.   KILLING - sent kill signal, by cancel operation or some critical error event from the process. Invoking cancel operation to a process being killed should return error.   EXITED  - This process has exited already. Server is cleaning up the resources and not complete yet. Client should not expect that every exited process can be found with findProcs(). As KILLING state, cancellation will be rejected. 
   * @param foreground {Boolean} if is true, this process is created from synchronous exec request. Som
   * @param startedAt {Date} the time when this process is spawned
   */
  var exports = function(pid, command, args, execId, state, foreground, startedAt) {
    var _this = this;

    _this['pid'] = pid;
    _this['command'] = command;
    _this['args'] = args;
    _this['execId'] = execId;
    _this['state'] = state;
    _this['foreground'] = foreground;
    _this['startedAt'] = startedAt;


  };

  /**
   * Constructs a <code>ChildProcess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChildProcess} obj Optional instance to populate.
   * @return {module:model/ChildProcess} The populated <code>ChildProcess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pid')) {
        obj['pid'] = ApiClient.convertToType(data['pid'], 'Integer');
      }
      if (data.hasOwnProperty('command')) {
        obj['command'] = ApiClient.convertToType(data['command'], 'String');
      }
      if (data.hasOwnProperty('args')) {
        obj['args'] = ApiClient.convertToType(data['args'], ['String']);
      }
      if (data.hasOwnProperty('execId')) {
        obj['execId'] = ApiClient.convertToType(data['execId'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('foreground')) {
        obj['foreground'] = ApiClient.convertToType(data['foreground'], 'Boolean');
      }
      if (data.hasOwnProperty('startedAt')) {
        obj['startedAt'] = ApiClient.convertToType(data['startedAt'], 'Date');
      }
      if (data.hasOwnProperty('exitCode')) {
        obj['exitCode'] = ApiClient.convertToType(data['exitCode'], 'Integer');
      }
      if (data.hasOwnProperty('exitSignal')) {
        obj['exitSignal'] = ApiClient.convertToType(data['exitSignal'], 'String');
      }
    }
    return obj;
  }

  /**
   * child process pid
   * @member {Integer} pid
   */
  exports.prototype['pid'] = undefined;
  /**
   * execution command in execution request
   * @member {String} command
   */
  exports.prototype['command'] = undefined;
  /**
   * arguments of command in execution request
   * @member {Array.<String>} args
   */
  exports.prototype['args'] = undefined;
  /**
   * execution id from execution request
   * @member {String} execId
   */
  exports.prototype['execId'] = undefined;
  /**
   * State of process. Where   CREATED - process is just created. no event has arrived yet.   WORKING - some output on stdout/stderr is arrived.   KILLING - sent kill signal, by cancel operation or some critical error event from the process. Invoking cancel operation to a process being killed should return error.   EXITED  - This process has exited already. Server is cleaning up the resources and not complete yet. Client should not expect that every exited process can be found with findProcs(). As KILLING state, cancellation will be rejected. 
   * @member {module:model/ChildProcess.StateEnum} state
   */
  exports.prototype['state'] = undefined;
  /**
   * if is true, this process is created from synchronous exec request. Som
   * @member {Boolean} foreground
   */
  exports.prototype['foreground'] = undefined;
  /**
   * the time when this process is spawned
   * @member {Date} startedAt
   */
  exports.prototype['startedAt'] = undefined;
  /**
   * the exit code of child process. available with EXITED procs only.
   * @member {Integer} exitCode
   */
  exports.prototype['exitCode'] = undefined;
  /**
   * the signal named that killed this child process.(not always available)
   * @member {String} exitSignal
   */
  exports.prototype['exitSignal'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "CREATED"
     * @const
     */
    "CREATED": "CREATED",
    /**
     * value: "WORKING"
     * @const
     */
    "WORKING": "WORKING",
    /**
     * value: "KILLING"
     * @const
     */
    "KILLING": "KILLING",
    /**
     * value: "EXITED"
     * @const
     */
    "EXITED": "EXITED"  };


  return exports;
}));


