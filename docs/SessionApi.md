# WebidaRestfulApi.SessionApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**closeSessions**](SessionApi.md#closeSessions) | **DELETE** /sessions/{sessionId} | 
[**findSessions**](SessionApi.md#findSessions) | **GET** /sessions/{sessionId} | 


<a name="closeSessions"></a>
# **closeSessions**
> RestOK closeSessions(sessionId, workspaceId, closeAfter)



Closes session with timeout. Targets are selected by same rule to findSessions() op. While targeting multiple sessions, this operation requires same access rights with findSessions(). Closing a single session requires &#39;same session id&#39; or &#39;unrestricted workspace acceess&#39;.

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

var workspaceId = "workspaceId_example"; // String | webida workspace id in query part

var closeAfter = 56; // Integer | Waiting time before actual closing, to let client save files and prevent reconnecting. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.closeSessions(sessionId, workspaceId, closeAfter, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **String**| webida session id (usually different from socket id from sock.io) | 
 **workspaceId** | **String**| webida workspace id in query part | 
 **closeAfter** | **Integer**| Waiting time before actual closing, to let client save files and prevent reconnecting.  | 

### Return type

[**RestOK**](RestOK.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="findSessions"></a>
# **findSessions**
> [Session] findSessions(sessionId, workspaceId, )



Finds webida sessions established to server. if session id is given, matched session info will be returned and workspace id  parameter will be ignored. To find all sessions of some workspace, set session id to &#39;*&#39; and specify workspace id.  This operation requires proper accsss rights.   1) To find all sessions, an unrestricted token is required.   2) To find some workspace sesions, token should have proper access right on the workspace. 

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

var workspaceId = "workspaceId_example"; // String | webida workspace id in query part


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findSessions(sessionId, workspaceId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **String**| webida session id (usually different from socket id from sock.io) | 
 **workspaceId** | **String**| webida workspace id in query part | 

### Return type

[**[Session]**](Session.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

