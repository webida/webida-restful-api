# WebidaRestfulApi.WfsApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copy**](WfsApi.md#copy) | **PUT** /wfs/{wfsId}/any/{wfsPath} | 
[**createDir**](WfsApi.md#createDir) | **PUT** /wfs/{wfsId}/dir/{wfsPath} | 
[**dirTree**](WfsApi.md#dirTree) | **GET** /wfs/{wfsId}/dir/{wfsPath} | 
[**move**](WfsApi.md#move) | **POST** /wfs/{wfsId}/dir/{wfsPath} | 
[**readFile**](WfsApi.md#readFile) | **GET** /wfs/{wfsId}/file/{wfsPath} | 
[**remove**](WfsApi.md#remove) | **DELETE** /wfs/{wfsId}/any/{wfsPath} | 
[**rename**](WfsApi.md#rename) | **POST** /wfs/{wfsId}/file/{wfsPath} | 
[**stat**](WfsApi.md#stat) | **GET** /wfs/{wfsId}/any/{wfsPath} | 
[**writeFile**](WfsApi.md#writeFile) | **PUT** /wfs/{wfsId}/file/{wfsPath} | 


<a name="copy"></a>
# **copy**
> RestOK copy(wfsId, wfsPath, srcPath, opts)



Copy to given path. Works like cp -r command, with some funny options. Copying a dir on to existing file will return error if removeExisting is false. If removeExisting is true, destination path will be &#39;clobbed&#39; before copying file. So, delete event will be delivered first, before creating new dir/files. And, plz, Do not use this operation to duplicate socket/fifo/devices. 

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.WfsApi();

var wfsId = "wfsId_example"; // String | webida file system id (same to workspace id) to access.

var wfsPath = "wfsPath_example"; // String | webida file system path to access. without heading /. should be placed at the end of path arguments 

var srcPath = "srcPath_example"; // String | source data path of some operations, with have heading /

var opts = { 
  'removeExisting': false // Boolean | remove any existing file/dir before writing.
  'followSymbolicLinks': false, // Boolean | dereference symlinks or not
  'noPreserveTimestamps': false, // Boolean | to change default behavior, keep mtime/atime of source files in destination
  'filterPattern': "filterPattern_example" // String | execute copy if source matches to this regex pattern.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.copy(wfsId, wfsPath, srcPath, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wfsId** | **String**| webida file system id (same to workspace id) to access. | 
 **wfsPath** | **String**| webida file system path to access. without heading /. should be placed at the end of path arguments  | 
 **srcPath** | **String**| source data path of some operations, with have heading / | 
 **removeExisting** | **Boolean**| remove any existing file/dir before writing. | [optional] [default to false]
 **followSymbolicLinks** | **Boolean**| dereference symlinks or not | [optional] [default to false]
 **noPreserveTimestamps** | **Boolean**| to change default behavior, keep mtime/atime of source files in destination | [optional] [default to false]
 **filterPattern** | **String**| execute copy if source matches to this regex pattern. | [optional] 

### Return type

[**RestOK**](RestOK.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="createDir"></a>
# **createDir**
> RestOK createDir(wfsId, wfsPath, )



create a directory at the path. returns error when wfsPath exists and not empty this API always creates parent directories if needed. 

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.WfsApi();

var wfsId = "wfsId_example"; // String | webida file system id (same to workspace id) to access.

var wfsPath = "wfsPath_example"; // String | webida file system path to access. without heading /. should be placed at the end of path arguments 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDir(wfsId, wfsPath, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wfsId** | **String**| webida file system id (same to workspace id) to access. | 
 **wfsPath** | **String**| webida file system path to access. without heading /. should be placed at the end of path arguments  | 

### Return type

[**RestOK**](RestOK.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="dirTree"></a>
# **dirTree**
> DirEntry dirTree(wfsId, wfsPath, maxDepth)



returns a directory tree of given path, for listing dir and managing file system errors while building sub-tree will be ignored and will not be included in result. 

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.WfsApi();

var wfsId = "wfsId_example"; // String | webida file system id (same to workspace id) to access.

var wfsPath = "wfsPath_example"; // String | webida file system path to access. without heading /. should be placed at the end of path arguments 

var maxDepth = 56; // Integer | Maximum depth of tree. -1 to build a full tree, 0 to stat, 1 to plain list.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dirTree(wfsId, wfsPath, maxDepth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wfsId** | **String**| webida file system id (same to workspace id) to access. | 
 **wfsPath** | **String**| webida file system path to access. without heading /. should be placed at the end of path arguments  | 
 **maxDepth** | **Integer**| Maximum depth of tree. -1 to build a full tree, 0 to stat, 1 to plain list. | 

### Return type

[**DirEntry**](DirEntry.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="move"></a>
# **move**
> RestOK move(wfsId, wfsPath, srcPath, opts)



move file or directory to given path. works like mv -r command

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.WfsApi();

var wfsId = "wfsId_example"; // String | webida file system id (same to workspace id) to access.

var wfsPath = "wfsPath_example"; // String | webida file system path to access. without heading /. should be placed at the end of path arguments 

var srcPath = "srcPath_example"; // String | source data path of some operations, with have heading /

var opts = { 
  'removeExisting': false // Boolean | remove any existing file/dir before writing.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.move(wfsId, wfsPath, srcPath, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wfsId** | **String**| webida file system id (same to workspace id) to access. | 
 **wfsPath** | **String**| webida file system path to access. without heading /. should be placed at the end of path arguments  | 
 **srcPath** | **String**| source data path of some operations, with have heading / | 
 **removeExisting** | **Boolean**| remove any existing file/dir before writing. | [optional] [default to false]

### Return type

[**RestOK**](RestOK.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="readFile"></a>
# **readFile**
> File readFile(wfsId, wfsPath, )



read file data on path

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.WfsApi();

var wfsId = "wfsId_example"; // String | webida file system id (same to workspace id) to access.

var wfsPath = "wfsPath_example"; // String | webida file system path to access. without heading /. should be placed at the end of path arguments 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readFile(wfsId, wfsPath, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wfsId** | **String**| webida file system id (same to workspace id) to access. | 
 **wfsPath** | **String**| webida file system path to access. without heading /. should be placed at the end of path arguments  | 

### Return type

**File**

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="remove"></a>
# **remove**
> RestOK remove(wfsId, wfsPath, , opts)



delete file or directory

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.WfsApi();

var wfsId = "wfsId_example"; // String | webida file system id (same to workspace id) to access.

var wfsPath = "wfsPath_example"; // String | webida file system path to access. without heading /. should be placed at the end of path arguments 

var opts = { 
  'recursive': false // Boolean | flag to set copy with
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.remove(wfsId, wfsPath, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wfsId** | **String**| webida file system id (same to workspace id) to access. | 
 **wfsPath** | **String**| webida file system path to access. without heading /. should be placed at the end of path arguments  | 
 **recursive** | **Boolean**| flag to set copy with | [optional] [default to false]

### Return type

[**RestOK**](RestOK.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="rename"></a>
# **rename**
> RestOK rename(wfsId, wfsPath, srcPath, opts)



Rename a file or directory to. This api does not overwrite existing one.

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.WfsApi();

var wfsId = "wfsId_example"; // String | webida file system id (same to workspace id) to access.

var wfsPath = "wfsPath_example"; // String | webida file system path to access. without heading /. should be placed at the end of path arguments 

var srcPath = "srcPath_example"; // String | source data path of some operations, with have heading /

var opts = { 
  'ensure': false // Boolean | flag to create all parent directories to create file or dir, like mkdir -p
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.rename(wfsId, wfsPath, srcPath, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wfsId** | **String**| webida file system id (same to workspace id) to access. | 
 **wfsPath** | **String**| webida file system path to access. without heading /. should be placed at the end of path arguments  | 
 **srcPath** | **String**| source data path of some operations, with have heading / | 
 **ensure** | **Boolean**| flag to create all parent directories to create file or dir, like mkdir -p | [optional] [default to false]

### Return type

[**RestOK**](RestOK.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="stat"></a>
# **stat**
> Stats stat(wfsId, wfsPath, , opts)



Get stats of given path. (stat() returns \&quot;stats\&quot; object in node and POSIX system) Since we&#39;ve no ctime/atime in Stats class, some file system changing events will send &#39;exactly same&#39; stats object. This API should be called only when stats of some file system path is stale for unknown reason (e.g. losting change events). Use dirTree operation and session events to detect stats, if possible. This API can be used to check a path is valid, existing one, but it&#39;s not recommended to check existence of individual paths by API. Clients should use dirTree and session events to synchorize some in-app file system with webida file system. 

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.WfsApi();

var wfsId = "wfsId_example"; // String | webida file system id (same to workspace id) to access.

var wfsPath = "wfsPath_example"; // String | webida file system path to access. without heading /. should be placed at the end of path arguments 

var opts = { 
  'ignoreError': false // Boolean | flag to ignore stat errors to check existence only. If this flag is true, server will returns 'DUMMY' type stats object instead of 404 error when given path does not exists. (invalid wfsId will produce 400 error, not 404) 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stat(wfsId, wfsPath, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wfsId** | **String**| webida file system id (same to workspace id) to access. | 
 **wfsPath** | **String**| webida file system path to access. without heading /. should be placed at the end of path arguments  | 
 **ignoreError** | **Boolean**| flag to ignore stat errors to check existence only. If this flag is true, server will returns &#39;DUMMY&#39; type stats object instead of 404 error when given path does not exists. (invalid wfsId will produce 400 error, not 404)  | [optional] [default to false]

### Return type

[**Stats**](Stats.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/octet-stream

<a name="writeFile"></a>
# **writeFile**
> RestOK writeFile(wfsId, wfsPath, data, opts)



Creates / updates file with body data

### Example
```javascript
var WebidaRestfulApi = require('webida_restful_api');
var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix = 'Token';

var apiInstance = new WebidaRestfulApi.WfsApi();

var wfsId = "wfsId_example"; // String | webida file system id (same to workspace id) to access.

var wfsPath = "wfsPath_example"; // String | webida file system path to access. without heading /. should be placed at the end of path arguments 

var data = "/path/to/file.txt"; // File | file contents to write.

var opts = { 
  'ensure': false // Boolean | flag to create all parent directories to create file or dir, like mkdir -p
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.writeFile(wfsId, wfsPath, data, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wfsId** | **String**| webida file system id (same to workspace id) to access. | 
 **wfsPath** | **String**| webida file system path to access. without heading /. should be placed at the end of path arguments  | 
 **data** | **File**| file contents to write. | 
 **ensure** | **Boolean**| flag to create all parent directories to create file or dir, like mkdir -p | [optional] [default to false]

### Return type

[**RestOK**](RestOK.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/octet-stream

