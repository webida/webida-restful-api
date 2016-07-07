# webida_restful_api

This SDK Contains automatically generated sources & documents with the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.2.0
- Package version: 0.2.0
- Build date: 2016-07-07T16:36:02.764+09:00
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

var api = new WebidaRestfulApi.AuthApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getInfo(callback);

```

## Documentation for API Endpoints

The end point of Webida Restful API is not fixed in swagger spec file.
So, generated basePath *https://localhost/api* should be changed to `${serverUrl}/api`


Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*WebidaRestfulApi.AuthApi* | [**getInfo**](docs/AuthApi.md#getInfo) | **GET** /auth/info | 
*WebidaRestfulApi.AuthApi* | [**issueToken**](docs/AuthApi.md#issueToken) | **POST** /auth/token | 
*WebidaRestfulApi.AuthApi* | [**login**](docs/AuthApi.md#login) | **POST** /auth/login | 
*WebidaRestfulApi.OpsApi* | [**replace**](docs/OpsApi.md#replace) | **POST** /wfs/{wfsId}/ops/replace | 
*WebidaRestfulApi.OpsApi* | [**search**](docs/OpsApi.md#search) | **GET** /wfs/{wfsId}/ops/search/{wfsPath} | 
*WebidaRestfulApi.RemotesApi* | [**findRemoteAccesses**](docs/RemotesApi.md#findRemoteAccesses) | **GET** /remotes | 
*WebidaRestfulApi.RemotesApi* | [**putRemoteAccess**](docs/RemotesApi.md#putRemoteAccess) | **PUT** /remotes | 
*WebidaRestfulApi.RemotesApi* | [**removeRemoteAccess**](docs/RemotesApi.md#removeRemoteAccess) | **DELETE** /remotes | 
*WebidaRestfulApi.SessionApi* | [**closeSession**](docs/SessionApi.md#closeSession) | **DELETE** /sessions/{sessionId} | 
*WebidaRestfulApi.SessionApi* | [**findSessions**](docs/SessionApi.md#findSessions) | **GET** /sessions | 
*WebidaRestfulApi.SessionApi* | [**getSession**](docs/SessionApi.md#getSession) | **GET** /sessions/{sessionId} | 
*WebidaRestfulApi.WfsApi* | [**copy**](docs/WfsApi.md#copy) | **PUT** /wfs/{wfsId}/any/{wfsPath} | 
*WebidaRestfulApi.WfsApi* | [**createDir**](docs/WfsApi.md#createDir) | **PUT** /wfs/{wfsId}/dir/{wfsPath} | 
*WebidaRestfulApi.WfsApi* | [**dirTree**](docs/WfsApi.md#dirTree) | **GET** /wfs/{wfsId}/dir/{wfsPath} | 
*WebidaRestfulApi.WfsApi* | [**move**](docs/WfsApi.md#move) | **POST** /wfs/{wfsId}/dir/{wfsPath} | 
*WebidaRestfulApi.WfsApi* | [**readFile**](docs/WfsApi.md#readFile) | **GET** /wfs/{wfsId}/file/{wfsPath} | 
*WebidaRestfulApi.WfsApi* | [**remove**](docs/WfsApi.md#remove) | **DELETE** /wfs/{wfsId}/any/{wfsPath} | 
*WebidaRestfulApi.WfsApi* | [**rename**](docs/WfsApi.md#rename) | **POST** /wfs/{wfsId}/file/{wfsPath} | 
*WebidaRestfulApi.WfsApi* | [**stat**](docs/WfsApi.md#stat) | **GET** /wfs/{wfsId}/any/{wfsPath} | 
*WebidaRestfulApi.WfsApi* | [**writeFile**](docs/WfsApi.md#writeFile) | **PUT** /wfs/{wfsId}/file/{wfsPath} | 
*WebidaRestfulApi.WorkspaceApi* | [**cancel**](docs/WorkspaceApi.md#cancel) | **DELETE** /workspaces/{workspaceId}/exec | 
*WebidaRestfulApi.WorkspaceApi* | [**createWorkspace**](docs/WorkspaceApi.md#createWorkspace) | **POST** /workspaces | 
*WebidaRestfulApi.WorkspaceApi* | [**exec**](docs/WorkspaceApi.md#exec) | **POST** /workspaces/{workspaceId}/exec | 
*WebidaRestfulApi.WorkspaceApi* | [**findWorkspaces**](docs/WorkspaceApi.md#findWorkspaces) | **GET** /workspaces | 
*WebidaRestfulApi.WorkspaceApi* | [**getChildProcs**](docs/WorkspaceApi.md#getChildProcs) | **GET** /workspaces/{workspaceId}/exec | 
*WebidaRestfulApi.WorkspaceApi* | [**getWorkspace**](docs/WorkspaceApi.md#getWorkspace) | **GET** /workspaces/{workspaceId} | 
*WebidaRestfulApi.WorkspaceApi* | [**readMetadata**](docs/WorkspaceApi.md#readMetadata) | **GET** /workspaces/{workspaceId}/metadata/{objectPath} | 
*WebidaRestfulApi.WorkspaceApi* | [**removeMetadata**](docs/WorkspaceApi.md#removeMetadata) | **DELETE** /workspaces/{workspaceId}/metadata/{objectPath} | 
*WebidaRestfulApi.WorkspaceApi* | [**removeWorkspace**](docs/WorkspaceApi.md#removeWorkspace) | **DELETE** /workspaces/{workspaceId} | 
*WebidaRestfulApi.WorkspaceApi* | [**updateWorkspace**](docs/WorkspaceApi.md#updateWorkspace) | **PUT** /workspaces/{workspaceId} | 
*WebidaRestfulApi.WorkspaceApi* | [**writeMetadata**](docs/WorkspaceApi.md#writeMetadata) | **PUT** /workspaces/{workspaceId}/metadata/{objectPath} | 


## Documentation for Models

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
