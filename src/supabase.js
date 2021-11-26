/**
 * SupabaseをGASで操作するための関数
 * @param {string} SUPABASE_URL - Supabase API URL
 * @param {string} SUPABASE_KEY - Supabase API Key
 * @return {Object} - 操作用関数
 * @example
 * function getSupabaseData (){
 *   const SUPABASE_URL = "{{URL}}";
 *   const SUPABASE_KEY = "{{KEY}}";
 *   const {readRecords} = supabase(SUPABASE_URL,SUPABASE_KEY);
 *   Logger.log(readRecords('/table_name?select=*',{
 *     'Range': '0-9'
 *   }))
 * }
 */
const supabase = (SUPABASE_URL, SUPABASE_KEY) => {
  const default_headers = {
    apikey: SUPABASE_KEY,
    Authorization: "Bearer " + SUPABASE_KEY,
  };
  const default_options = {
    method: "get",
    headers: default_headers,
    muteHttpExceptions: true,
  };
  const access = (url, options = {}) => {
    const base_options = {
      ...default_options,
      ...options,
    };
    return UrlFetchApp.fetch(getBaseUrl(url), base_options);
  };
  const getBaseUrl = (url) => {
    if (~SUPABASE_URL.indexOf(".supabase.co/rest/v1/")) {
      if (~url.indexOf(SUPABASE_URL + "/rest/v1/")) {
        return url;
      } else {
        return SUPABASE_URL + url;
      }
    } else if (~SUPABASE_URL.indexOf(".supabase.co/rest/v1")) {
      if (~url.indexOf(SUPABASE_URL + "/rest/v1")) {
        return url;
      } else {
        return SUPABASE_URL + "/" + url;
      }
    } else if (~SUPABASE_URL.indexOf("supabase.co")) {
      if (~url.indexOf(SUPABASE_URL)) {
        return url;
      } else {
        return SUPABASE_URL + "/rest/v1/" + url;
      }
    } else {
      return url;
    }
  };
  const readRecords = (url, headers = {}) => {
    const options = {
      headers: { ...default_options.headers, ...headers },
    };
    return access(url, options);
  };
  const insertRecords = (url, data = {}, headers = {}) => {
    const options = {
      method: "post",
      payload: data,
      headers: { ...default_options.headers, ...headers },
    };
    return access(url, options);
  };
  const updateRecords = (url, data = {}, headers = {}) => {
    const options = {
      method: "patch",
      payload: data,
      headers: { ...default_options.headers, ...headers },
    };
    return access(url, options);
  };
  const deleteRecords = (url, data = {}, headers = {}) => {
    const options = {
      method: "delete",
      headers: { ...default_options.headers, ...headers },
    };
    return access(url, options);
  };
  return { readRecords, insertRecords, updateRecords, deleteRecords };
};
