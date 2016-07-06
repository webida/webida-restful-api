# WebidaRestfulApi.SessionApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**closeSession**](SessionApi.md#closeSession) | **DELETE** /sessions/{sessionId} | 
[**findSessions**](SessionApi.md#findSessions) | **GET** /sessions | 
[**getSession**](SessionApi.md#getSession) | **GET** /sessions/{sessionId} | 


<a name="closeSession"></a>
# **closeSession**
> RestOK closeSession(sessionId, closeAfter)



close session with timeout

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.SessionApi();

var sessionId = "sessionId_example"; // String | webida session id (usually different from socket id from sock.io)

var closeAfter = 56; // Integer | waiting time before actual closing, to let client save files and prevent reconnect 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.closeSession(sessionId, closeAfter, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **String**| webida session id (usually different from socket id from sock.io) | 
 **closeAfter** | **Integer**| waiting time before actual closing, to let client save files and prevent reconnect  | 

### Return type

[**RestOK**](RestOK.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="findSessions"></a>
# **findSessions**
> [Session] findSessions(opts)



get all / some webida sessions established to server

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.SessionApi();

var opts = { 
  'workspaceId': "workspaceId_example" // String | find only sessions working on some given workspace
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findSessions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspaceId** | **String**| find only sessions working on some given workspace | [optional] 

### Return type

[**[Session]**](Session.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="getSession"></a>
# **getSession**
> Session getSession(sessionId, )



get a session object by id

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.SessionApi();

var sessionId = "sessionId_example"; // String | webida session id (usually different from socket id from sock.io)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSession(sessionId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **String**| webida session id (usually different from socket id from sock.io) | 

### Return type

[**Session**](Session.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

