# 学習ロードマップ閲覧ツール

国語・数学・英語の学習ロードマップを閲覧できるWebアプリケーションです。

## 🍎 Apple Design System

このプロジェクトには、AppleのHuman Interface Guidelinesに基づいたデザインシステムが実装されています。

### デザインシステムファイル

- **`apple-design-system.css`** - Appleデザインガイドラインに基づくCSS
- **`apple-design-demo.html`** - デザインシステムのデモページ
- **`apple-design-example.html`** - 基本実装例
- **`index-apple-design.html`** - React実装例
- **`design-system.md`** - デザインシステムドキュメント
- **`implementation-guidelines.md`** - 実装ガイドライン

### デザイン原則

- **Clarity（明確性）**: 情報の階層を明確にし、ユーザーが迷わないインターフェース
- **Deference（謙譲性）**: コンテンツを主役とし、UIは控えめに
- **Depth（深さ）**: 適切な影とレイヤーで情報の重要度を表現

### 主な特徴

- Appleシステムフォントの使用
- セマンティックカラーパレット
- レスポンシブデザイン
- アクセシビリティ対応
- モダンなアニメーション

## 🚀 使用方法

### Live Serverでの確認

1. **メインページ**: `index.html` - 元の学習ロードマップ閲覧ツール
2. **Apple Design Demo**: `apple-design-demo.html` - デザインシステムのデモ
3. **基本実装例**: `apple-design-example.html` - シンプルなHTML実装
4. **React実装例**: `index-apple-design.html` - Reactを使用した実装

### デザインシステムの確認

`apple-design-demo.html`を開くと以下の要素を確認できます：

- カラーパレット（科目別・ニュートラル）
- タイポグラフィ階層
- コンポーネント（ボタン・カード）
- レスポンシブデザイン
- アクセシビリティ機能

## 📁 ファイル構成

```
study rout/
├── index.html                    # メインアプリケーション
├── apple-design-demo.html        # Apple Design System デモ
├── apple-design-example.html     # 基本実装例
├── index-apple-design.html       # React実装例
├── apple-design-system.css       # Apple Design System CSS
├── design-system.md              # デザインシステムドキュメント
├── implementation-guidelines.md   # 実装ガイドライン
├── styles.css                    # 元のスタイル
└── README.md                     # このファイル
```

## 🎨 デザインシステムの特徴

### カラーパレット

- **プライマリカラー**: #007AFF (Apple Blue)
- **科目別カラー**: 
  - 国語: #FF3B30 (Red)
  - 数学: #007AFF (Blue)
  - 英語: #34C759 (Green)
- **ニュートラルカラー**: グレースケール（50-900）

### タイポグラフィ

- **フォントファミリー**: Appleシステムフォント優先
- **フォントサイズ**: 階層的なサイズシステム
- **フォントウェイト**: 用途に応じた適切なウェイト

### コンポーネント

- **学習カード**: ホバーエフェクト付きのカード
- **ボタン**: プライマリ・セカンダリボタン
- **ナビゲーション**: スティッキーヘッダー
- **グリッド**: レスポンシブグリッドシステム

## 🔧 技術仕様

### 対応ブラウザ

- Chrome (最新版)
- Safari (最新版)
- Firefox (最新版)
- Edge (最新版)

### アクセシビリティ

- キーボードナビゲーション対応
- スクリーンリーダー対応
- 十分なコントラスト比（4.5:1以上）
- 動きの軽減設定対応

### レスポンシブデザイン

- モバイルファーストアプローチ
- ブレークポイント: 640px, 768px, 1024px, 1280px
- フレキシブルグリッドシステム

## 📚 学習ロードマップ

### 国語
- 現代文
- 古文
- 漢文

### 数学
- 文系数学
- 理系数学

### 英語
- 実践的な英語力養成

## 🛠️ 開発環境

- HTML5
- CSS3 (CSS Variables使用)
- JavaScript (React)
- Live Server対応

## 📖 ドキュメント

詳細な実装ガイドラインとデザインシステムの仕様は以下のファイルで確認できます：

- `design-system.md` - デザインシステムの詳細仕様
- `implementation-guidelines.md` - 実装ガイドラインとベストプラクティス

## 🎯 今後の展開

- より多くの科目への対応
- 学習進捗の可視化機能
- パーソナライズ機能
- モバイルアプリ版の開発

---

*このプロジェクトは、AppleのHuman Interface Guidelinesの原則に基づいて設計されており、学習者の体験を最優先に考慮した設計となっています。* 