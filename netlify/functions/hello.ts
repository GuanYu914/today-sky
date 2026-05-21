import type { Handler, HandlerEvent } from '@netlify/functions';

/**
 * Hello World Netlify Function
 * 這是一個範例 Function，用於驗證 Netlify Functions 設定是否正確
 *
 * 測試方式：
 * 1. 本地：netlify dev，然後訪問 http://localhost:8888/.netlify/functions/hello
 * 2. 部署後：https://your-site.netlify.app/.netlify/functions/hello
 */
export const handler: Handler = async (event: HandlerEvent) => {
  // 只允許 GET 請求
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // 從查詢參數獲取名字
    const name = event.queryStringParameters?.name || 'World';

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // 允許 CORS
      },
      body: JSON.stringify({
        message: `Hello, ${name}!`,
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development',
      }),
    };
  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
      }),
    };
  }
};
