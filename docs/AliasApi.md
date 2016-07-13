# WebidaRestfulApi.AliasApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findAliases**](AliasApi.md#findAliases) | **GET** /aliass/{aliasId} | 
[**putAlias**](AliasApi.md#putAlias) | **PUT** /aliass/{aliasId} | 
[**removeAliases**](AliasApi.md#removeAliases) | **DELETE** /aliass/{aliasId} | 


<a name="findAliases"></a>
# **findAliases**
> [Alias] findAliases(aliasId, workspaceId, )



get alias objects. set aliasId to &#39;*&#39; to find all aliases in some workspace. if alias id is given, only 0 or 1 matched alias object will be returned.

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.AliasApi();

var aliasId = "aliasId_example"; // String | url path fragment alias id. should have no '/' as well as any 'unsafe' chars for url path.  especially, '*' is reserved for finding operations or some other special case.

var workspaceId = "workspaceId_example"; // String | webida workspace id in query part


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findAliases(aliasId, workspaceId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aliasId** | **String**| url path fragment alias id. should have no &#39;/&#39; as well as any &#39;unsafe&#39; chars for url path.  especially, &#39;*&#39; is reserved for finding operations or some other special case. | 
 **workspaceId** | **String**| webida workspace id in query part | 

### Return type

[**[Alias]**](Alias.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="putAlias"></a>
# **putAlias**
> RestOK putAlias(aliasId, body)



create, or update an alias.

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.AliasApi();

var aliasId = "aliasId_example"; // String | url path fragment alias id. should have no '/' as well as any 'unsafe' chars for url path.  especially, '*' is reserved for finding operations or some other special case.

var body = new WebidaRestfulApi.Alias(); // Alias | alias object to write. should have same id to aliasId parameter.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putAlias(aliasId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aliasId** | **String**| url path fragment alias id. should have no &#39;/&#39; as well as any &#39;unsafe&#39; chars for url path.  especially, &#39;*&#39; is reserved for finding operations or some other special case. | 
 **body** | [**Alias**](Alias.md)| alias object to write. should have same id to aliasId parameter. | 

### Return type

[**RestOK**](RestOK.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="removeAliases"></a>
# **removeAliases**
> RestOK removeAliases(aliasId, workspaceId, )



remove alias. targeting rule is same to findAliases() operation.

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.AliasApi();

var aliasId = "aliasId_example"; // String | url path fragment alias id. should have no '/' as well as any 'unsafe' chars for url path.  especially, '*' is reserved for finding operations or some other special case.

var workspaceId = "workspaceId_example"; // String | webida workspace id in query part


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeAliases(aliasId, workspaceId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aliasId** | **String**| url path fragment alias id. should have no &#39;/&#39; as well as any &#39;unsafe&#39; chars for url path.  especially, &#39;*&#39; is reserved for finding operations or some other special case. | 
 **workspaceId** | **String**| webida workspace id in query part | 

### Return type

[**RestOK**](RestOK.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

