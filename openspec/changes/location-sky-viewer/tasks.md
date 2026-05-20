## 1. 專案設定

- [x] 1.1 使用選定的框架初始化 web 專案（React/Vue/Svelte）
- [x] 1.2 設定建置工具和開發伺服器
- [x] 1.3 準備環境變數文件範例（.env.example）說明需要哪些 API keys（僅供 Netlify Functions 使用）
- [x] 1.4 安裝相依套件（weather API client、geocoding library、sun position calculator）
- [x] 1.5 建立基本專案結構（components、services、styles 目錄）
- [ ] 1.6 安裝並設定 TailwindCSS
- [ ] 1.7 設定 ESLint 與 TypeScript ESLint（如使用 TypeScript）
- [ ] 1.8 設定 Prettier 並整合至 ESLint
- [ ] 1.9 設定單元測試框架（Vitest 或 Jest）與 Testing Library
- [ ] 1.10 設定端對端測試框架（Playwright 或 Cypress）
- [ ] 1.11 設定 Husky 與 lint-staged 進行 pre-commit 檢查
- [ ] 1.12 建立測試覆蓋率報告設定（目標 80%+）
- [ ] 1.13 建立 netlify.toml 部署設定檔模板
- [ ] 1.14 建立 netlify/functions/ 目錄結構
- [ ] 1.15 安裝 Netlify Functions 開發相依套件

## 2. 地點選擇功能

- [ ] 2.1 建立 Netlify Function：geocoding API 代理
- [ ] 2.2 建立地點搜尋輸入元件
- [ ] 2.3 前端調用 Netlify Function 進行地點搜尋（而非直接調用 API）
- [ ] 2.4 實作帶有區別資訊的搜尋結果顯示
- [ ] 2.5 新增地點選擇處理器
- [ ] 2.6 實作瀏覽器地理位置偵測與權限處理
- [ ] 2.7 建立最愛列表 UI 元件
- [ ] 2.8 實作 localStorage 服務以儲存/載入最愛
- [ ] 2.9 新增「加入最愛」功能
- [ ] 2.10 實作「從最愛選擇」功能

## 3. 天空顯示功能

- [ ] 3.1 建立 Netlify Function：weather API 代理
- [ ] 3.2 建立 Netlify Function：太陽/月亮位置計算（或 API 代理）
- [ ] 3.3 建立天氣資料服務（調用 Netlify Functions）
- [ ] 3.4 實作太陽/月亮位置計算函式（前端快取邏輯）
- [ ] 3.5 建立基於時段的天空色彩漸層生成器
- [ ] 3.6 實作雲層覆蓋渲染（CSS 或 canvas）
- [ ] 3.7 新增天氣狀況與視覺風格的映射
- [ ] 3.8 建立具響應式設計的主要天空顯示元件
- [ ] 3.9 實作地點和時間脈絡顯示
- [ ] 3.10 新增錯誤處理和備援天空狀態
- [ ] 3.11 測試不同螢幕尺寸的天空渲染

## 4. 桌布模式功能

- [ ] 4.1 建立桌布模式切換 UI
- [ ] 4.2 實作全螢幕天空視圖並隱藏控制項
- [ ] 4.3 新增 ESC 鍵和滑鼠移動的離開處理器
- [ ] 4.4 實作可設定間隔的自動更新計時器
- [ ] 4.5 建立天空更新的平滑過渡動畫
- [ ] 4.6 建構更新頻率設定的桌布設定面板
- [ ] 4.7 新增桌布偏好設定的 localStorage 持久化
- [ ] 4.8 實作分頁可見度偵測以暫停更新
- [ ] 4.9 新增資源使用最佳化（快取、節流）

## 5. 整合與優化

- [ ] 5.1 將所有元件連接到主應用程式流程
- [ ] 5.2 為 API 呼叫新增載入狀態和轉圈動畫
- [ ] 5.3 實作 API 失敗的完整錯誤訊息
- [ ] 5.4 新增無障礙功能（ARIA labels、鍵盤導航）
- [ ] 5.5 效能最佳化（lazy loading、code splitting）
- [ ] 5.6 建立 netlify.toml 設定檔
- [ ] 5.7 在 Netlify 建立專案並連接 Git repository
- [ ] 5.8 設定 Netlify 環境變數（API keys）
- [ ] 5.9 設定自動部署流程（Git push → 測試 → 部署）
- [ ] 5.10 測試跨瀏覽器相容性（Chrome、Firefox、Safari）
- [ ] 5.11 建立使用者文件或說明區段

## 6. 測試與驗證

- [ ] 6.1 撰寫 Netlify Functions 的單元測試
- [ ] 6.2 撰寫天氣資料服務的單元測試
- [ ] 6.3 撰寫時間計算函式的單元測試
- [ ] 6.4 撰寫色彩生成邏輯的單元測試
- [ ] 6.5 撰寫主要元件的單元測試
- [ ] 6.6 撰寫地點搜尋流程的端對端測試
- [ ] 6.7 撰寫最愛管理的端對端測試
- [ ] 6.8 撰寫桌布模式切換的端對端測試
- [ ] 6.9 撰寫 API 失敗情境的端對端測試
- [ ] 6.10 驗證 API keys 未暴露在前端代碼中
- [ ] 6.11 驗證測試覆蓋率達到 80% 以上
- [ ] 6.12 在不同瀏覽器執行端對端測試（Chrome、Firefox、Safari）
- [ ] 6.13 執行行動裝置上的端對端測試
- [ ] 6.14 在 Netlify 預覽環境測試所有功能
- [ ] 6.15 驗證 production 環境的環境變數設定（僅在後端）
- [ ] 6.16 測試 Netlify Functions 在 production 環境運作正常
- [ ] 6.17 測試 Netlify 自動部署流程
- [ ] 6.18 與目標使用者進行使用者驗收測試
- [ ] 6.19 執行 ESLint 檢查確保無警告
- [ ] 6.20 執行 Prettier 檢查確保格式一致
