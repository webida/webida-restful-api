# WebidaRestfulApi.RestError

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** |  | [optional] 
**message** | **String** |  | 
**errno** | **String** | errno code for some internal errors in server. Since service implementation can use many different platform api &amp; runtime, client should avoid relying on errno code. If server provides errno code, it should be translated into human readable string like ENOENT or ENOMEM, not pure integer value. | [optional] 
**stack** | **String** | stack trace for this error. Server should not include stack trace in production and client should not print or show this stack to user. This property should be used in &#39;developer mode&#39; only, for debugging. | [optional] 


