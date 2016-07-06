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
    instance = new WebidaRestfulApi.WorkspaceApi();
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

  describe('WorkspaceApi', function() {
    describe('cancel', function() {
      it('should call cancel successfully', function(done) {
        //uncomment below and update the code to test cancel
        //instance.cancel(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createWorkspace', function() {
      it('should call createWorkspace successfully', function(done) {
        //uncomment below and update the code to test createWorkspace
        //instance.createWorkspace(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('exec', function() {
      it('should call exec successfully', function(done) {
        //uncomment below and update the code to test exec
        //instance.exec(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findWorkspaces', function() {
      it('should call findWorkspaces successfully', function(done) {
        //uncomment below and update the code to test findWorkspaces
        //instance.findWorkspaces(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChildProcs', function() {
      it('should call getChildProcs successfully', function(done) {
        //uncomment below and update the code to test getChildProcs
        //instance.getChildProcs(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWorkspace', function() {
      it('should call getWorkspace successfully', function(done) {
        //uncomment below and update the code to test getWorkspace
        //instance.getWorkspace(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readMetadata', function() {
      it('should call readMetadata successfully', function(done) {
        //uncomment below and update the code to test readMetadata
        //instance.readMetadata(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeMetadata', function() {
      it('should call removeMetadata successfully', function(done) {
        //uncomment below and update the code to test removeMetadata
        //instance.removeMetadata(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeWorkspace', function() {
      it('should call removeWorkspace successfully', function(done) {
        //uncomment below and update the code to test removeWorkspace
        //instance.removeWorkspace(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateWorkspace', function() {
      it('should call updateWorkspace successfully', function(done) {
        //uncomment below and update the code to test updateWorkspace
        //instance.updateWorkspace(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('writeMetadata', function() {
      it('should call writeMetadata successfully', function(done) {
        //uncomment below and update the code to test writeMetadata
        //instance.writeMetadata(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
