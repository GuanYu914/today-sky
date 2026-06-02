/**
 * Geocoding API Types
 * 對應 netlify/functions/geocode.ts 的回應格式
 */

/**
 * 單一地點結果
 */
export interface GeocodeLocation {
  /** 地點名稱 */
  name: string;
  /** 各語言的地點名稱（如：zh, en, ja 等） */
  local_names?: Record<string, string>;
  /** 緯度 */
  lat: number;
  /** 經度 */
  lon: number;
  /** 國家代碼 (ISO 3166) */
  country: string;
  /** 州/省份名稱（如適用） */
  state?: string;
}

/**
 * Geocoding API 成功回應
 */
export interface GeocodeResponse {
  /** 搜尋結果陣列 */
  results: GeocodeLocation[];
  /** 結果數量 */
  count: number;
}

/**
 * API 錯誤回應
 */
export interface GeocodeError {
  /** 錯誤訊息 */
  error: string;
  /** 詳細訊息（可選） */
  message?: string;
}
