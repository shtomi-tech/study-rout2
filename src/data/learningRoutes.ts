import { RoadmapData } from '../types';

export const learningRoutes: Record<string, Record<string, RoadmapData[]>> = {
  japanese: {
    modern: [
      {
        id: 'modern-basic',
        title: '現代文基礎学習ルート',
        level: '初級レベル',
        passRate: '基礎習得率 85%',
        preparationPeriod: '約3ヶ月',
        goal: '目標:現代文の読解力と表現力の基礎を身につける',
        sections: [
          {
            id: 'reading-comprehension',
            title: '1. 読解力の基礎',
            description: '文章を正確に読み取る力を養う',
            items: ['短文読解練習', '主語・述語の理解', '接続詞の使い方', '段落の構造理解'],
            order: 1
          },
          {
            id: 'writing-expression',
            title: '2. 表現力の基礎',
            description: '自分の考えを文章で表現する',
            items: ['日記・作文練習', '文章構成の基本', '敬語の使い方', '句読点の使い方'],
            order: 2
          },
          {
            id: 'vocabulary',
            title: '3. 語彙力の向上',
            description: '豊富な語彙を身につける',
            items: ['同義語・反義語', '類義語の使い分け', '慣用句・ことわざ', '四字熟語'],
            order: 3
          },
          {
            id: 'logic-reading',
            title: '4. 論理読解',
            description: '論理的な文章を読み解く',
            items: ['論説文の読解', '指示語の理解', '要約の練習', '筆者の主張把握'],
            order: 4
          }
        ],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    classical: [
      {
        id: 'classical-basic',
        title: '古文基礎学習ルート',
        level: '初級レベル',
        passRate: '基礎習得率 80%',
        preparationPeriod: '約4ヶ月',
        goal: '目標:古文の基礎文法と読解力を身につける',
        sections: [
          {
            id: 'grammar-basic',
            title: '1. 基礎文法',
            description: '古文の基本文法を理解',
            items: ['活用の基本', '助動詞の理解', '助詞の使い方', '敬語の体系'],
            order: 1
          },
          {
            id: 'vocabulary-classical',
            title: '2. 古典語彙',
            description: '古典語彙を習得',
            items: ['和語・漢語', '古語辞典の使い方', '語句の意味', '現代語訳'],
            order: 2
          },
          {
            id: 'reading-basic',
            title: '3. 基礎読解',
            description: '簡単な古文を読む',
            items: ['短文読解', '和歌の理解', '物語文', '随筆文'],
            order: 3
          },
          {
            id: 'culture',
            title: '4. 古典文化',
            description: '古典文化を理解',
            items: ['平安時代の文化', '貴族社会', '年中行事', '古典文学史'],
            order: 4
          }
        ],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    chinese: [
      {
        id: 'chinese-basic',
        title: '漢文基礎学習ルート',
        level: '初級レベル',
        passRate: '基礎習得率 75%',
        preparationPeriod: '約5ヶ月',
        goal: '目標:漢文の基礎文法と読解力を身につける',
        sections: [
          {
            id: 'kanji-basic',
            title: '1. 漢字の基礎',
            description: '漢字の読み書きを習得',
            items: ['音読み・訓読み', '漢字の部首', '漢字の成り立ち', '熟語の理解'],
            order: 1
          },
          {
            id: 'grammar-chinese',
            title: '2. 漢文文法',
            description: '漢文の基本文法を理解',
            items: ['句法の基本', '返り点', '送り仮名', '置き字'],
            order: 2
          },
          {
            id: 'reading-chinese',
            title: '3. 基礎読解',
            description: '簡単な漢文を読む',
            items: ['短文読解', '故事成語', '漢詩の理解', '論語'],
            order: 3
          },
          {
            id: 'culture-chinese',
            title: '4. 中国文化',
            description: '中国文化を理解',
            items: ['中国の歴史', '儒家思想', '道家思想', '中国文学史'],
            order: 4
          }
        ],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
  },
  math: {
    humanities: [
      {
        id: 'math-humanities-basic',
        title: '文系数学基礎学習ルート',
        level: '基礎〜応用レベル',
        passRate: '総合習得率 90%',
        preparationPeriod: '約9ヶ月',
        goal: '目標:ゴールデンルートシリーズで文系数学の基礎から応用まで段階的に習得',
        sections: [
          {
            id: 'step1-basic',
            title: '①ゴールデンルート数学1A・2B基礎編',
            description: '50題の入試問題で基本のカタを身につける',
            items: ['問題の読み方', '解答の書き方', '基礎計算力', '公式の理解'],
            order: 1
          },
          {
            id: 'step2-standard',
            title: '②ゴールデンルート数学1A・2B標準編',
            description: '基礎編の内容を踏まえて、より高度な問題に取り組む',
            items: ['応用問題の解法', '複合問題の理解', '論理的思考力', '時間管理'],
            order: 2
          },
          {
            id: 'step3-advanced',
            title: '③ゴールデンルート数学1A・2B応用編',
            description: '標準編の内容を踏まえて、最難関大学入試に対応する実力を身につける',
            items: ['難問の解法', '発想力の向上', '論理的思考力', '時間管理'],
            order: 3
          }
        ],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    science: [
      {
        id: 'math-science-basic',
        title: '理系数学基礎学習ルート',
        level: '基礎〜応用レベル',
        passRate: '総合習得率 95%',
        preparationPeriod: '約9ヶ月',
        goal: '目標:ゴールデンルートシリーズで理系数学の基礎から応用まで段階的に習得',
        sections: [
          {
            id: 'step1-basic-science',
            title: '①ゴールデンルート数学1A・2B基礎編',
            description: '50題の入試問題で基本のカタを身につける',
            items: ['問題の読み方', '解答の書き方', '基礎計算力', '公式の理解'],
            order: 1
          },
          {
            id: 'step2-standard-science',
            title: '②ゴールデンルート数学1A・2B標準編',
            description: '基礎編の内容を踏まえて、より高度な問題に取り組む',
            items: ['応用問題の解法', '複合問題の理解', '論理的思考力', '時間管理'],
            order: 2
          },
          {
            id: 'step3-advanced-science',
            title: '③ゴールデンルート数学1A・2B応用編',
            description: '標準編の内容を踏まえて、最難関理系大学入試に対応する実力を身につける',
            items: ['難問の解法', '発想力の向上', '論理的思考力', '時間管理'],
            order: 3
          }
        ],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
  },
  english: {
    basic: [
      {
        id: 'english-basic',
        title: '英語基礎学習ルート',
        level: '初級レベル',
        passRate: '基礎習得率 85%',
        preparationPeriod: '約6ヶ月',
        goal: '目標:英語の基礎文法と語彙力を身につける',
        sections: [
          {
            id: 'grammar-basic',
            title: '1. 基礎文法',
            description: '英語の基本文法を理解',
            items: ['be動詞・一般動詞', '現在形・過去形', '助動詞の基本', '疑問文・否定文'],
            order: 1
          },
          {
            id: 'vocabulary-basic',
            title: '2. 基礎語彙',
            description: '日常生活で使う語彙',
            items: ['家族・友達', '学校・仕事', '食べ物・飲み物', '場所・交通'],
            order: 2
          },
          {
            id: 'reading-basic',
            title: '3. 基礎読解',
            description: '簡単な英文を読む',
            items: ['短文読解', '絵本・童話', 'ニュース記事', 'メール・手紙'],
            order: 3
          },
          {
            id: 'listening-basic',
            title: '4. 基礎リスニング',
            description: '英語の音を聞き取る',
            items: ['発音の練習', '簡単な会話', '英語の歌', '映画・ドラマ'],
            order: 4
          }
        ],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
  }
}; 