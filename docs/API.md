<a name="supabase"></a>

## supabase(SUPABASE_URL, SUPABASE_KEY) ⇒ <code>Object</code>
SupabaseをGASで操作するための関数

**Kind**: global function  
**Returns**: <code>Object</code> - - 操作用関数  

| Param | Type | Description |
| --- | --- | --- |
| SUPABASE_URL | <code>string</code> | Supabase API URL |
| SUPABASE_KEY | <code>string</code> | Supabase API Key |

**Example**  
```js
function getSupabaseData (){
  const SUPABASE_URL = "{{URL}}";
  const SUPABASE_KEY = "{{KEY}}";
  const {readRecords} = supabase(SUPABASE_URL,SUPABASE_KEY);
  Logger.log(readRecords('/table_name?select=*',{
    'Range': '0-9'
  }))
}
```
