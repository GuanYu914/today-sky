import type { Handler, HandlerEvent, HandlerResponse } from '@netlify/functions';

interface GeocodeResult {
  name: string;
  local_names?: Record<string, string>;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

const handler: Handler = async (event: HandlerEvent): Promise<HandlerResponse> => {
  // 只允許 GET 請求
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  const { q } = event.queryStringParameters || {};

  // 驗證必要參數
  if (!q) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Missing required parameter: q (query)' }),
    };
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey) {
    console.error('OPENWEATHER_API_KEY is not set');
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'API key not configured' }),
    };
  }

  try {
    // 調用 OpenWeatherMap Geocoding API
    const apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(q)}&limit=5&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`OpenWeatherMap API error: ${response.status}`);
    }

    const data = (await response.json()) as GeocodeResult[];

    // 回傳結果
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=3600', // 快取 1 小時
      },
      body: JSON.stringify({
        results: data,
        count: data.length,
      }),
    };
  } catch (error) {
    console.error('Geocoding error:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: 'Failed to fetch geocoding data',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
    };
  }
};

export { handler };
