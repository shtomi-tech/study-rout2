import { RoadmapData } from '../types';

// 文系数学の学習ルート
export const humanitiesMathRoutes: RoadmapData[] = [
  {
    id: 'humanities-math-comprehensive',
    title: '文系数学総合学習ルート',
    level: '初級〜中級レベル',
    passRate: '80%',
    preparationPeriod: '約12ヶ月',
    goal: '目標:文系数学の基礎から応用まで体系的に習得し、大学入試に対応する実力を身につける',
    sections: [
      {
        id: 'pattern-drill-1',
        title: '①高校数学Ⅰ パターンドリル',
        description: '高校数学Ⅰの基礎を固めるためのパターンドリル',
        items: ['数と式', '2次関数', '図形と計量', 'データの分析'],
        order: 1,
        studyMethod: '毎日1つのパターンを深く理解する。基礎をしっかり固めてから次のレベルに進む。',
        duration: '約2ヶ月'
      },
      {
        id: 'pattern-drill-a',
        title: '②高校数学A パターンドリル',
        description: '高校数学Aの基礎を固めるためのパターンドリル',
        items: ['場合の数と確率', '整数の性質', '図形の性質'],
        order: 2,
        studyMethod: '毎日1つのパターンを深く理解する。基礎をしっかり固めてから次のレベルに進む。',
        duration: '約2ヶ月'
      },
      {
        id: 'pattern-drill-2',
        title: '③高校数学Ⅱ パターンドリル',
        description: '高校数学Ⅱの基礎を固めるためのパターンドリル',
        items: ['式と証明', '複素数と方程式', '図形と方程式', '指数関数・対数関数', '三角関数', '微分・積分'],
        order: 3,
        studyMethod: '毎日1つのパターンを深く理解する。基礎をしっかり固めてから次のレベルに進む。',
        duration: '約3ヶ月'
      },
      {
        id: 'pattern-drill-bc',
        title: '④高校数学BC パターンドリル',
        description: '高校数学BCの基礎を固めるためのパターンドリル',
        items: ['数列', 'ベクトル', '複素数平面', '式と曲線', '極限', '微分法', '積分法'],
        order: 4,
        studyMethod: '毎日1つのパターンを深く理解する。基礎をしっかり固めてから次のレベルに進む。',
        duration: '約3ヶ月'
      },
      {
        id: 'eureka-1a',
        title: '⑤解法のエウレカ 数学ⅠA',
        description: '解法のエウレカシリーズで数学ⅠAの応用力を身につける',
        items: ['応用問題演習', '解法パターンの習得', '実践的な問題解決'],
        order: 5,
        studyMethod: '毎日2題ずつ応用問題に取り組む。基礎で習得した知識を活用して応用力を身につける。',
        duration: '約1.5ヶ月'
      },
      {
        id: 'eureka-2b',
        title: '⑥解法のエウレカ 数学ⅡB+ベクトル',
        description: '解法のエウレカシリーズで数学ⅡB+ベクトルの応用力を身につける',
        items: ['応用問題演習', '解法パターンの習得', '実践的な問題解決'],
        order: 6,
        studyMethod: '毎日2題ずつ応用問題に取り組む。基礎で習得した知識を活用して応用力を身につける。',
        duration: '約1.5ヶ月'
      },
      {
        id: 'common-test-math',
        title: '⑦大学入学共通テスト 数学重要問題集',
        description: '大学入学共通テストの数学重要問題集で実戦力を身につける',
        items: ['共通テスト対策', '重要問題演習', '実戦力向上'],
        order: 7,
        studyMethod: '毎日2題ずつ重要問題に取り組む。応用で習得した知識を活用して実戦力を身につける。',
        duration: '約1.5ヶ月'
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// 理系数学の学習ルート
export const scienceMathRoutes: RoadmapData[] = [
  {
    id: 'science-math-comprehensive',
    title: '理系数学総合学習ルート',
    level: '中級〜上級レベル',
    passRate: '75%',
    preparationPeriod: '約15ヶ月',
    goal: '目標:理系数学の基礎から応用まで体系的に習得し、最難関大学入試に対応する実力を身につける',
    sections: [
      {
        id: 'science-math-basic',
        title: '①理系数学基礎編',
        description: '理系数学の基礎を固めるための学習',
        items: ['数学ⅠAの基礎', '数学ⅡBの基礎', '数学Ⅲの基礎'],
        order: 1,
        studyMethod: '毎日1つの基礎項目を深く理解する。基礎をしっかり固めてから次のレベルに進む。',
        duration: '約4ヶ月'
      },
      {
        id: 'science-math-standard',
        title: '②理系数学標準編',
        description: '理系数学の標準レベルの学習',
        items: ['数学Ⅲの応用', '微積分の応用', '確率統計の応用'],
        order: 2,
        studyMethod: '毎日2題ずつ標準レベル問題に取り組む。基礎で習得した知識を活用して応用力を身につける。',
        duration: '約4ヶ月'
      },
      {
        id: 'science-math-advanced',
        title: '③理系数学発展編',
        description: '理系数学の発展レベルの学習',
        items: ['最難関大学対策', '高度な問題演習', '実戦力向上'],
        order: 3,
        studyMethod: '毎日2題ずつ発展レベル問題に取り組む。標準レベルで習得した知識を活用して最難関大学入試に対応する実力を身につける。',
        duration: '約4ヶ月'
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  }
]; 