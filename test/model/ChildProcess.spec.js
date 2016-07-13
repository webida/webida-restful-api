/**
 * Webida Restful API
 * Restful API for Webida clients to use server's data & features
 *
 * OpenAPI spec version: 0.6.0
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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WebidaRestfulApi);
  }
}(this, function(expect, WebidaRestfulApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WebidaRestfulApi.ChildProcess();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ChildProcess', function() {
    it('should create an instance of ChildProcess', function() {
      // uncomment below and update the code to test ChildProcess
      //var instane = new WebidaRestfulApi.ChildProcess();
      //expect(instance).to.be.a(WebidaRestfulApi.ChildProcess);
    });

    it('should have the property pid (base name: "pid")', function() {
      // uncomment below and update the code to test the property pid
      //var instane = new WebidaRestfulApi.ChildProcess();
      //expect(instance).to.be();
    });

    it('should have the property command (base name: "command")', function() {
      // uncomment below and update the code to test the property command
      //var instane = new WebidaRestfulApi.ChildProcess();
      //expect(instance).to.be();
    });

    it('should have the property args (base name: "args")', function() {
      // uncomment below and update the code to test the property args
      //var instane = new WebidaRestfulApi.ChildProcess();
      //expect(instance).to.be();
    });

    it('should have the property execId (base name: "execId")', function() {
      // uncomment below and update the code to test the property execId
      //var instane = new WebidaRestfulApi.ChildProcess();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new WebidaRestfulApi.ChildProcess();
      //expect(instance).to.be();
    });

    it('should have the property startedAt (base name: "startedAt")', function() {
      // uncomment below and update the code to test the property startedAt
      //var instane = new WebidaRestfulApi.ChildProcess();
      //expect(instance).to.be();
    });

    it('should have the property exitCode (base name: "exitCode")', function() {
      // uncomment below and update the code to test the property exitCode
      //var instane = new WebidaRestfulApi.ChildProcess();
      //expect(instance).to.be();
    });

    it('should have the property exitSignal (base name: "exitSignal")', function() {
      // uncomment below and update the code to test the property exitSignal
      //var instane = new WebidaRestfulApi.ChildProcess();
      //expect(instance).to.be();
    });

  });

}));
