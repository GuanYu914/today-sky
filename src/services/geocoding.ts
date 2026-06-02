import axios from 'axios';
import type { GeocodeResponse, GeocodeError, GeocodeLocation } from '../types/geocoding';

/**
 * Geocoding Service
 * 透過 Netlify Function 代理調用 OpenWeatherMap Geocoding API
 */
class GeocodingService {
  // Netlify Functions 的標準路徑
  private readonly baseUrl = '/.netlify/functions';

  /**
   * 根據地點名稱搜尋地點
   * @param query 地點名稱（城市、區域或地標）
   * @returns 符合的地點列表
   * @throws 當 API 調用失敗時拋出錯誤
   */
  async searchLocation(query: string): Promise<GeocodeLocation[]> {
    if (!query.trim()) {
      throw new Error('搜尋查詢不能為空');
    }

    try {
      const response = await axios.get<GeocodeResponse>(`${this.baseUrl}/geocode`, {
        params: { q: query },
        timeout: 10000, // 10 秒超時
      });

      return response.data.results;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // 處理 API 回傳的錯誤
        if (error.response?.data) {
          const errorData = error.response.data as GeocodeError;
          throw new Error(errorData.error || '地點搜尋失敗', { cause: error });
        }

        // 處理網路錯誤
        if (error.code === 'ECONNABORTED') {
          throw new Error('請求超時，請檢查網路連線', { cause: error });
        }

        throw new Error('無法連接到伺服器', { cause: error });
      }

      // 其他未預期的錯誤
      throw new Error('發生未預期的錯誤', { cause: error });
    }
  }

  /**
   * 根據座標反向查詢地點名稱（未來功能）
   * @param lat 緯度
   * @param lon 經度
   * @returns 地點資訊
   */
  async reverseGeocode(lat: number, lon: number): Promise<GeocodeLocation | null> {
    // 反向地理編碼功能預留給未來需求（例如：從瀏覽器位置獲取地名）
    console.log('Reverse geocode not implemented yet', { lat, lon });
    return null;
  }
}

// 導出單例實例
export const geocodingService = new GeocodingService();
