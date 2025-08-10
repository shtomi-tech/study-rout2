import { RoadmapData } from '../types';

// 英語の学習ルート
export const englishRoutes: RoadmapData[] = [
  {
    id: 'exam-english-comprehensive',
    title: '入試英語総合学習ルート',
    level: '初級〜中級レベル',
    passRate: '80%',
    preparationPeriod: '約12ヶ月',
    goal: '目標:入試英語の基礎から応用まで体系的に習得し、大学入試に対応する実力を身につける',
    sections: [
      {
        id: 'english-basic',
        title: '①英語基礎編',
        description: '英語の基礎を固めるための学習',
        items: ['文法の基礎', '語彙の基礎', '読解の基礎'],
        order: 1,
        studyMethod: '毎日1つの基礎項目を深く理解する。基礎をしっかり固めてから次のレベルに進む。',
        duration: '約3ヶ月'
      },
      {
        id: 'english-standard',
        title: '②英語標準編',
        description: '英語の標準レベルの学習',
        items: ['文法の応用', '語彙の応用', '読解の応用'],
        order: 2,
        studyMethod: '毎日2題ずつ標準レベル問題に取り組む。基礎で習得した知識を活用して応用力を身につける。',
        duration: '約3ヶ月'
      },
      {
        id: 'english-advanced',
        title: '③英語発展編',
        description: '英語の発展レベルの学習',
        items: ['最難関大学対策', '高度な問題演習', '実戦力向上'],
        order: 3,
        studyMethod: '毎日2題ずつ発展レベル問題に取り組む。標準レベルで習得した知識を活用して最難関大学入試に対応する実力を身につける。',
        duration: '約3ヶ月'
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  }
]; 