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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/RestOK', 'model/RestError', 'model/Workspace', 'model/ChildProcess', 'model/Execution', 'model/ExecutionResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RestOK'), require('../model/RestError'), require('../model/Workspace'), require('../model/ChildProcess'), require('../model/Execution'), require('../model/ExecutionResult'));
  } else {
    // Browser globals (root is window)
    if (!root.WebidaRestfulApi) {
      root.WebidaRestfulApi = {};
    }
    root.WebidaRestfulApi.WorkspaceApi = factory(root.WebidaRestfulApi.ApiClient, root.WebidaRestfulApi.RestOK, root.WebidaRestfulApi.RestError, root.WebidaRestfulApi.Workspace, root.WebidaRestfulApi.ChildProcess, root.WebidaRestfulApi.Execution, root.WebidaRestfulApi.ExecutionResult);
  }
}(this, function(ApiClient, RestOK, RestError, Workspace, ChildProcess, Execution, ExecutionResult) {
  'use strict';

  /**
   * Workspace service.
   * @module api/WorkspaceApi
   * @version 0.6.0
   */

  /**
   * Constructs a new WorkspaceApi. 
   * @alias module:api/WorkspaceApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the cancel operation.
     * @callback module:api/WorkspaceApi~cancelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestOK} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancels executions, killing the spawned processes. To terminate all spawned processes, set execId to &#39;*&#39;. Requires proper access rights. Since killing a process usually takes a little bit long time, this api does not returns actual result but works in async manner. (So, client should listen to web socket channels for the processes). This operation Requires same access rights to exec().
     * @param {String} workspaceId webida workspace id (usually same to file system id, wfsId)
     * @param {String} execId the id from execution request (different from pid!)
     * @param {module:api/WorkspaceApi~cancelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RestOK}
     */
    this.cancel = function(workspaceId, execId, callback) {
      var postBody = null;

      // verify the required parameter 'workspaceId' is set
      if (workspaceId == undefined || workspaceId == null) {
        throw "Missing the required parameter 'workspaceId' when calling cancel";
      }

      // verify the required parameter 'execId' is set
      if (execId == undefined || execId == null) {
        throw "Missing the required parameter 'execId' when calling cancel";
      }


      var pathParams = {
        'workspaceId': workspaceId
      };
      var queryParams = {
        'execId': execId
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['webida-simple-auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/octet-stream'];
      var returnType = RestOK;

      return this.apiClient.callApi(
        '/workspaces/{workspaceId}/exec', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createWorkspace operation.
     * @callback module:api/WorkspaceApi~createWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Workspace} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new workspace with given local path. Requires an unrestricted access token. the workspace id parameter is ignored and will be replaced by new, unique value by server. it&#39;s recommended to set the value to simple, bogus one, like &#39;*&#39; or &#39;-&#39; (since it&#39;s path  parameter, empty value is not allowed. 404 error will be returned for the case). excludedPath will be set with default values, including .git/, bower_components/ and node_modules/  Needs an unrestricted access token. 
     * @param {String} workspaceId webida workspace id (usually same to file system id, wfsId)
     * @param {String} localPath a real, local path of the system (not unixified)
     * @param {String} name workspace name property
     * @param {String} description workspace name property
     * @param {module:api/WorkspaceApi~createWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Workspace}
     */
    this.createWorkspace = function(workspaceId, localPath, name, description, callback) {
      var postBody = null;

      // verify the required parameter 'workspaceId' is set
      if (workspaceId == undefined || workspaceId == null) {
        throw "Missing the required parameter 'workspaceId' when calling createWorkspace";
      }

      // verify the required parameter 'localPath' is set
      if (localPath == undefined || localPath == null) {
        throw "Missing the required parameter 'localPath' when calling createWorkspace";
      }

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling createWorkspace";
      }

      // verify the required parameter 'description' is set
      if (description == undefined || description == null) {
        throw "Missing the required parameter 'description' when calling createWorkspace";
      }


      var pathParams = {
        'workspaceId': workspaceId
      };
      var queryParams = {
        'localPath': localPath,
        'name': name,
        'description': description
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['webida-simple-auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/octet-stream'];
      var returnType = Workspace;

      return this.apiClient.callApi(
        '/workspaces/{workspaceId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the exec operation.
     * @callback module:api/WorkspaceApi~execCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExecutionResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Executes a shell command or spawns a background process on this workspace. Requires proper access rights.
     * @param {String} workspaceId webida workspace id (usually same to file system id, wfsId)
     * @param {module:model/Execution} body the process to be executed or spawned.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.async Spawns a child process for given command and returns the created child proc info. Actual output (stream of message) will be delivered to web socket channel, using execution id. (default to false)
     * @param {module:api/WorkspaceApi~execCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ExecutionResult}
     */
    this.exec = function(workspaceId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'workspaceId' is set
      if (workspaceId == undefined || workspaceId == null) {
        throw "Missing the required parameter 'workspaceId' when calling exec";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling exec";
      }


      var pathParams = {
        'workspaceId': workspaceId
      };
      var queryParams = {
        'async': opts['async']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['webida-simple-auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/octet-stream'];
      var returnType = ExecutionResult;

      return this.apiClient.callApi(
        '/workspaces/{workspaceId}/exec', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findProcs operation.
     * @callback module:api/WorkspaceApi~findProcsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ChildProcess>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets process info, created by async exec request, on this workspace. To find all spawned processes, set id to &#39;*&#39;. This op does not returns error when no procs found but empty result array. 
     * @param {String} workspaceId webida workspace id (usually same to file system id, wfsId)
     * @param {String} execId the id from execution request (different from pid!)
     * @param {module:api/WorkspaceApi~findProcsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ChildProcess>}
     */
    this.findProcs = function(workspaceId, execId, callback) {
      var postBody = null;

      // verify the required parameter 'workspaceId' is set
      if (workspaceId == undefined || workspaceId == null) {
        throw "Missing the required parameter 'workspaceId' when calling findProcs";
      }

      // verify the required parameter 'execId' is set
      if (execId == undefined || execId == null) {
        throw "Missing the required parameter 'execId' when calling findProcs";
      }


      var pathParams = {
        'workspaceId': workspaceId
      };
      var queryParams = {
        'execId': execId
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/octet-stream'];
      var returnType = [ChildProcess];

      return this.apiClient.callApi(
        '/workspaces/{workspaceId}/exec', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findWorkspaces operation.
     * @callback module:api/WorkspaceApi~findWorkspacesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Workspace>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Finds workspaces with given id or parameters. if workspaceId &#x3D; &#39;*&#39;, all workspaces in server  are returned. No empty workspace id is allowed for it&#39;s a path parameter. When a workspace id is not &#39;*&#39; and non-existing workspace are requested, server should send 404 error and should ignore disposable parameter. 
     * @param {String} workspaceId webida workspace id (usually same to file system id, wfsId)
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.disposable flag to include disposable workspaces or not, when workspaceId is &#39;*&#39; (default to false)
     * @param {module:api/WorkspaceApi~findWorkspacesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Workspace>}
     */
    this.findWorkspaces = function(workspaceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'workspaceId' is set
      if (workspaceId == undefined || workspaceId == null) {
        throw "Missing the required parameter 'workspaceId' when calling findWorkspaces";
      }


      var pathParams = {
        'workspaceId': workspaceId
      };
      var queryParams = {
        'disposable': opts['disposable']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['webida-simple-auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/octet-stream'];
      var returnType = [Workspace];

      return this.apiClient.callApi(
        '/workspaces/{workspaceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeWorkspace operation.
     * @callback module:api/WorkspaceApi~removeWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RestOK} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes a workspace. If no sessions are connected, this api &#39;works&#39; before returning result. if some sesions are, workspace will be removed when   1) all sessions are closed for request (will be notified by server)   2) exceeded time limit value in closeAfter parameter   3) server stops after accepting remove request and willBeRemoved value is set. So, client may &#39;find&#39; the workspace to be removed after calling this operation.  Requires \&quot;unrestricted\&quot; access rights. 
     * @param {String} workspaceId webida workspace id (usually same to file system id, wfsId)
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.closeAfter Time in seconds to wait for all sessions save &amp; close their data. (default to 0)
     * @param {Boolean} opts.expunge Time in seconds to wait for all sessions save &amp; close their data.
     * @param {module:api/WorkspaceApi~removeWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RestOK}
     */
    this.removeWorkspace = function(workspaceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'workspaceId' is set
      if (workspaceId == undefined || workspaceId == null) {
        throw "Missing the required parameter 'workspaceId' when calling removeWorkspace";
      }


      var pathParams = {
        'workspaceId': workspaceId
      };
      var queryParams = {
        'closeAfter': opts['closeAfter'],
        'expunge': opts['expunge']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['webida-simple-auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/octet-stream'];
      var returnType = RestOK;

      return this.apiClient.callApi(
        '/workspaces/{workspaceId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWorkspace operation.
     * @callback module:api/WorkspaceApi~updateWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Workspace} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates workspace. Some protected properties will not be changed by this op. If server cannot apply changed properties before returning workspace, such properties should not be updated with this operation. Clients should not rely on request body for further works, and should always check response to see what&#39;s changed actually.  Requires proper access rights. 
     * @param {String} workspaceId webida workspace id (usually same to file system id, wfsId)
     * @param {module:model/Workspace} body workspace object that contains updates
     * @param {module:api/WorkspaceApi~updateWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Workspace}
     */
    this.updateWorkspace = function(workspaceId, body, callback) {
      var postBody = body;

      // verify the required parameter 'workspaceId' is set
      if (workspaceId == undefined || workspaceId == null) {
        throw "Missing the required parameter 'workspaceId' when calling updateWorkspace";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateWorkspace";
      }


      var pathParams = {
        'workspaceId': workspaceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['webida-simple-auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/octet-stream'];
      var returnType = Workspace;

      return this.apiClient.callApi(
        '/workspaces/{workspaceId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
