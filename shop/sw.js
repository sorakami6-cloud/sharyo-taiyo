// 整備工場用アプリ（shop/）の service worker。この shop/ フォルダの中だけで働く。中身は ../sw-core.js（社員用と同じ）
self.SW = {
  cache: "taiyo-shop-v31", // 版を上げると、スマホに保存した古い画面・アイコンを入れ替える（app/app.js の APP_VERSION と同じ番号）
  prefix: "taiyo-shop-",   // この名前で始まる古い保存だけを消す
  title: "おまかせ車庫番 整備", // 通知の題（題がないとき）
  icon: "../icons/shop-icon-192.png?v=1",
  shell: [
    "./", "./index.html", "./shop.css", "./shop.js", "./manifest.webmanifest",
    "../firebase-config.js", "../company-config.js",
    "../icons/shop-icon-192.png?v=1", "../icons/shop-icon-512.png?v=1", "../icons/shop-icon-maskable-192.png?v=1", "../icons/shop-icon-maskable-512.png?v=1",
    "../icons/shop-apple-touch-icon.png?v=1", "../icons/shop-favicon-32.png?v=1",
  ],
};
importScripts("../sw-core.js");
