# WebidaRestfulApi.ChildProcess

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pid** | **Integer** | child process pid | 
**command** | **String** | execution command in execution request | 
**args** | **[String]** | arguments of command in execution request | 
**execId** | **String** | execution id from execution request | 
**state** | **String** | State of process. Where   CREATED - process is just created. no event has arrived yet   WORKING - some output on stdout/stderr is arrived   KILLING - sent kill signal, by cancel operation or error event from the process   EXITED  - process has exited.  | 
**startedAt** | **Date** | the time when this process is spawned | 
**exitCode** | **Integer** | the exit code of child process. available with EXITED procs only. | [optional] 
**exitSignal** | **String** | the signal that killed this child process.(not always available) | [optional] 


<a name="StateEnum"></a>
## Enum: StateEnum


* `CREATED` (value: `"CREATED"`)

* `WORKING` (value: `"WORKING"`)

* `KILLING` (value: `"KILLING"`)

* `EXITED` (value: `"EXITED"`)




