// 科目データ
export const subjects = [
  {
    id: 'japanese',
    name: '国語の学習ロードマップ',
    description: '読解力と表現力を身につける学習計画の詳細',
    color: 'var(--japanese-red)',
    bgColor: 'var(--japanese-red)',
    icon: '📚'
  },
  {
    id: 'math',
    name: '数学の学習ロードマップ',
    description: '論理的思考と計算力を養う学習計画の詳細',
    color: 'var(--math-blue)',
    bgColor: 'var(--math-blue)',
    icon: '🧮'
  },
  {
    id: 'english',
    name: '英語の学習ロードマップ',
    description: '実践的な英語力を身につける学習計画の詳細',
    color: 'var(--english-green)',
    bgColor: 'var(--english-green)',
    icon: '🌍'
  }
];

// 国語カテゴリ
export const japaneseCategories = [
  {
    id: 'modern',
    name: '現代文',
    description: '現代の文章を読解し、論理的思考力を養う',
    icon: '📝',
    color: 'var(--japanese-red)'
  },
  {
    id: 'classical',
    name: '古文',
    description: '古典文学を読み解き、日本の文化と歴史を学ぶ',
    icon: '📜',
    color: '#FF9500'
  },
  {
    id: 'chinese',
    name: '漢文',
    description: '漢文の読解を通じて、東洋の思想と文化を理解する',
    icon: '🏛️',
    color: '#EAB308'
  }
];

// 数学カテゴリ
export const mathCategories = [
  {
    id: 'humanities',
    name: '文系数学',
    description: '文系学部向けの数学学習',
    icon: '📊',
    color: 'var(--math-blue)'
  },
  {
    id: 'science',
    name: '理系数学',
    description: '理系学部向けの数学学習',
    icon: '🔬',
    color: '#8B5CF6'
  }
];

// 英語カテゴリ
export const englishCategories = [
  {
    id: 'exam',
    name: '入試英語',
    description: '大学入試に特化した英語学習',
    icon: '📚',
    color: 'var(--english-green)'
  }
];

// カテゴリマッピング
export const categoryMapping = {
  japanese: japaneseCategories,
  math: mathCategories,
  english: englishCategories
};

// UI テキスト
export const UI_TEXT = {
  APP_TITLE: '学習ロードマップ閲覧ツール',
  BACK_TO_HOME: '← ホームに戻る',
  BACK_TO_CATEGORY: '← カテゴリ選択に戻る',
  BACK_TO_SELECT: '← 学習ルート選択に戻る',
  FOOTER_TEXT: '学習ロードマップ閲覧ツール - 国語・数学・英語の学習計画を閲覧',
  LOADING: '読み込み中...',
  NO_DATA: 'データが見つかりません',
  ERROR: 'エラーが発生しました'
} as const;

// アプリケーション状態
export const APP_STATES = {
  HOME: 'home',
  CATEGORY: 'category',
  SELECT: 'select',
  VIEW: 'view'
} as const;

export type AppState = typeof APP_STATES[keyof typeof APP_STATES]; 