# 新規参加者向けガイド

## コードベースの概要
- 学習ロードマップ作成・閲覧ツール。国語・数学・英語の学習ルートをReactで表示します。
- 技術スタック: React 18, TypeScript, Tailwind CSS, Vite, Lucide React。
- 主なディレクトリ:
  - `src/components` 画面コンポーネント
  - `src/data` テンプレート・ルートデータ
  - `src/types` 型定義
  - `src/main.tsx` エントリーポイント

## 重要ポイント
- `App.tsx`で`home`→`category`→`select`→`view`の状態遷移を制御します。
- 編集機能は未実装（`onEdit={() => {}}`）。今後の拡張予定をREADMEの「今後の展開」で確認してください。
- `learningRoutes`は科目→カテゴリ→`RoadmapData`配列の多重連想配列で管理されます。
- 型定義は`src/types/index.ts`に集約されています。
- スタイリングはTailwind CSSと`components.css`の共通クラスを使用します。

## 次に学習・実装すると良い事項
1. **画面構造と状態管理の理解** — `App.tsx`を中心に遷移とコンポーネントの役割を把握する。
2. **データモデルとテンプレート** — `src/data`と`src/types`を参照し、新しい科目やルートを追加してみる。
3. **スタイリングとUIコンポーネント** — Tailwind CSSのユーティリティと共通スタイルを理解し、デザインを調整する。
4. **READMEの「今後の展開」** — ローカルストレージ対応やドラッグ&ドロップなど、今後の機能追加を確認する。
5. **開発環境の準備** — `npm install`で依存関係を整え、`npm run dev`で動作確認。

---
不明点があれば既存のドキュメント（`design-system.md`や`implementation-guidelines.md`）を参照しながら開発を進めてください。
