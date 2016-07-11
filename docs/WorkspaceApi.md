# WebidaRestfulApi.WorkspaceApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel**](WorkspaceApi.md#cancel) | **DELETE** /workspaces/{workspaceId}/exec | 
[**createWorkspace**](WorkspaceApi.md#createWorkspace) | **POST** /workspaces | 
[**exec**](WorkspaceApi.md#exec) | **POST** /workspaces/{workspaceId}/exec | 
[**findProcs**](WorkspaceApi.md#findProcs) | **GET** /workspaces/{workspaceId}/exec | 
[**findWorkspaces**](WorkspaceApi.md#findWorkspaces) | **GET** /workspaces | 
[**getWorkspace**](WorkspaceApi.md#getWorkspace) | **GET** /workspaces/{workspaceId} | 
[**removeWorkspace**](WorkspaceApi.md#removeWorkspace) | **DELETE** /workspaces/{workspaceId} | 
[**updateWorkspace**](WorkspaceApi.md#updateWorkspace) | **PUT** /workspaces/{workspaceId} | 


<a name="cancel"></a>
# **cancel**
> RestOK cancel(workspaceId, opts)



cancels an execution, if possible. Killing process may not be graceful. requires proper access rights. if execId is not specified, this api does nothing. 

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
  'execId': "execId_example" // String | the id of execution request(different from pid!)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancel(workspaceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | **String**| webida workspace id (usually same to file system id, wfsId) | 
 **execId** | **String**| the id of execution request(different from pid!) | [optional] 

### Return type

[**RestOK**](RestOK.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="createWorkspace"></a>
# **createWorkspace**
> Workspace createWorkspace(localPath, name, description)



Creates a new workspace with given local path. Requires an unrestricted access token.  

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
apiInstance.createWorkspace(localPath, name, description, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
> ExecutionResult exec(workspaceIdbody, opts)



execute a shell command on this workspace. requires proper access rights.

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

var body = new WebidaRestfulApi.Execution(); // Execution | 

var opts = { 
  'async': false // Boolean | Spawn a child process for given command and returns the created child proc info. Actual output (stream of message) will be delivered to web socket channel, with room id /sessions/async-{execId} 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.exec(workspaceIdbody, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | **String**| webida workspace id (usually same to file system id, wfsId) | 
 **body** | [**Execution**](Execution.md)|  | 
 **async** | **Boolean**| Spawn a child process for given command and returns the created child proc info. Actual output (stream of message) will be delivered to web socket channel, with room id /sessions/async-{execId}  | [optional] [default to false]

### Return type

[**ExecutionResult**](ExecutionResult.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="findProcs"></a>
# **findProcs**
> [ChildProcess] findProcs(workspaceId, opts)



Gets process info, created by async exec request, on this workspace. If execId is set, this op finds a spawned process whose id is matching. If not, all spawned procs will be found. This op does not returns error when no procs found but empty result array.  This operation requires proper access rights. (unrestricted or matching workspace id in access token with parameter) 

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');

var apiInstance = new WebidaRestfulApi.WorkspaceApi();

var workspaceId = "workspaceId_example"; // String | webida workspace id (usually same to file system id, wfsId)

var opts = { 
  'execId': "execId_example" // String | the id of execution request(different from pid!)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findProcs(workspaceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | **String**| webida workspace id (usually same to file system id, wfsId) | 
 **execId** | **String**| the id of execution request(different from pid!) | [optional] 

### Return type

[**[ChildProcess]**](ChildProcess.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="findWorkspaces"></a>
# **findWorkspaces**
> [Workspace] findWorkspaces(opts)



Finds workspaces (no find/search parameters yet). Requires an unrestricted access token.   

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

var opts = { 
  'disposable': false // Boolean | include disposable workspaces or not
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findWorkspaces(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **disposable** | **Boolean**| include disposable workspaces or not | [optional] [default to false]

### Return type

[**[Workspace]**](Workspace.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="getWorkspace"></a>
# **getWorkspace**
> Workspace getWorkspace(workspaceId)



get a workspace object by id

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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWorkspace(workspaceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | **String**| webida workspace id (usually same to file system id, wfsId) | 

### Return type

[**Workspace**](Workspace.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="removeWorkspace"></a>
# **removeWorkspace**
> Workspace removeWorkspace(workspaceId, opts)



This operation will remove the requested workspace when   1) all sessions are closed for request (will be notified by server)   2) excedded time limit value in closeAfter parameter   3) server goes down after accepting remove request \&quot;willBeRemovedAt\&quot; property can be set \&quot;only\&quot; by this api. This API requires \&quot;unrestricted\&quot; access token. Even an access token has matching workspace id, removing an workspace is rejected. 

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
  'closeAfter': 0 // Integer | Time in seconds to wait for all sessions save & close their data.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeWorkspace(workspaceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | **String**| webida workspace id (usually same to file system id, wfsId) | 
 **closeAfter** | **Integer**| Time in seconds to wait for all sessions save &amp; close their data. | [optional] [default to 0]

### Return type

[**Workspace**](Workspace.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="updateWorkspace"></a>
# **updateWorkspace**
> Workspace updateWorkspace(workspaceId)



Updates workspace. Some protected properties will not be changed by this api. Requires  proper access rights in access token.  

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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateWorkspace(workspaceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | **String**| webida workspace id (usually same to file system id, wfsId) | 

### Return type

[**Workspace**](Workspace.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

