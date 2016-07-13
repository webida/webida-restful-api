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
    instance = new WebidaRestfulApi.Alias();
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

  describe('Alias', function() {
    it('should create an instance of Alias', function() {
      // uncomment below and update the code to test Alias
      //var instane = new WebidaRestfulApi.Alias();
      //expect(instance).to.be.a(WebidaRestfulApi.Alias);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new WebidaRestfulApi.Alias();
      //expect(instance).to.be();
    });

    it('should have the property workspaceId (base name: "workspaceId")', function() {
      // uncomment below and update the code to test the property workspaceId
      //var instane = new WebidaRestfulApi.Alias();
      //expect(instance).to.be();
    });

    it('should have the property sourcePath (base name: "sourcePath")', function() {
      // uncomment below and update the code to test the property sourcePath
      //var instane = new WebidaRestfulApi.Alias();
      //expect(instance).to.be();
    });

  });

}));
