# WebidaRestfulApi.Session

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | the id of a session. usually same to socket id. | 
**name** | **String** | human readable name, usually derived from workspace name. | 
**state** | **String** | NORMAL &#x3D; connected, normally working. CLOSING &#x3D; server requested client to disconnect. Connection will be closed soon. TERMINATED &#x3D; disconnected. server will remove this session from registry ASAP.  | 
**workspaceId** | **String** | the id of workspace that this sessions is working on. If falsy, then this session is not belonged to any workpsace. Usually, dashboard / monitoring app will create a session without workspace id. | [optional] 
**clientAddress** | **String** | the peer address of session connection. not always | 
**connectedAt** | **Date** | the time when socket connection is established | 
**willCloseAt** | **Date** | when state becomes CLOSING, server sets this time as deadline. | [optional] 


<a name="StateEnum"></a>
## Enum: StateEnum


* `NORMAL` (value: `"NORMAL"`)

* `CLOSING` (value: `"CLOSING"`)

* `TERMINATED` (value: `"TERMINATED"`)




