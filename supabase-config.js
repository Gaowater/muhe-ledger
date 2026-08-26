// 公开版无内置 Supabase 配置（浏览器 / 更新包使用）
// 真实配置仅存在于 APK 内置版 assets/supabase-config.js，避免泄露到公开仓库
// window.__BUILTIN_SUPABASE__ 未定义 → 页面兜底逻辑跳过 → 用户手动填写同步设置
