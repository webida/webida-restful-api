# WebidaRestfulApi.RemotesApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findRemoteAccesses**](RemotesApi.md#findRemoteAccesses) | **GET** /remotes | 
[**putRemoteAccess**](RemotesApi.md#putRemoteAccess) | **PUT** /remotes | 
[**removeRemoteAccess**](RemotesApi.md#removeRemoteAccess) | **DELETE** /remotes | 


<a name="findRemoteAccesses"></a>
# **findRemoteAccesses**
> [RemoteAccess] findRemoteAccesses()



Get all access informations See RemoteWorkspaceAccess definition for details (no fancy find / search feature yet)

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.RemotesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findRemoteAccesses(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[RemoteAccess]**](RemoteAccess.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="putRemoteAccess"></a>
# **putRemoteAccess**
> RestOK putRemoteAccess(body)



Ceates or updates a remote workspace access information

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.RemotesApi();

var body = new WebidaRestfulApi.RemoteAccess(); // RemoteAccess | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putRemoteAccess(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RemoteAccess**](RemoteAccess.md)|  | 

### Return type

[**RestOK**](RestOK.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="removeRemoteAccess"></a>
# **removeRemoteAccess**
> RemoteAccess removeRemoteAccess(workspaceId)



Removes remote workspace access information

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.RemotesApi();

var workspaceId = "workspaceId_example"; // String | workspace Id of remote workspace


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeRemoteAccess(workspaceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | **String**| workspace Id of remote workspace | 

### Return type

[**RemoteAccess**](RemoteAccess.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

