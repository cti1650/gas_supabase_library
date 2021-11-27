/**
 * SupabaseをGASで操作するための関数
 * @param {string} SUPABASE_URL - Supabase API URL
 * @param {string} SUPABASE_KEY - Supabase API Key
 * @return {Object} - 操作用関数
 * @return {Object} readRecords - レコード取得
 * @return {Object} insertRecords - レコード新規登録
 * @return {Object} updateRecords - レコード更新
 * @return {Object} deleteRecords - レコード削除
 * @example
 * function getSupabaseData (){
 *   const SUPABASE_URL = "{{URL}}";
 *   const SUPABASE_KEY = "{{KEY}}";
 *   const {readRecords} = gas_supabase_library.supabase(SUPABASE_URL,SUPABASE_KEY);
 *   Logger.log(readRecords('/table_name?select=*',{
 *     'Range': '0-9'
 *   }))
 * }
 * @example
 * function insertSupabase() {
 *   const SUPABASE_URL = "{{URL}}";
 *   const SUPABASE_KEY = "{{KEY}}";
 *   const {insertRecords} = gas_supabase_library.supabase(SUPABASE_URL,SUPABASE_KEY);
 *   Logger.log(insertRecords('/table_name',
 *     {
 *       'name':'test'
 *     }))
 * }
 * @example
 * function updateSupabase() {
 *   const SUPABASE_URL = "{{URL}}";
 *   const SUPABASE_KEY = "{{KEY}}";
 *   const {updateRecords} = gas_supabase_library.supabase(SUPABASE_URL,SUPABASE_KEY);
 *   Logger.log(updateRecords('/table_name?name=eq.test',
 *     {
 *       'desc':'ok'
 *     }))
 * }
 * @example
 * function deleteSupabase() {
 *   const SUPABASE_URL = "{{URL}}";
 *   const SUPABASE_KEY = "{{KEY}}";
 *   const {deleteRecords} = gas_supabase_library.supabase(SUPABASE_URL,SUPABASE_KEY);
 *   Logger.log(deleteRecords('/table_name?name=eq.test'))
 * }
 */
function supabase(SUPABASE_URL, SUPABASE_KEY) {
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
    Logger.log(url);
    Logger.log(base_options);
    return UrlFetchApp.fetch(getBaseUrl(url), base_options);
  };
  /**
   * SupabaseにリクエストするためのURL取得
   * @param {string} url - URL
   * @return {string} - エンドポイントURL
   */
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
  /**
   * Supabaseのテーブルのデータを取得
   * @param {string} url - URL
   * @param {Object} headers - リクエストヘッダ
   * @return {Array|Object} - レスポンスデータ
   */
  const readRecords = (url, headers = {}) => {
    const options = {
      headers: { ...default_options.headers, ...headers },
    };
    return access(url, options);
  };
  /**
   * Supabaseのテーブルにデータを新規登録
   * @param {string} url - URL
   * @param {Object} data - リクエストデータ
   * @param {Object} headers - リクエストヘッダ
   * @return {Array|Object} - レスポンスデータ
   */
  const insertRecords = (url, data = {}, headers = {}) => {
    const baseHeaders = { ...default_options.headers, ...headers };
    if (!Array.isArray(data)) {
      if (Object.keys(data).length) {
        baseHeaders.Prefer = "return=representation";
      }
    }
    const options = {
      method: "post",
      payload: data,
      headers: baseHeaders,
    };
    return access(url, options);
  };
  /**
   * Supabaseのテーブルのデータを更新
   * @param {string} url - URL
   * @param {Object} data - リクエストデータ
   * @param {Object} headers - リクエストヘッダ
   * @return {Array|Object} - レスポンスデータ
   */
  const updateRecords = (url, data = {}, headers = {}) => {
    const baseHeaders = { ...default_options.headers, ...headers };
    if (!Array.isArray(data)) {
      if (Object.keys(data).length) {
        baseHeaders.Prefer = "return=representation";
      }
    } else {
      data = JSON.stringify(data);
    }
    const options = {
      method: "patch",
      payload: data,
      headers: baseHeaders,
    };
    return access(url, options);
  };
  /**
   * Supabaseのテーブルのデータを削除
   * @param {string} url - URL
   * @param {Object} headers - リクエストヘッダ
   * @return {Array|Object} - レスポンスデータ
   */
  const deleteRecords = (url, headers = {}) => {
    const options = {
      method: "delete",
      headers: { ...default_options.headers, ...headers },
    };
    return access(url, options);
  };
  return { readRecords, insertRecords, updateRecords, deleteRecords };
}
