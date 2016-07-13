# WebidaRestfulApi.WorkspaceApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel**](WorkspaceApi.md#cancel) | **DELETE** /workspaces/{workspaceId}/exec | 
[**createWorkspace**](WorkspaceApi.md#createWorkspace) | **POST** /workspaces/{workspaceId} | 
[**exec**](WorkspaceApi.md#exec) | **POST** /workspaces/{workspaceId}/exec | 
[**findProcs**](WorkspaceApi.md#findProcs) | **GET** /workspaces/{workspaceId}/exec | 
[**findWorkspaces**](WorkspaceApi.md#findWorkspaces) | **GET** /workspaces/{workspaceId} | 
[**removeWorkspace**](WorkspaceApi.md#removeWorkspace) | **DELETE** /workspaces/{workspaceId} | 
[**updateWorkspace**](WorkspaceApi.md#updateWorkspace) | **PUT** /workspaces/{workspaceId} | 


<a name="cancel"></a>
# **cancel**
> RestOK cancel(workspaceId, execId)



Cancels executions, killing the spawned processes. To terminate all spawned processes, set execId to &#39;*&#39;. Requires proper access rights. Since killing a process usually takes a little bit long time, this api does not returns actual result but works in async manner. (So, client should listen to web socket channels for the processes). This operation Requires same access rights to exec().

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



Creates a new workspace with given local path. Requires an unrestricted access token. the workspace id parameter is ignored and will be replaced by new, unique value by server. it&#39;s recommended to set the value to simple, bogus one, like &#39;*&#39; or &#39;-&#39; (since it&#39;s path  parameter, empty value is not allowed. 404 error will be returned for the case). excludedPath will be set with default values, including .git/, bower_components/ and node_modules/  Needs an unrestricted access token. 

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

<a name="exec"></a>
# **exec**
> ExecutionResult exec(workspaceId, body, opts)



Executes a shell command or spawns a background process on this workspace. Requires proper access rights.

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
  'async': false // Boolean | Spawns a child process for given command and returns the created child proc info. Actual output (stream of message) will be delivered to web socket channel, using execution id.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.exec(workspaceId, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | **String**| webida workspace id (usually same to file system id, wfsId) | 
 **body** | [**Execution**](Execution.md)| the process to be executed or spawned. | 
 **async** | **Boolean**| Spawns a child process for given command and returns the created child proc info. Actual output (stream of message) will be delivered to web socket channel, using execution id. | [optional] [default to false]

### Return type

[**ExecutionResult**](ExecutionResult.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="findProcs"></a>
# **findProcs**
> [ChildProcess] findProcs(workspaceId, execId)



Gets process info, created by async exec request, on this workspace. To find all spawned processes, set id to &#39;*&#39;. This op does not returns error when no procs found but empty result array. 

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');

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
apiInstance.findProcs(workspaceId, execId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | **String**| webida workspace id (usually same to file system id, wfsId) | 
 **execId** | **String**| the id from execution request (different from pid!) | 

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



Finds workspaces with given id or parameters. if workspaceId &#x3D; &#39;*&#39;, all workspaces in server  are returned. No empty workspace id is allowed for it&#39;s a path parameter. When a workspace id is not &#39;*&#39; and non-existing workspace are requested, server should send 404 error and should ignore disposable parameter. 

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
  'disposable': false // Boolean | flag to include disposable workspaces or not, when workspaceId is '*'
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
 **disposable** | **Boolean**| flag to include disposable workspaces or not, when workspaceId is &#39;*&#39; | [optional] [default to false]

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
  'expunge': true // Boolean | Time in seconds to wait for all sessions save & close their data.
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
 **expunge** | **Boolean**| Time in seconds to wait for all sessions save &amp; close their data. | [optional] 

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

