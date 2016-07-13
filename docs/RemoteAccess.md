# WebidaRestfulApi.RemoteAccess

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | display text of remote workspace. can be different from original name. | 
**serverUrl** | **String** | the url of remote server. Should have no path/query parameters, even \&quot;/\&quot; in path. | 
**workspaceId** | **String** | the id of remote workspace, read from remote server | 
**workspacePath** | **String** | Full path of remote workspace, read from remote server. this property will be removed when clients are able to work without \&quot;named root directory\&quot; in workspace fs tree. | [optional] 
**masterToken** | **String** | master token to access service, issued from remote server | 


