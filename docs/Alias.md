# WebidaRestfulApi.Alias

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | id, and the path-fragment to access. Since this id is a path-fragment, any unsafe chars for file system path should not be included. Windows OS prohibits following characters to be used in a file name.  &lt; (less than)  &gt; (greater than)  : (colon)  \&quot; (double quote)  / (forward slash)  \\ (backslash)  | (vertical bar or pipe)  ? (question mark)  * (asterisk)  | 
**workspaceId** | **String** | id of the workspace that contains source of alias | 
**sourcePath** | **String** | the source of alias, relative path to workspace root directory. | 


