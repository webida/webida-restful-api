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
    instance = new WebidaRestfulApi.Stats();
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

  describe('Stats', function() {
    it('should create an instance of Stats', function() {
      // uncomment below and update the code to test Stats
      //var instane = new WebidaRestfulApi.Stats();
      //expect(instance).to.be.a(WebidaRestfulApi.Stats);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new WebidaRestfulApi.Stats();
      //expect(instance).to.be();
    });

    it('should have the property birthtime (base name: "birthtime")', function() {
      // uncomment below and update the code to test the property birthtime
      //var instane = new WebidaRestfulApi.Stats();
      //expect(instance).to.be();
    });

    it('should have the property mtime (base name: "mtime")', function() {
      // uncomment below and update the code to test the property mtime
      //var instane = new WebidaRestfulApi.Stats();
      //expect(instance).to.be();
    });

    it('should have the property mode (base name: "mode")', function() {
      // uncomment below and update the code to test the property mode
      //var instane = new WebidaRestfulApi.Stats();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instane = new WebidaRestfulApi.Stats();
      //expect(instance).to.be();
    });

    it('should have the property nlink (base name: "nlink")', function() {
      // uncomment below and update the code to test the property nlink
      //var instane = new WebidaRestfulApi.Stats();
      //expect(instance).to.be();
    });

  });

}));
