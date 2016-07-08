# WebidaRestfulApi.AuthApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInfo**](AuthApi.md#getInfo) | **GET** /auth/info | 
[**issueToken**](AuthApi.md#issueToken) | **POST** /auth/token | 
[**login**](AuthApi.md#login) | **POST** /auth/login | 


<a name="getInfo"></a>
# **getInfo**
> User getInfo()



Gets user information of that can be identified with current access token. Implementations should provide a more restful api based on domain data model, not extending this operation. (e.g. GET,PUT and DELETE on /Users/{userId} to read, update and delete user) 

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.AuthApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInfo(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="issueToken"></a>
# **issueToken**
> Token issueToken(type, opts)



Creates new token from current access token, inheriting workspace id &amp; session id. The duration of generated token is (and should not be) parameterizable. Server should set proper duration, respecting \&quot;reconnect\&quot; period of socket.io clients. Remember that most of socket.io client implementations (including official js client) do not provide any ways to change connection parameters (header or query) while reconnecting to server.  Like login API, this endpoint does not provide any encryption. Server should not set any data to harm security in the token &amp; should provide some signinig/encryption mechanism to protect token. Simple JSON Web Token with HMAC-SHA will do. 

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.AuthApi();

var type = "type_example"; // String | 

var opts = { 
  'workspaceId': "workspaceId_example" // String | recommended to issue a MASTER type token to restrict remote access
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.issueToken(type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**|  | 
 **workspaceId** | **String**| recommended to issue a MASTER type token to restrict remote access | [optional] 

### Return type

[**Token**](Token.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="login"></a>
# **login**
> Token login(body)



A \&quot;VERY\&quot; basic authentication, required to use webida-simple-auth security scheme.  Service / Product implementations who need better security, should override this operation or add their own login api or some other specs like OAuth2. Simple auth is not suitable for large-sacle, multi-tennant service, for the scheme assumes a single, trusted user only.  Logging-in with master token, the generated access token inherits all restriction from it. On the other hand, normal log-in with login id &amp; password creates an unrestricted access token, with reasonably short expiration time.  Every client should spawn another access token with issueToken API before current access token expires, inheriting session id from current token. To save remote access info, client should create a (restricted but long-ttl) master token to start IDE from remote. The remote client should not use the unrestricted acccess token from login to use any other perpose than finding available workspaces, and should not refresh the token. (Let user log-in again)  Login API does not force any encryption. Server should provide secure transport channel, usually https, to provide remote access, always. 

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');

var apiInstance = new WebidaRestfulApi.AuthApi();

var body = new WebidaRestfulApi.Credential(); // Credential | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.login(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Credential**](Credential.md)|  | 

### Return type

[**Token**](Token.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

