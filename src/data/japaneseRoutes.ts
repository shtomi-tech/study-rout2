import { RoadmapData } from '../types';

// 現代文の学習ルート
export const modernJapaneseRoutes: RoadmapData[] = [
  {
    id: 'modern-basic',
    title: '現代文基礎学習ルート',
    level: '初級レベル',
    passRate: '85%',
    preparationPeriod: '約10.5ヶ月',
    goal: '目標:現代文の読解力と表現力の基礎を身につける',
    sections: [
      {
        id: 'intro-modern-reading',
        title: '①柳生のここからはじめる現代文ドリル',
        description: '入試に不可欠な超基礎レベルの知識を1冊で学べる。人気講師によるわかりやすい解説で「ニガテ」「今さら聞けない」を払拭！',
        items: ['短文読解練習', '主語・述語の理解', '接続詞の使い方', '段落の構造理解', '指示語の理解', '要約の練習'],
        order: 1,
        studyMethod: '1Ｐ解説＋1Ｐ演習の見開き完結で、確実に知識が定着。講師による使い方ガイド、学習内容の定着度が確認できる修了判定模試つき。',
        duration: '約2ヶ月'
      },
      {
        id: 'connect-modern-reading',
        title: '②柳生のここからつなげる現代文ドリル',
        description: '入試に不可欠な超基礎レベルの知識を1冊で学べる。人気講師によるわかりやすい解説で「ニガテ」「今さら聞けない」を払拭！',
        items: ['論説文の読解', '小説文の読解', '随筆文の読解', '筆者の主張把握', '心情の理解', '表現技法の理解'],
        order: 2,
        studyMethod: '1Ｐ解説＋1Ｐ演習の見開き完結で、確実に知識が定着。講師による使い方ガイド、学習内容の定着度が確認できる修了判定模試つき。',
        duration: '約2ヶ月'
      },
      {
        id: 'modern-commentary-keywords',
        title: '③現代評論キーワード講義',
        description: '現代評論で頻出するキーワードを体系的に学習し、評論読解の基礎を固める',
        items: ['評論キーワードの理解', '概念の整理', '論理構造の把握', '背景知識の習得'],
        order: 3,
        studyMethod: '毎日1つのキーワードを深く理解する。キーワードの定義、具体例、関連概念を整理してノートにまとめる。',
        duration: '約2ヶ月'
      },
      {
        id: 'the-rules-modern-basic',
        title: '④柳生好之のThe Rules現代文問題集1入試基礎',
        description: '柳生好之による現代文問題集で入試基礎レベルの問題に取り組む',
        items: ['入試基礎レベル問題演習', '読解力向上', '解法パターンの習得', '基礎知識の確認'],
        order: 4,
        studyMethod: '毎日2題ずつ基礎レベル問題に取り組む。基礎をしっかり固めてから次のレベルに進む。',
        duration: '約1.5ヶ月'
      },
      {
        id: 'the-rules-modern-standard',
        title: '⑤柳生好之のThe Rules現代文問題集2入試標準',
        description: '柳生好之による現代文問題集で入試標準レベルの問題に取り組む',
        items: ['入試標準レベル問題演習', '読解力向上', '解法パターンの応用', '応用知識の習得'],
        order: 5,
        studyMethod: '毎日2題ずつ標準レベル問題に取り組む。基礎レベルで習得した知識を活用して応用力を身につける。',
        duration: '約1.5ヶ月'
      },
      {
        id: 'the-rules-modern-advanced',
        title: '⑥柳生好之のThe Rules現代文問題集3入試難関',
        description: '柳生好之による現代文問題集で入試難関レベルの問題に取り組む',
        items: ['入試難関レベル問題演習', '読解力向上', '解法パターンの応用', '高度な知識の習得'],
        order: 6,
        studyMethod: '毎日2題ずつ難関レベル問題に取り組む。標準レベルで習得した知識を活用して最難関大学入試に対応する実力を身につける。',
        duration: '約1.5ヶ月'
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// 古文の学習ルート
export const classicalJapaneseRoutes: RoadmapData[] = [
  {
    id: 'classical-grammar-focused',
    title: '古文文法集中学習ルート',
    level: '初級〜中級レベル',
    passRate: '85%',
    preparationPeriod: '約8ヶ月',
    goal: '目標:古典文法の基礎から応用まで体系的に習得し、古文読解力を向上させる',
    sections: [
      {
        id: 'intro-classical-grammar-new',
        title: '①ここからはじめる古典文法',
        description: '古典文法の基礎を固めるための入門書。わかりやすい解説で古典文法の基本を習得する',
        items: ['活用の基本', '助動詞の理解', '助詞の使い方', '敬語の体系', '古典語彙', '古語辞典の使い方'],
        order: 1,
        studyMethod: '基礎から丁寧に学習し、確実に知識を定着させる。毎日1つの文法項目を深く理解する。',
        duration: '約2ヶ月'
      },
      {
        id: 'connect-classical-grammar',
        title: '②ここからつなげる古典文法',
        description: '基礎で習得した古典文法を応用し、読解力向上につなげる',
        items: ['文法の応用', '読解への活用', '複合的な文法事項', '実践的な問題演習'],
        order: 2,
        studyMethod: '基礎で習得した知識を活用して応用問題に取り組む。文法知識を読解に活かす練習を重ねる。',
        duration: '約2ヶ月'
      },
      {
        id: 'polaris-classical-1',
        title: '③古文POLARIS 1 基礎レベル',
        description: '古文ポラリスシリーズの基礎レベルで、古典文法と読解の基礎を固める',
        items: ['基礎レベル問題演習', '読解力向上', '文法の確認', '語彙の定着', '古典文学の理解'],
        order: 3,
        studyMethod: '毎日2題ずつ基礎レベル問題に取り組む。基礎をしっかり固めてから次のレベルに進む。',
        duration: '約1.5ヶ月'
      },
      {
        id: 'polaris-classical-2',
        title: '④古文POLARIS 2 標準レベル',
        description: '古文ポラリスシリーズの標準レベルで、古典文法と読解の応用力を身につける',
        items: ['標準レベル問題演習', '読解力向上', '文法の応用', '語彙の活用', '古典文学の深い理解'],
        order: 4,
        studyMethod: '毎日2題ずつ標準レベル問題に取り組む。基礎レベルで習得した知識を活用して応用力を身につける。',
        duration: '約1.5ヶ月'
      },
      {
        id: 'polaris-classical-3',
        title: '⑤古文POLARIS 3 発展レベル',
        description: '古文ポラリスシリーズの発展レベルで、最難関大学入試に対応する実力を身につける',
        items: ['発展レベル問題演習', '読解力向上', '文法の応用', '語彙の活用', '古典文学の深い理解'],
        order: 5,
        studyMethod: '毎日2題ずつ発展レベル問題に取り組む。標準レベルで習得した知識を活用して最難関大学入試に対応する実力を身につける。',
        duration: '約1.5ヶ月'
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  }
]; 