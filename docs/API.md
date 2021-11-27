<a name="supabase"></a>

## supabase(SUPABASE_URL, SUPABASE_KEY) ⇒ <code>Object</code> \| <code>Object</code> \| <code>Object</code> \| <code>Object</code> \| <code>Object</code>
SupabaseをGASで操作するための関数

**Kind**: global function  
**Returns**: <code>Object</code> - - 操作用関数<code>Object</code> - readRecords - レコード取得<code>Object</code> - insertRecords - レコード新規登録<code>Object</code> - updateRecords - レコード更新<code>Object</code> - deleteRecords - レコード削除  

| Param | Type | Description |
| --- | --- | --- |
| SUPABASE_URL | <code>string</code> | Supabase API URL |
| SUPABASE_KEY | <code>string</code> | Supabase API Key |

**Example**  
```js
function getSupabaseData (){
  const SUPABASE_URL = "{{URL}}";
  const SUPABASE_KEY = "{{KEY}}";
  const {readRecords} = gas_supabase_library.supabase(SUPABASE_URL,SUPABASE_KEY);
  Logger.log(readRecords('/table_name?select=*',{
    'Range': '0-9'
  }))
}
```
**Example**  
```js
function insertSupabase() {
  const SUPABASE_URL = "{{URL}}";
  const SUPABASE_KEY = "{{KEY}}";
  const {insertRecords} = gas_supabase_library.supabase(SUPABASE_URL,SUPABASE_KEY);
  Logger.log(insertRecords('/table_name',
    {
      'name':'test'
    }))
}
```
**Example**  
```js
function updateSupabase() {
  const SUPABASE_URL = "{{URL}}";
  const SUPABASE_KEY = "{{KEY}}";
  const {updateRecords} = gas_supabase_library.supabase(SUPABASE_URL,SUPABASE_KEY);
  Logger.log(updateRecords('/table_name?name=eq.test',
    {
      'desc':'ok'
    }))
}
```
**Example**  
```js
function deleteSupabase() {
  const SUPABASE_URL = "{{URL}}";
  const SUPABASE_KEY = "{{KEY}}";
  const {deleteRecords} = gas_supabase_library.supabase(SUPABASE_URL,SUPABASE_KEY);
  Logger.log(deleteRecords('/table_name?name=eq.test'))
}
```

* [supabase(SUPABASE_URL, SUPABASE_KEY)](#supabase) ⇒ <code>Object</code> \| <code>Object</code> \| <code>Object</code> \| <code>Object</code> \| <code>Object</code>
    * [~getBaseUrl(url)](#supabase..getBaseUrl) ⇒ <code>string</code>
    * [~readRecords(url, headers)](#supabase..readRecords) ⇒ <code>Array</code> \| <code>Object</code>
    * [~insertRecords(url, data, headers)](#supabase..insertRecords) ⇒ <code>Array</code> \| <code>Object</code>
    * [~updateRecords(url, data, headers)](#supabase..updateRecords) ⇒ <code>Array</code> \| <code>Object</code>
    * [~deleteRecords(url, headers)](#supabase..deleteRecords) ⇒ <code>Array</code> \| <code>Object</code>

<a name="supabase..getBaseUrl"></a>

### supabase~getBaseUrl(url) ⇒ <code>string</code>
SupabaseにリクエストするためのURL取得

**Kind**: inner method of [<code>supabase</code>](#supabase)  
**Returns**: <code>string</code> - - エンドポイントURL  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | URL |

<a name="supabase..readRecords"></a>

### supabase~readRecords(url, headers) ⇒ <code>Array</code> \| <code>Object</code>
Supabaseのテーブルのデータを取得

**Kind**: inner method of [<code>supabase</code>](#supabase)  
**Returns**: <code>Array</code> \| <code>Object</code> - - レスポンスデータ  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | URL |
| headers | <code>Object</code> | リクエストヘッダ |

<a name="supabase..insertRecords"></a>

### supabase~insertRecords(url, data, headers) ⇒ <code>Array</code> \| <code>Object</code>
Supabaseのテーブルにデータを新規登録

**Kind**: inner method of [<code>supabase</code>](#supabase)  
**Returns**: <code>Array</code> \| <code>Object</code> - - レスポンスデータ  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | URL |
| data | <code>Object</code> | リクエストデータ |
| headers | <code>Object</code> | リクエストヘッダ |

<a name="supabase..updateRecords"></a>

### supabase~updateRecords(url, data, headers) ⇒ <code>Array</code> \| <code>Object</code>
Supabaseのテーブルのデータを更新

**Kind**: inner method of [<code>supabase</code>](#supabase)  
**Returns**: <code>Array</code> \| <code>Object</code> - - レスポンスデータ  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | URL |
| data | <code>Object</code> | リクエストデータ |
| headers | <code>Object</code> | リクエストヘッダ |

<a name="supabase..deleteRecords"></a>

### supabase~deleteRecords(url, headers) ⇒ <code>Array</code> \| <code>Object</code>
Supabaseのテーブルのデータを削除

**Kind**: inner method of [<code>supabase</code>](#supabase)  
**Returns**: <code>Array</code> \| <code>Object</code> - - レスポンスデータ  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | URL |
| headers | <code>Object</code> | リクエストヘッダ |

