// 社員用アプリ（app/）の service worker。この app/ フォルダの中だけで働く。中身は ../sw-core.js（整備工場用と同じ）
self.SW = {
  cache: "taiyo-app-v31", // 版を上げると、スマホに保存した古い画面・アイコンを入れ替える（app.js の APP_VERSION と同じ番号）
  prefix: "taiyo-app-",   // この名前で始まる古い保存だけを消す
  title: "社用車",          // 通知の題（題がないとき）
  icon: "../icons/icon-192.png?v=2",
  shell: [
    "./", "./index.html", "./style.css", "./app.js", "./manifest.webmanifest",
    "../firebase-config.js", "../company-config.js",
    "../icons/icon-192.png?v=2", "../icons/icon-512.png?v=2", "../icons/icon-maskable-192.png?v=3", "../icons/icon-maskable-512.png?v=3",
    "../icons/apple-touch-icon.png?v=2", "../icons/favicon-32.png?v=2",
  ],
};
importScripts("../sw-core.js");
