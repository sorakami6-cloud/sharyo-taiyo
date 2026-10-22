// 社用車管理アプリ Firebase 設定（プロジェクト: sharyo-taiyo　株式会社TAIYO様）
// Firebase JS SDK v12.19.0（CDN / script type="module" で読み込む）
export const firebaseConfig = {
  apiKey: "AIzaSyATHSDqWR_xnNqp6c3b1lHSHED3Z8_Nipk",
  authDomain: "sharyo-taiyo.firebaseapp.com",
  projectId: "sharyo-taiyo",
  storageBucket: "sharyo-taiyo.firebasestorage.app",
  messagingSenderId: "316014044264",
  appId: "1:316014044264:web:d53ac673d9879d8d3187dd"
};
export const FIREBASE_SDK_VERSION = "12.19.0";
// プッシュ通知の公開鍵（Firebase コンソール → プロジェクトの設定 → Cloud Messaging → ウェブプッシュ証明書 の「鍵ペア」）
// 空のあいだは通知の機能を出さない（TAIYO様は通知なし。鍵は Firebase に作ってあるので、使うときはここに入れる）
export const VAPID_KEY = "";
