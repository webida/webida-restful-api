# WebidaRestfulApi.WorkspaceApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel**](WorkspaceApi.md#cancel) | **DELETE** /workspaces/{workspaceId}/procs | 
[**createWorkspace**](WorkspaceApi.md#createWorkspace) | **POST** /workspaces/{workspaceId} | 
[**execute**](WorkspaceApi.md#execute) | **POST** /workspaces/{workspaceId}/procs | 
[**findProcs**](WorkspaceApi.md#findProcs) | **GET** /workspaces/{workspaceId}/procs | 
[**findWorkspaces**](WorkspaceApi.md#findWorkspaces) | **GET** /workspaces/{workspaceId} | 
[**removeWorkspace**](WorkspaceApi.md#removeWorkspace) | **DELETE** /workspaces/{workspaceId} | 
[**updateWorkspace**](WorkspaceApi.md#updateWorkspace) | **PUT** /workspaces/{workspaceId} | 


<a name="cancel"></a>
# **cancel**
> RestOK cancel(workspaceId, execId)



Cancels executions, killing the spawned processes. To terminate all spawned processes, set execId to &#39;*&#39;. Requires proper access rights. Since killing a process usually takes a little bit long time, this api does not returns actual result but works in async manner. (So, client should listen to web socket channels for the processes). This operation Requires same access rights to execute operation. Server should reject to cancel any forground processes and processes is being killed or has exited already.

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.WorkspaceApi();

var workspaceId = "workspaceId_example"; // String | webida workspace id (usually same to file system id, wfsId)

var execId = "execId_example"; // String | the id from execution request (different from pid!)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancel(workspaceId, execId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | **String**| webida workspace id (usually same to file system id, wfsId) | 
 **execId** | **String**| the id from execution request (different from pid!) | 

### Return type

[**RestOK**](RestOK.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="createWorkspace"></a>
# **createWorkspace**
> Workspace createWorkspace(workspaceId, localPath, name, description)



Creates a new workspace with given local path. Requires an unrestricted access token. the workspace id parameter is ignored and will be replaced by new, unique value by server. it&#39;s recommended to set the value to simple, bogus one, like &#39;*&#39; or &#39;-&#39; (since it&#39;s path  parameter, empty value is not allowed. excludedPath property is initialized with  default values (usually .git/, .node_modules/, ./bower_components) by server.  Needs an unrestricted access token. 

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.WorkspaceApi();

var workspaceId = "workspaceId_example"; // String | webida workspace id (usually same to file system id, wfsId)

var localPath = "localPath_example"; // String | a real, local path of the system (not unixified)

var name = "name_example"; // String | workspace name property

var description = "description_example"; // String | workspace name property


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createWorkspace(workspaceId, localPath, name, description, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | **String**| webida workspace id (usually same to file system id, wfsId) | 
 **localPath** | **String**| a real, local path of the system (not unixified) | 
 **name** | **String**| workspace name property | 
 **description** | **String**| workspace name property | 

### Return type

[**Workspace**](Workspace.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="execute"></a>
# **execute**
> ExecutionResult execute(workspaceId, body, opts)



Executes a shell command (foreground process) or spawns a background process on this workspace. Requires proper access rights.

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.WorkspaceApi();

var workspaceId = "workspaceId_example"; // String | webida workspace id (usually same to file system id, wfsId)

var body = new WebidaRestfulApi.Execution(); // Execution | the process to be executed or spawned.

var opts = { 
  'async': false // Boolean | Spawns a background process for given command and returns the created child proc info. Actual output (stream of message) will be delivered to web socket channel, using execution id.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.execute(workspaceId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | **String**| webida workspace id (usually same to file system id, wfsId) | 
 **body** | [**Execution**](Execution.md)| the process to be executed or spawned. | 
 **async** | **Boolean**| Spawns a background process for given command and returns the created child proc info. Actual output (stream of message) will be delivered to web socket channel, using execution id. | [optional] [default to false]

### Return type

[**ExecutionResult**](ExecutionResult.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="findProcs"></a>
# **findProcs**
> [ChildProcess] findProcs(workspaceId, execId, opts)



Gets process info on this workspace. To find all child processes, set id to &#39;*&#39;. This op does not returns error when no procs found but empty result array. Child process can be created by exec operation and by some other means. 

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');

var apiInstance = new WebidaRestfulApi.WorkspaceApi();

var workspaceId = "workspaceId_example"; // String | webida workspace id (usually same to file system id, wfsId)

var execId = "execId_example"; // String | the id from execution request (different from pid!)

var opts = { 
  'includeForeground': true // Boolean | flag to include 'foreground processes' in result. foreground processes can be created by and only by exec operation without async opetion. normally, this flag will not be used except debugging or diagnostics. foreground processes has 'foreground' property, set to true, always.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findProcs(workspaceId, execId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | **String**| webida workspace id (usually same to file system id, wfsId) | 
 **execId** | **String**| the id from execution request (different from pid!) | 
 **includeForeground** | **Boolean**| flag to include &#39;foreground processes&#39; in result. foreground processes can be created by and only by exec operation without async opetion. normally, this flag will not be used except debugging or diagnostics. foreground processes has &#39;foreground&#39; property, set to true, always. | [optional] 

### Return type

[**[ChildProcess]**](ChildProcess.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="findWorkspaces"></a>
# **findWorkspaces**
> [Workspace] findWorkspaces(workspaceId, , opts)



Finds workspaces with given id or parameters. if workspaceId &#x3D; &#39;*&#39;, all workspaces in server are returned. No empty workspace id is allowed for it&#39;s a path parameter. When workspaceId is not &#39;*&#39;, server should return empty array, not 404 Not Found error. 

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.WorkspaceApi();

var workspaceId = "workspaceId_example"; // String | webida workspace id (usually same to file system id, wfsId)

var opts = { 
  'includeEphemeral': false // Boolean | flag to include ephemeral workspaces or not, when workspaceId is '*'. if workspace id is specified, then this flag will be ignored.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findWorkspaces(workspaceId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | **String**| webida workspace id (usually same to file system id, wfsId) | 
 **includeEphemeral** | **Boolean**| flag to include ephemeral workspaces or not, when workspaceId is &#39;*&#39;. if workspace id is specified, then this flag will be ignored. | [optional] [default to false]

### Return type

[**[Workspace]**](Workspace.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="removeWorkspace"></a>
# **removeWorkspace**
> RestOK removeWorkspace(workspaceId, , opts)



Removes a workspace. If no sessions are connected, this api &#39;works&#39; before returning result. if some sesions are, workspace will be removed when   1) all sessions are closed for request (will be notified by server)   2) exceeded time limit value in closeAfter parameter   3) server stops after accepting remove request and willBeRemoved value is set. So, client may &#39;find&#39; the workspace to be removed after calling this operation.  Requires \&quot;unrestricted\&quot; access rights. 

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.WorkspaceApi();

var workspaceId = "workspaceId_example"; // String | webida workspace id (usually same to file system id, wfsId)

var opts = { 
  'closeAfter': 0, // Integer | Time in seconds to wait for all sessions save & close their data.
  'removeDir': true // Boolean | flag to delete directory in real file system when removing workspace. Usually, this value should not be set true for user can handle directory persistence manually. Clients need to get explicit confirmation from user.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeWorkspace(workspaceId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | **String**| webida workspace id (usually same to file system id, wfsId) | 
 **closeAfter** | **Integer**| Time in seconds to wait for all sessions save &amp; close their data. | [optional] [default to 0]
 **removeDir** | **Boolean**| flag to delete directory in real file system when removing workspace. Usually, this value should not be set true for user can handle directory persistence manually. Clients need to get explicit confirmation from user. | [optional] 

### Return type

[**RestOK**](RestOK.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="updateWorkspace"></a>
# **updateWorkspace**
> Workspace updateWorkspace(workspaceId, body)



Updates workspace. Some protected properties will not be changed by this op. If server cannot apply changed properties before returning workspace, such properties should not be updated with this operation. Clients should not rely on request body for further works, and should always check response to see what&#39;s changed actually.  Requires proper access rights. 

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.WorkspaceApi();

var workspaceId = "workspaceId_example"; // String | webida workspace id (usually same to file system id, wfsId)

var body = new WebidaRestfulApi.Workspace(); // Workspace | workspace object that contains updates


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateWorkspace(workspaceId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | **String**| webida workspace id (usually same to file system id, wfsId) | 
 **body** | [**Workspace**](Workspace.md)| workspace object that contains updates | 

### Return type

[**Workspace**](Workspace.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

