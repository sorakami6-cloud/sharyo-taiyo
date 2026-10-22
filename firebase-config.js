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
// 空のあいだは通知の機能を出さない（2026-10-22 作成）
export const VAPID_KEY = "BPujR-D3iT32pKOW-JkfI3PdomWoRnOy4xibPUqhVXJ00W7gqo6j4UlSMLKQqk_NwQgWLEFoxs8cLyY72gDC8n4";
