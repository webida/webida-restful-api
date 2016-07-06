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
    instance = new WebidaRestfulApi.Session();
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

  describe('Session', function() {
    it('should create an instance of Session', function() {
      // uncomment below and update the code to test Session
      //var instane = new WebidaRestfulApi.Session();
      //expect(instance).to.be.a(WebidaRestfulApi.Session);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new WebidaRestfulApi.Session();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new WebidaRestfulApi.Session();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new WebidaRestfulApi.Session();
      //expect(instance).to.be();
    });

    it('should have the property workspaceId (base name: "workspaceId")', function() {
      // uncomment below and update the code to test the property workspaceId
      //var instane = new WebidaRestfulApi.Session();
      //expect(instance).to.be();
    });

    it('should have the property clientAddress (base name: "clientAddress")', function() {
      // uncomment below and update the code to test the property clientAddress
      //var instane = new WebidaRestfulApi.Session();
      //expect(instance).to.be();
    });

    it('should have the property connectedAt (base name: "connectedAt")', function() {
      // uncomment below and update the code to test the property connectedAt
      //var instane = new WebidaRestfulApi.Session();
      //expect(instance).to.be();
    });

    it('should have the property disconnectedAt (base name: "disconnectedAt")', function() {
      // uncomment below and update the code to test the property disconnectedAt
      //var instane = new WebidaRestfulApi.Session();
      //expect(instance).to.be();
    });

    it('should have the property willCloseAt (base name: "willCloseAt")', function() {
      // uncomment below and update the code to test the property willCloseAt
      //var instane = new WebidaRestfulApi.Session();
      //expect(instance).to.be();
    });

    it('should have the property willLoseAt (base name: "willLoseAt")', function() {
      // uncomment below and update the code to test the property willLoseAt
      //var instane = new WebidaRestfulApi.Session();
      //expect(instance).to.be();
    });

  });

}));
