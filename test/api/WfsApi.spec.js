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
    instance = new WebidaRestfulApi.WfsApi();
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

  describe('WfsApi', function() {
    describe('copy', function() {
      it('should call copy successfully', function(done) {
        //uncomment below and update the code to test copy
        //instance.copy(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createDir', function() {
      it('should call createDir successfully', function(done) {
        //uncomment below and update the code to test createDir
        //instance.createDir(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dirTree', function() {
      it('should call dirTree successfully', function(done) {
        //uncomment below and update the code to test dirTree
        //instance.dirTree(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('move', function() {
      it('should call move successfully', function(done) {
        //uncomment below and update the code to test move
        //instance.move(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readFile', function() {
      it('should call readFile successfully', function(done) {
        //uncomment below and update the code to test readFile
        //instance.readFile(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('remove', function() {
      it('should call remove successfully', function(done) {
        //uncomment below and update the code to test remove
        //instance.remove(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rename', function() {
      it('should call rename successfully', function(done) {
        //uncomment below and update the code to test rename
        //instance.rename(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stat', function() {
      it('should call stat successfully', function(done) {
        //uncomment below and update the code to test stat
        //instance.stat(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('writeFile', function() {
      it('should call writeFile successfully', function(done) {
        //uncomment below and update the code to test writeFile
        //instance.writeFile(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
