# Netlify Functions

此目錄包含 Netlify Serverless Functions，用於安全地代理 API 請求。

## 為什麼需要 Netlify Functions？

1. **隱藏 API Keys** - 將 API 金鑰儲存在後端環境變數中，不暴露在前端代碼
2. **避免 CORS 問題** - 作為中間層代理 API 請求
3. **請求限制與快取** - 在後端實作速率限制和快取機制

## 目錄結構

```
netlify/functions/
├── README.md           # 本文件
├── weather.ts          # 天氣 API 代理（待實作）
├── geocoding.ts        # 地理編碼 API 代理（待實作）
└── sun-position.ts     # 太陽/月亮位置計算（待實作）
```

## 開發指南

### 基本 Function 結構

```typescript
import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // 1. 驗證請求方法
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  // 2. 取得環境變數
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'API key not configured' }),
    };
  }

  // 3. 處理請求
  try {
    const response = await fetch(`https://api.example.com/data?key=${apiKey}`);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data' }),
    };
  }
};
```

### 環境變數設定

在 Netlify Dashboard 中設定：

1. 進入 Site settings → Environment variables
2. 新增以下變數：
   - `WEATHER_API_KEY` - 天氣 API 金鑰
   - `GEOCODING_API_KEY` - 地理編碼 API 金鑰

### 本地測試

```bash
# 安裝 Netlify CLI
npm install -g netlify-cli

# 建立本地環境變數檔案
# .env （不要提交到 Git）
WEATHER_API_KEY=your_key_here
GEOCODING_API_KEY=your_key_here

# 啟動本地開發伺服器
netlify dev
```

### 調用 Function

前端調用範例：

```typescript
// 調用 /.netlify/functions/weather
const response = await fetch('/.netlify/functions/weather?lat=25.03&lon=121.56');
const data = await response.json();
```

## 待實作的 Functions

1. **weather.ts** - 代理天氣 API 請求
2. **geocoding.ts** - 代理地理編碼搜尋
3. **sun-position.ts** - 計算太陽/月亮位置

這些 Function 將在後續任務中實作。
