# WebidaRestfulApi.ChildProcess

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pid** | **Integer** | child process pid | 
**command** | **String** | the execution command in Execution request | 
**args** | **[String]** | arguments of the command in Execution request | 
**executionId** | **String** | execution id from Execution request | 
**startedAt** | **Date** | the time when this process is spawned | 
**background** | **[String]** | true when this process is spawned by asynchronous exec request or some other ways to spawn processes in server. fasle when this process is spawened with plain, synchronous execution request.  | 


