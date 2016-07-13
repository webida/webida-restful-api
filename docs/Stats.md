# WebidaRestfulApi.Stats

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | All types except &#39;DUMMY&#39; come from fs.Stats is*** methods results. (e.g. if isFile() is true, then type will be &#39;FILE&#39;) If type is not decidable by the methods, default type is &#39;FILE&#39;, for everything on the file system is basically a file. &#39;DUMMY&#39; type means that some object &#39;does not exist for now&#39;. Client may use &#39;DUMMY&#39; type to mark something dangling, not written or created on real file system yet but visible to user. | 
**birthtime** | **Date** |  | 
**mtime** | **Date** |  | 
**mode** | **String** |  | 
**size** | **Integer** |  | 
**nlink** | **Integer** |  | 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `FILE` (value: `"FILE"`)

* `DIRECTORY` (value: `"DIRECTORY"`)

* `BLOCK_DEVICE` (value: `"BLOCK_DEVICE"`)

* `CHARACTER_DEVICE` (value: `"CHARACTER_DEVICE"`)

* `LINK` (value: `"LINK"`)

* `FIFO` (value: `"FIFO"`)

* `SOCKET` (value: `"SOCKET"`)

* `DUMMY` (value: `"DUMMY"`)




