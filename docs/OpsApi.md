# WebidaRestfulApi.OpsApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**replace**](OpsApi.md#replace) | **POST** /wfs/{wfsId}/ops/replace | 
[**search**](OpsApi.md#search) | **GET** /wfs/{wfsId}/ops/search | 


<a name="replace"></a>
# **replace**
> RestOK replace(wfsId, wfsPathList, patternreplaceTo, opts)



replace file contents with regex matching

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.OpsApi();

var wfsId = "wfsId_example"; // String | webida file system id (same to workspace id) to access.

var wfsPathList = ["wfsPathList_example"]; // [String] | array of wfsPath, without heading /.

var pattern = "pattern_example"; // String | regex pattern to match in search or replace. In replace operation, pattern should be same to the parttern in search operation

var replaceTo = "replaceTo_example"; // String | string to replace with

var opts = { 
  'ignoreCase': false // Boolean | regex matching option to ignore case. In replace operation, this option should be same to one used in search operation
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.replace(wfsId, wfsPathList, patternreplaceTo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wfsId** | **String**| webida file system id (same to workspace id) to access. | 
 **wfsPathList** | [**[String]**](String.md)| array of wfsPath, without heading /. | 
 **pattern** | **String**| regex pattern to match in search or replace. In replace operation, pattern should be same to the parttern in search operation | 
 **replaceTo** | **String**| string to replace with | 
 **ignoreCase** | **Boolean**| regex matching option to ignore case. In replace operation, this option should be same to one used in search operation | [optional] [default to false]

### Return type

[**RestOK**](RestOK.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="search"></a>
# **search**
> {&#39;String&#39;: [Match]} search(wfsId, wfsPathList, pattern, opts)



search files in some path, with given pattern

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.OpsApi();

var wfsId = "wfsId_example"; // String | webida file system id (same to workspace id) to access.

var wfsPathList = ["wfsPathList_example"]; // [String] | array of wfsPath, without heading /.

var pattern = "pattern_example"; // String | regex pattern to match in search or replace. In replace operation, pattern should be same to the parttern in search operation

var opts = { 
  'ignoreCase': false // Boolean | regex matching option to ignore case. In replace operation, this option should be same to one used in search operation
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.search(wfsId, wfsPathList, pattern, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wfsId** | **String**| webida file system id (same to workspace id) to access. | 
 **wfsPathList** | [**[String]**](String.md)| array of wfsPath, without heading /. | 
 **pattern** | **String**| regex pattern to match in search or replace. In replace operation, pattern should be same to the parttern in search operation | 
 **ignoreCase** | **Boolean**| regex matching option to ignore case. In replace operation, this option should be same to one used in search operation | [optional] [default to false]

### Return type

**{&#39;String&#39;: [Match]}**

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

