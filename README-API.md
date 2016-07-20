# webida_restful_api

This SDK Contains automatically generated sources & documents with the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.6.0
- Package version: 0.6.0
- Build date: 2016-07-20T21:57:26.763+09:00
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Getting Started

```javascript
var WebidaRestfulApi = require('webida_restful_api');

var defaultClient = WebidaRestfulApi.ApiClient.default;

// Configure API key authorization: webida-simple-auth
var webida-simple-auth = defaultClient.authentications['webida-simple-auth'];
webida-simple-auth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//webida-simple-auth.apiKeyPrefix['Authorization'] = "Token"

var api = new WebidaRestfulApi.AliasApi()

var aliasId = "aliasId_example"; // {String} url path fragment alias id. should have no '/' as well as any 'unsafe' chars for url path.  especially, '*' is reserved for finding operations or some other special case.

var workspaceId = "workspaceId_example"; // {String} webida workspace id in query part

var srcPath = "srcPath_example"; // {String} source data path of some operations, without have heading /


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.findAliases(aliasId, workspaceId, srcPath, callback);

```

## Documentation for API Endpoints

The end point of Webida Restful API is not fixed in swagger spec file.
So, generated basePath *https://localhost/api* should be changed to `${serverUrl}/api`


Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*WebidaRestfulApi.AliasApi* | [**findAliases**](docs/AliasApi.md#findAliases) | **GET** /aliass/{aliasId} | 
*WebidaRestfulApi.AliasApi* | [**putAlias**](docs/AliasApi.md#putAlias) | **PUT** /aliass/{aliasId} | 
*WebidaRestfulApi.AliasApi* | [**removeAliases**](docs/AliasApi.md#removeAliases) | **DELETE** /aliass/{aliasId} | 
*WebidaRestfulApi.AuthApi* | [**getInfo**](docs/AuthApi.md#getInfo) | **GET** /auth/info | 
*WebidaRestfulApi.AuthApi* | [**issueToken**](docs/AuthApi.md#issueToken) | **POST** /auth/token | 
*WebidaRestfulApi.AuthApi* | [**login**](docs/AuthApi.md#login) | **POST** /auth/login | 
*WebidaRestfulApi.OpsApi* | [**replace**](docs/OpsApi.md#replace) | **POST** /wfs/{wfsId}/ops/replace | 
*WebidaRestfulApi.OpsApi* | [**search**](docs/OpsApi.md#search) | **GET** /wfs/{wfsId}/ops/search | 
*WebidaRestfulApi.RemotesApi* | [**findRemoteAccesses**](docs/RemotesApi.md#findRemoteAccesses) | **GET** /remotes | 
*WebidaRestfulApi.RemotesApi* | [**putRemoteAccess**](docs/RemotesApi.md#putRemoteAccess) | **PUT** /remotes | 
*WebidaRestfulApi.RemotesApi* | [**removeRemoteAccess**](docs/RemotesApi.md#removeRemoteAccess) | **DELETE** /remotes | 
*WebidaRestfulApi.SessionApi* | [**closeSessions**](docs/SessionApi.md#closeSessions) | **DELETE** /sessions/{sessionId} | 
*WebidaRestfulApi.SessionApi* | [**findSessions**](docs/SessionApi.md#findSessions) | **GET** /sessions/{sessionId} | 
*WebidaRestfulApi.WfsApi* | [**copy**](docs/WfsApi.md#copy) | **PUT** /wfs/{wfsId}/any/{wfsPath} | 
*WebidaRestfulApi.WfsApi* | [**createDir**](docs/WfsApi.md#createDir) | **PUT** /wfs/{wfsId}/dir/{wfsPath} | 
*WebidaRestfulApi.WfsApi* | [**dirTree**](docs/WfsApi.md#dirTree) | **GET** /wfs/{wfsId}/dir/{wfsPath} | 
*WebidaRestfulApi.WfsApi* | [**move**](docs/WfsApi.md#move) | **POST** /wfs/{wfsId}/any/{wfsPath} | 
*WebidaRestfulApi.WfsApi* | [**readFile**](docs/WfsApi.md#readFile) | **GET** /wfs/{wfsId}/file/{wfsPath} | 
*WebidaRestfulApi.WfsApi* | [**remove**](docs/WfsApi.md#remove) | **DELETE** /wfs/{wfsId}/any/{wfsPath} | 
*WebidaRestfulApi.WfsApi* | [**stat**](docs/WfsApi.md#stat) | **GET** /wfs/{wfsId}/any/{wfsPath} | 
*WebidaRestfulApi.WfsApi* | [**writeFile**](docs/WfsApi.md#writeFile) | **PUT** /wfs/{wfsId}/file/{wfsPath} | 
*WebidaRestfulApi.WorkspaceApi* | [**cancel**](docs/WorkspaceApi.md#cancel) | **DELETE** /workspaces/{workspaceId}/procs | 
*WebidaRestfulApi.WorkspaceApi* | [**createWorkspace**](docs/WorkspaceApi.md#createWorkspace) | **POST** /workspaces/{workspaceId} | 
*WebidaRestfulApi.WorkspaceApi* | [**execute**](docs/WorkspaceApi.md#execute) | **POST** /workspaces/{workspaceId}/procs | 
*WebidaRestfulApi.WorkspaceApi* | [**findProcs**](docs/WorkspaceApi.md#findProcs) | **GET** /workspaces/{workspaceId}/procs | 
*WebidaRestfulApi.WorkspaceApi* | [**findWorkspaces**](docs/WorkspaceApi.md#findWorkspaces) | **GET** /workspaces/{workspaceId} | 
*WebidaRestfulApi.WorkspaceApi* | [**removeWorkspace**](docs/WorkspaceApi.md#removeWorkspace) | **DELETE** /workspaces/{workspaceId} | 
*WebidaRestfulApi.WorkspaceApi* | [**updateWorkspace**](docs/WorkspaceApi.md#updateWorkspace) | **PUT** /workspaces/{workspaceId} | 


## Documentation for Models

 - [WebidaRestfulApi.Alias](docs/Alias.md)
 - [WebidaRestfulApi.ChildProcess](docs/ChildProcess.md)
 - [WebidaRestfulApi.Credential](docs/Credential.md)
 - [WebidaRestfulApi.DirEntry](docs/DirEntry.md)
 - [WebidaRestfulApi.Execution](docs/Execution.md)
 - [WebidaRestfulApi.ExecutionResult](docs/ExecutionResult.md)
 - [WebidaRestfulApi.Match](docs/Match.md)
 - [WebidaRestfulApi.RemoteAccess](docs/RemoteAccess.md)
 - [WebidaRestfulApi.RestError](docs/RestError.md)
 - [WebidaRestfulApi.RestOK](docs/RestOK.md)
 - [WebidaRestfulApi.Session](docs/Session.md)
 - [WebidaRestfulApi.Stats](docs/Stats.md)
 - [WebidaRestfulApi.Token](docs/Token.md)
 - [WebidaRestfulApi.User](docs/User.md)
 - [WebidaRestfulApi.Workspace](docs/Workspace.md)


## Documentation for Authorization


### webida-simple-auth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header
