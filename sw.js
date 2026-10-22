// 前の場所（いちばん上のフォルダ）の service worker を片付ける
// 社員用は app/、整備工場用は shop/ に分けた（それぞれのフォルダの sw.js が働く）
// 前の版を開いたことのある端末では、ここにあった service worker が古いファイルを保存している。
// ブラウザがこのファイルを読み直したとき：保存していた古いファイル（sharyo-v○○）を消して、自分を外す。画面の読み込みには何もしない
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil((async () => {
  const keys = await caches.keys();
  await Promise.all(keys.filter(k => /^sharyo-v\d+$/.test(k)).map(k => caches.delete(k)));
  await self.registration.unregister();
})()));
