# WebidaRestfulApi.WfsApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copy**](WfsApi.md#copy) | **PUT** /wfs/{wfsId}/any/{wfsPath} | 
[**createDir**](WfsApi.md#createDir) | **PUT** /wfs/{wfsId}/dir/{wfsPath} | 
[**dirTree**](WfsApi.md#dirTree) | **GET** /wfs/{wfsId}/dir/{wfsPath} | 
[**move**](WfsApi.md#move) | **POST** /wfs/{wfsId}/any/{wfsPath} | 
[**readFile**](WfsApi.md#readFile) | **GET** /wfs/{wfsId}/file/{wfsPath} | 
[**remove**](WfsApi.md#remove) | **DELETE** /wfs/{wfsId}/any/{wfsPath} | 
[**stat**](WfsApi.md#stat) | **GET** /wfs/{wfsId}/any/{wfsPath} | 
[**writeFile**](WfsApi.md#writeFile) | **PUT** /wfs/{wfsId}/file/{wfsPath} | 


<a name="copy"></a>
# **copy**
> RestOK copy(wfsId, wfsPath, srcPath, opts)



Creates a copy of source to given path. Unlike cp command, wfsPath always denotes an exact path of the resource to be created.  So, When destination path exists already,   1) copying file to file : follows noOverwrite flag. (does not return error)   2) copying file to dir : returns 409 error   3) copying dir to file : returns 409 error   4) copying dir to dir : merge srcPath/_* to wfsPath, following noOverwite flag.  This operation creates the parents dir of destination path always, and does not roll-back the creation when operation failed. So, clients should roll-back if needed. 

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
  'noOverwrite': false // Boolean | does not overwrites any existing file while copying or moving
  'followSymbolicLinks': false, // Boolean | dereference symlinks in source.
  'preserveTimestamps': false // Boolean | keep mtime/atime of source file(s) in destination.
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
 **wfsPath** | **String**| webida file system path to access. without heading /. should be placed at the end of path arguments | 
 **srcPath** | **String**| source data path of some operations, with have heading / | 
 **noOverwrite** | **Boolean**| does not overwrites any existing file while copying or moving | [optional] [default to false]
 **followSymbolicLinks** | **Boolean**| dereference symlinks in source. | [optional] [default to false]
 **preserveTimestamps** | **Boolean**| keep mtime/atime of source file(s) in destination. | [optional] [default to false]

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



Creates a directory at the path. When the path is found to be a directory, this api does not return error and does not care it&#39;s empty or not. Always creates parent directories if needed.

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
 **wfsPath** | **String**| webida file system path to access. without heading /. should be placed at the end of path arguments | 

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



Returns a directory tree of given path, the errors while building sub-tree will be ignored and result will not include the path that has errors. Client may have to stat some suspicious paths manually, if listing is not complete.

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
 **wfsPath** | **String**| webida file system path to access. without heading /. should be placed at the end of path arguments | 
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



Moves source resource to given path. Follows same rule to deal with existing path. So, this operation works like rename rather than mv. Just like copy(), this operations creates paraent dirs if needed and does not roll-back. Symbolic link and timestamp values will be moved without touching.

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
  'noOverwrite': false // Boolean | does not overwrites any existing file while copying or moving
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
 **wfsPath** | **String**| webida file system path to access. without heading /. should be placed at the end of path arguments | 
 **srcPath** | **String**| source data path of some operations, with have heading / | 
 **noOverwrite** | **Boolean**| does not overwrites any existing file while copying or moving | [optional] [default to false]

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
 **wfsPath** | **String**| webida file system path to access. without heading /. should be placed at the end of path arguments | 

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
  'noRecursive': false // Boolean | if set, deleting non-empty directory will return 409 error.
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
 **wfsPath** | **String**| webida file system path to access. without heading /. should be placed at the end of path arguments | 
 **noRecursive** | **Boolean**| if set, deleting non-empty directory will return 409 error. | [optional] [default to false]

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



Get stats of given path. (stat() returns stats object in node and POSIX system). This API should be called only when stats of some file system path is stale for unknown reason (e.g. losting change events). Use dirTree operation and session events to detect stats, if possible. This API can be used to check a path is valid, existing one, but it&#39;s not recommended to check existence of individual paths by API. Clients should use dirTree and session events to synchorize some in-app file system with webida file system.

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
  'ignoreError': false // Boolean | When true, operation ignore ENOENT error and returns DUMMY stats object instead of 404 error.
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
 **wfsPath** | **String**| webida file system path to access. without heading /. should be placed at the end of path arguments | 
 **ignoreError** | **Boolean**| When true, operation ignore ENOENT error and returns DUMMY stats object instead of 404 error. | [optional] [default to false]

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



Creates / updates file with body data. Server should write the file in atomic manner nd should not write down request body into final destination path directly. In other words,  wheather writeFile() succeeds or not, the contents of the file should not be corrupted nor half-written.

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
  'ensureParents': false // Boolean | A flag to create all parent directories to create file or dir, like mkdir -p. This parameter does not create entire path, but ensures 'parent directory' of the wfsPath parameter
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
 **wfsPath** | **String**| webida file system path to access. without heading /. should be placed at the end of path arguments | 
 **data** | **File**| file contents to write. | 
 **ensureParents** | **Boolean**| A flag to create all parent directories to create file or dir, like mkdir -p. This parameter does not create entire path, but ensures &#39;parent directory&#39; of the wfsPath parameter | [optional] [default to false]

### Return type

[**RestOK**](RestOK.md)

### Authorization

[webida-simple-auth](../README.md#webida-simple-auth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/octet-stream

