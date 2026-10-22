# おまかせ車庫番（株式会社TAIYO様）

会社の車（トラック・バン・普通車）の **空き・予約・返却・修理・車検・点検** を、
現場の人はスマホで、事務所は PC で、同じ情報を見ながら管理するアプリです。
どの端末で変えても、すぐ全員の画面に出ます。

## できること

- **社員用**（app/）：スマホで空いている車を見る・予約する・返却する（置いた駐車場を選ぶ）・修理を頼む・乗る前の点検。PC で今日の状況、空き表（4週間）、車検が近い車、修理依頼、点検表（A4横で印刷）、車の登録、設定
- **整備工場用**（shop/）：修理・車検で預かる車
- いちばん上のページ（index.html）は、社員用と整備工場用を選ぶだけのページです

## きまり：1アプリ＝1フォルダ

ホーム画面に入れるアプリは、1つずつ別のフォルダに置きます（社員用は app/、整備工場用は shop/）。
アプリの範囲（manifest の scope）が重なると、片方しかアプリとして入れられないことがあるためです。
2つのアプリで使うもの（会社ごとの設定・つなぎ先・アイコン・service worker の中身）は、いちばん上に置きます。

## 新しい会社のアプリを作るとき

1. **company-config.js** を書きかえる（会社の名前・整備工場の名前・最初の駐車場など。書きかえ方はファイルの最初に書いてあります）
2. **firebase-config.js** を、その会社の Firebase の値に書きかえる
3. **firestore.rules** と **storage.rules** を、その会社の Firebase に反映する

## ファイル

| ファイル | 中身 |
|---|---|
| app/（index.html ・ app.js ・ style.css ・ manifest.webmanifest ・ sw.js） | 社員用のアプリ（スマホ版・PC版） |
| shop/（index.html ・ shop.js ・ shop.css ・ manifest.webmanifest ・ sw.js） | 整備工場用のアプリ |
| index.html | いちばん上のページ（社員用と整備工場用を選ぶ。前のアドレスから来たときは新しい場所へ移す） |
| shop.html | 前の整備工場用のアドレス（shop/ へ移す） |
| company-config.js | 会社ごとの設定（新しい会社は、ここを書きかえる） |
| firebase-config.js | つなぎ先（どの Firebase を使うか） |
| icons/ | アイコン（社員用と、赤い「整備」の帯の整備工場用） |
| sw-core.js | オフラインのしくみと通知の中身（app/sw.js・shop/sw.js から読む） |
| sw.js | 前の場所のオフラインのしくみを片付けるためのもの |
| firestore.rules ・ storage.rules | データと写真の決まり（だれが何を書けるか） |
| functions/ | プッシュ通知（車検・返却予定日・修理依頼など） |

## しくみ

- HTML・CSS・JavaScript（フレームワークは使っていない）
- Firebase：Firestore（データ）・Storage（写真）・匿名ログイン・Cloud Functions（通知）
