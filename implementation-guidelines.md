# Apple Design System 実装ガイドライン
*学習ロードマップ閲覧ツール用*

## 1. デザイン原則の適用

### 1.1 Clarity（明確性）
- **情報の階層**: 重要度に応じて視覚的な階層を作成
- **コントラスト**: 十分なコントラスト比を確保（最低4.5:1）
- **タイポグラフィ**: 読みやすさを最優先にしたフォント選択

### 1.2 Deference（謙譲性）
- **コンテンツファースト**: UIは控えめに、コンテンツを主役に
- **余白の活用**: 適切な余白でコンテンツを際立たせる
- **シンプルなデザイン**: 不要な装飾を排除

### 1.3 Depth（深さ）
- **適切な影**: 情報の重要度を表現する影の使用
- **レイヤー構造**: 視覚的な階層を表現
- **インタラクション**: 自然な動きとフィードバック

## 2. カラーシステムの実装

### 2.1 セマンティックカラーの使用
```css
/* 科目別カラー */
.japanese { color: var(--japanese-red); }
.math { color: var(--math-blue); }
.english { color: var(--english-green); }

/* レベル別カラー */
.level-basic { color: var(--level-basic); }
.level-standard { color: var(--level-standard); }
.level-advanced { color: var(--level-advanced); }
```

### 2.2 アクセシビリティの考慮
- 色だけで情報を伝えない
- 十分なコントラスト比を確保
- カラーブラインド対応

## 3. タイポグラフィの実装

### 3.1 フォントファミリー
```css
/* Appleシステムフォント優先 */
font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 
             'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
```

### 3.2 フォントサイズの階層
```css
/* 見出し */
h1 { font-size: var(--h1-size); font-weight: 700; }
h2 { font-size: var(--h2-size); font-weight: 600; }
h3 { font-size: var(--h3-size); font-weight: 600; }
h4 { font-size: var(--h4-size); font-weight: 500; }

/* ボディテキスト */
.body-large { font-size: var(--body-large); }
.body-medium { font-size: var(--body-medium); }
.body-small { font-size: var(--body-small); }
```

## 4. コンポーネント設計

### 4.1 カードコンポーネント
```css
.learning-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: var(--card-padding);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--gray-200);
  transition: all var(--transition-normal);
}

.learning-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--gray-300);
}
```

### 4.2 ボタンコンポーネント
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: var(--radius-md);
  font-weight: 500;
  transition: all var(--transition-fast);
}

.btn-primary {
  background: var(--primary-blue);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-blue-dark);
  transform: translateY(-1px);
}
```

### 4.3 ナビゲーションコンポーネント
```css
.nav-header {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--gray-200);
  position: sticky;
  top: 0;
  z-index: 100;
}
```

## 5. レスポンシブデザイン

### 5.1 ブレークポイント戦略
```css
/* モバイルファーストアプローチ */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

### 5.2 フレキシブルグリッド
```css
.cards-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .cards-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## 6. アニメーションとトランジション

### 6.1 パフォーマンス最適化
```css
/* GPU加速アニメーション */
.gpu-accelerated {
  transform: translateZ(0);
  will-change: transform;
}

/* 適切なトランジション */
.card {
  transition: all var(--transition-normal);
}

.button {
  transition: transform var(--transition-fast);
}
```

### 6.2 アクセシビリティ対応
```css
/* 動きの軽減設定 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 7. アクセシビリティ

### 7.1 キーボードナビゲーション
```css
/* フォーカスインジケーター */
.focus-visible {
  outline: 2px solid var(--primary-blue);
  outline-offset: 2px;
}

/* スキップリンク */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--primary-blue);
  color: white;
  padding: 8px;
  text-decoration: none;
  border-radius: var(--radius-md);
}

.skip-link:focus {
  top: 6px;
}
```

### 7.2 セマンティックHTML
```html
<!-- 適切な見出し構造 -->
<h1>メインタイトル</h1>
<h2>セクションタイトル</h2>
<h3>サブセクションタイトル</h3>

<!-- 適切なランドマーク -->
<header>ヘッダー</header>
<main>メインコンテンツ</main>
<footer>フッター</footer>
<nav>ナビゲーション</nav>
```

## 8. パフォーマンス最適化

### 8.1 CSS最適化
- CSS変数の活用
- 不要なスタイルの削除
- クリティカルCSSの特定

### 8.2 画像最適化
- WebP形式の使用
- 適切なサイズ設定
- 遅延読み込みの実装

## 9. 実装チェックリスト

### 9.1 デザイン一貫性
- [ ] カラーパレットの統一
- [ ] タイポグラフィの階層
- [ ] スペーシングの一貫性
- [ ] コンポーネントの再利用

### 9.2 アクセシビリティ
- [ ] コントラスト比の確認
- [ ] キーボードナビゲーション
- [ ] スクリーンリーダー対応
- [ ] フォーカスインジケーター

### 9.3 レスポンシブ対応
- [ ] モバイルファースト設計
- [ ] ブレークポイントの適切な設定
- [ ] タッチターゲットサイズ
- [ ] ビューポート設定

### 9.4 パフォーマンス
- [ ] CSS最適化
- [ ] 画像最適化
- [ ] アニメーション最適化
- [ ] 読み込み速度

## 10. 品質保証

### 10.1 テスト項目
- **視覚的テスト**: デザインの一貫性確認
- **機能テスト**: インタラクションの動作確認
- **アクセシビリティテスト**: 支援技術での利用確認
- **パフォーマンステスト**: 読み込み速度の測定

### 10.2 ブラウザ対応
- Chrome (最新版)
- Safari (最新版)
- Firefox (最新版)
- Edge (最新版)

## 11. メンテナンス

### 11.1 コード管理
- 明確なコメント
- 一貫した命名規則
- モジュラー設計
- バージョン管理

### 11.2 ドキュメント
- デザインシステムの文書化
- コンポーネント仕様書
- 実装ガイドライン
- 更新履歴

---

*このガイドラインは、AppleのHuman Interface Guidelinesの原則に基づいて作成されており、学習者の体験を最優先に考慮した設計となっています。* 