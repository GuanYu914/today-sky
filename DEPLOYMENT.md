# Netlify 部署指南

本指南說明如何將 Today Sky 應用程式部署到 Netlify。

## 前置準備

1. **Netlify 帳號** - 在 [netlify.com](https://www.netlify.com/) 註冊帳號
2. **Git Repository** - 將專案推送到 GitHub、GitLab 或 Bitbucket
3. **API Keys** - 取得所需的 API 金鑰：
   - OpenWeatherMap API Key（[申請連結](https://openweathermap.org/api)）

## 部署步驟

### 1. 連接 Repository

1. 登入 Netlify Dashboard
2. 點擊 "Add new site" → "Import an existing project"
3. 選擇您的 Git provider（GitHub/GitLab/Bitbucket）
4. 授權 Netlify 存取您的 repository
5. 選擇 `today-sky` repository

### 2. 設定建置參數

Netlify 會自動偵測 `netlify.toml` 設定檔，應該會看到：

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Functions directory**: `netlify/functions`

確認這些設定正確後，點擊 "Deploy site"。

### 3. 設定環境變數

在網站部署後：

1. 進入 Site settings → Environment variables
2. 點擊 "Add a variable"
3. 新增以下變數：

   ```
   OPENWEATHER_API_KEY=your_actual_api_key_here
   ```

   如果使用其他地理編碼服務，也可以新增：

   ```
   GEOCODING_API_KEY=your_geocoding_api_key_here
   ```

4. 點擊 "Save"
5. 觸發重新部署：Deploys → Trigger deploy → Deploy site

### 4. 自訂網域（可選）

1. 進入 Site settings → Domain management
2. 點擊 "Add custom domain"
3. 輸入您的網域名稱
4. 按照指示設定 DNS 記錄

## 自動部署

配置完成後，每次推送到主分支時，Netlify 會自動：

1. ✅ 拉取最新代碼
2. ✅ 執行 `npm install`
3. ✅ 執行 `npm run build`
4. ✅ 執行測試（如果配置了）
5. ✅ 部署到 CDN
6. ✅ 部署 Netlify Functions

## 部署預覽

對於 Pull Request，Netlify 會自動建立部署預覽：

- 每個 PR 都會有獨立的預覽 URL
- 可以在合併前測試變更
- 預覽環境使用相同的環境變數

## 本地測試 Netlify Functions

在部署前測試 Functions：

```bash
# 安裝 Netlify CLI
npm install -g netlify-cli

# 建立本地 .env 檔案（參考 .env.example）
cp .env.example .env
# 編輯 .env 並填入實際的 API keys

# 啟動本地開發伺服器（包含 Functions）
netlify dev
```

這會在 `http://localhost:8888` 啟動應用程式，Functions 可在 `/.netlify/functions/*` 存取。

## 監控與除錯

### 查看建置日誌

1. 進入 Netlify Dashboard
2. 選擇您的網站
3. 點擊 "Deploys"
4. 點擊特定部署查看詳細日誌

### 查看 Function 日誌

1. 進入 Site settings → Functions
2. 點擊特定 Function
3. 查看執行日誌和錯誤訊息

### 常見問題

**建置失敗**

- 檢查 `package.json` 中的 dependencies 是否完整
- 確認 Node.js 版本符合要求（在 `netlify.toml` 中設定）

**Function 錯誤**

- 確認環境變數已正確設定
- 檢查 Function 日誌中的錯誤訊息
- 使用 `netlify dev` 在本地測試

**環境變數未生效**

- 新增或修改環境變數後，需要手動觸發重新部署
- 確認變數名稱拼寫正確

## 效能優化

Netlify 會自動提供：

- ✅ 全球 CDN 分發
- ✅ 自動 HTTPS
- ✅ 資源壓縮（Gzip/Brotli）
- ✅ 圖片優化
- ✅ 快取優化

額外的優化設定已包含在 `netlify.toml` 中。

## 相關資源

- [Netlify 官方文檔](https://docs.netlify.com/)
- [Netlify Functions 指南](https://docs.netlify.com/functions/overview/)
- [環境變數設定](https://docs.netlify.com/environment-variables/overview/)
