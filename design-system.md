# 学習ロードマップ閲覧ツール デザインシステム
*Apple Human Interface Guidelines に基づくデザインルール*

## 1. デザイン哲学

### 1.1 核心理念
- **Clarity（明確性）**: 情報の階層を明確にし、ユーザーが迷わないインターフェース
- **Deference（謙譲性）**: コンテンツを主役とし、UIは控えめに
- **Depth（深さ）**: 適切な影とレイヤーで情報の重要度を表現

### 1.2 学習体験の最適化
- 学習者の集中を妨げない清潔なデザイン
- 情報の段階的開示による認知負荷の軽減
- 直感的なナビゲーション

## 2. カラーパレット

### 2.1 プライマリカラー
```css
/* メインカラー - 学習の進歩を表現 */
--primary-blue: #007AFF;        /* アクション、リンク */
--primary-blue-dark: #0056CC;   /* ホバー状態 */
--primary-blue-light: #E3F2FD;  /* 背景、ハイライト */
```

### 2.2 セマンティックカラー
```css
/* 科目別カラー */
--japanese-red: #FF3B30;        /* 国語 - 情熱、創造性 */
--math-blue: #007AFF;           /* 数学 - 論理、精密性 */
--english-green: #34C759;       /* 英語 - 国際性、成長 */

/* レベル別カラー */
--level-basic: #FF9500;         /* 基礎レベル */
--level-standard: #007AFF;      /* 標準レベル */
--level-advanced: #AF52DE;      /* 上級レベル */
--level-expert: #FF3B30;        /* 専門レベル */
```

### 2.3 ニュートラルカラー
```css
/* グレースケール */
--gray-50: #F9FAFB;    /* 背景 */
--gray-100: #F3F4F6;   /* セカンダリ背景 */
--gray-200: #E5E7EB;   /* ボーダー */
--gray-300: #D1D5DB;   /* プレースホルダー */
--gray-400: #9CA3AF;   /* 無効状態 */
--gray-500: #6B7280;   /* セカンダリテキスト */
--gray-600: #4B5563;   /* ボディテキスト */
--gray-700: #374151;   /* 見出し */
--gray-800: #1F2937;   /* プライマリテキスト */
--gray-900: #111827;   /* 強調テキスト */
```

## 3. タイポグラフィ

### 3.1 フォントファミリー
```css
/* Appleシステムフォント優先 */
font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 
             'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
```

### 3.2 フォントサイズ階層
```css
/* 見出し */
--h1-size: 2.5rem;     /* 40px - メインヘッダー */
--h2-size: 2rem;       /* 32px - セクションヘッダー */
--h3-size: 1.5rem;     /* 24px - サブセクション */
--h4-size: 1.25rem;    /* 20px - カードタイトル */

/* ボディテキスト */
--body-large: 1.125rem; /* 18px - リード文 */
--body-medium: 1rem;    /* 16px - 通常テキスト */
--body-small: 0.875rem; /* 14px - キャプション */
--body-xs: 0.75rem;     /* 12px - ラベル */
```

### 3.3 フォントウェイト
```css
--font-light: 300;      /* 軽量 - 装飾的要素 */
--font-regular: 400;    /* 通常 - ボディテキスト */
--font-medium: 500;     /* 中程度 - 強調テキスト */
--font-semibold: 600;   /* 半太字 - 見出し */
--font-bold: 700;       /* 太字 - 重要見出し */
```

## 4. スペーシング

### 4.1 基本スペーシング
```css
/* 8pxベースのスペーシングシステム */
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
--space-3xl: 4rem;     /* 64px */
```

### 4.2 コンポーネントスペーシング
```css
/* カード内パディング */
--card-padding: 2rem;  /* 32px */

/* セクション間マージン */
--section-margin: 3rem; /* 48px */

/* ナビゲーション高さ */
--nav-height: 4rem;     /* 64px */
```

## 5. ボーダーラディウス

### 5.1 角丸の階層
```css
--radius-sm: 0.375rem;  /* 6px - 小さな要素 */
--radius-md: 0.5rem;    /* 8px - ボタン、入力フィールド */
--radius-lg: 0.75rem;   /* 12px - カード */
--radius-xl: 1rem;      /* 16px - モーダル */
--radius-full: 9999px;  /* 円形要素 */
```

## 6. シャドウ

### 6.1 影の階層
```css
/* 微細な影 */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

/* 標準的な影 */
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
             0 2px 4px -1px rgba(0, 0, 0, 0.06);

/* 強調された影 */
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
             0 4px 6px -2px rgba(0, 0, 0, 0.05);

/* 大きな影 */
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
             0 10px 10px -5px rgba(0, 0, 0, 0.04);
```

## 7. アニメーション

### 7.1 トランジション
```css
/* 標準的なトランジション */
--transition-fast: 150ms ease-out;
--transition-normal: 250ms ease-out;
--transition-slow: 350ms ease-out;

/* イージング関数 */
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### 7.2 ホバーエフェクト
```css
/* カードホバー */
.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
}

/* ボタンホバー */
.button:hover {
  transform: scale(1.02);
  transition: transform var(--transition-fast);
}
```

## 8. レイアウト

### 8.1 グリッドシステム
```css
/* コンテナ */
--container-max-width: 72rem;  /* 1152px */
--container-padding: 1.5rem;   /* 24px */

/* ブレークポイント */
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
```

### 8.2 カードレイアウト
```css
/* カード基本スタイル */
.card {
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--gray-200);
  transition: all var(--transition-normal);
}

/* カードホバー */
.card:hover {
  box-shadow: var(--shadow-lg);
  border-color: var(--gray-300);
}
```

## 9. コンポーネント

### 9.1 ボタン
```css
/* プライマリボタン */
.btn-primary {
  background: var(--primary-blue);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  font-weight: var(--font-medium);
  transition: all var(--transition-fast);
}

.btn-primary:hover {
  background: var(--primary-blue-dark);
  transform: translateY(-1px);
}

/* セカンダリボタン */
.btn-secondary {
  background: transparent;
  color: var(--primary-blue);
  border: 1px solid var(--primary-blue);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  font-weight: var(--font-medium);
}
```

### 9.2 ナビゲーション
```css
/* ヘッダーナビゲーション */
.nav-header {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--gray-200);
  height: var(--nav-height);
}

/* パンくずナビゲーション */
.breadcrumb {
  color: var(--gray-500);
  font-size: var(--body-small);
}

.breadcrumb a {
  color: var(--primary-blue);
  text-decoration: none;
}
```

### 9.3 カード
```css
/* 学習カード */
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
}

/* カードアイコン */
.card-icon {
  width: 4rem;
  height: 4rem;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: transform var(--transition-normal);
}

.learning-card:hover .card-icon {
  transform: scale(1.1);
}
```

## 10. アクセシビリティ

### 10.1 コントラスト比
- テキスト: 最低4.5:1のコントラスト比
- 大きなテキスト: 最低3:1のコントラスト比
- UI要素: 最低3:1のコントラスト比

### 10.2 フォーカス状態
```css
/* フォーカスインジケーター */
.focus-visible {
  outline: 2px solid var(--primary-blue);
  outline-offset: 2px;
}
```

### 10.3 キーボードナビゲーション
- すべてのインタラクティブ要素はキーボードでアクセス可能
- 論理的なタブ順序
- スキップリンクの提供

## 11. レスポンシブデザイン

### 11.1 ブレークポイント戦略
```css
/* モバイルファーストアプローチ */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

### 11.2 フレキシブルグリッド
```css
/* カードグリッド */
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

## 12. パフォーマンス

### 12.1 最適化原則
- CSSの最小化と圧縮
- 重要なCSSのインライン化
- 非重要なCSSの遅延読み込み
- 画像の最適化とWebP形式の使用

### 12.2 アニメーション最適化
```css
/* GPU加速アニメーション */
.gpu-accelerated {
  transform: translateZ(0);
  will-change: transform;
}
```

## 13. 実装ガイドライン

### 13.1 CSS変数の使用
```css
/* デザイントークンの定義 */
:root {
  /* カラー */
  --primary-blue: #007AFF;
  
  /* スペーシング */
  --space-md: 1rem;
  
  /* タイポグラフィ */
  --font-size-lg: 1.125rem;
}
```

### 13.2 コンポーネントベース設計
- 再利用可能なコンポーネントの作成
- 一貫した命名規則
- モジュラーCSSの採用

### 13.3 メンテナンス性
- 明確なコメント
- 論理的なファイル構造
- バージョン管理の活用

---

*このデザインシステムは、AppleのHuman Interface Guidelinesの原則に基づいて作成されており、学習者の体験を最優先に考慮した設計となっています。* 