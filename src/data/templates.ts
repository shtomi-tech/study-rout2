import { RoadmapTemplate } from '../types';

export const templates: RoadmapTemplate[] = [
  {
    id: 'elementary-study',
    name: '小学生向け学習ロードマップ',
    description: '国語・数学・英語の基礎を身につけるための学習計画',
    data: {
      id: 'elementary-study-template',
      title: '小学生向け学習ロードマップ',
      level: '小学生レベル',
      passRate: '基礎習得率 90%',
      preparationPeriod: '約6ヶ月',
      goal: '目標:基礎学力を身につけ、中学準備を完了する',
      sections: [
        {
          id: 'japanese-basic',
          title: '1. 国語基礎',
          description: '読解力と表現力を身につける',
          items: [
            '漢字の読み書き',
            '文章読解練習',
            '作文・日記',
            '音読練習'
          ],
          order: 1
        },
        {
          id: 'math-basic',
          title: '2. 数学基礎',
          description: '計算力と論理的思考を養う',
          items: [
            '四則演算の習得',
            '分数・小数の理解',
            '図形の性質',
            '文章題の解法'
          ],
          order: 2
        },
        {
          id: 'english-basic',
          title: '3. 英語基礎',
          description: '英語の基礎を学ぶ',
          items: [
            'アルファベット',
            '基本単語100語',
            '簡単な会話表現',
            '英語の歌・ゲーム'
          ],
          order: 3
        },
        {
          id: 'study-habits',
          title: '4. 学習習慣',
          description: '継続的な学習習慣を身につける',
          items: [
            '毎日の学習時間確保',
            '計画的な復習',
            'ノートの取り方',
            '集中力の向上'
          ],
          order: 4
        }
      ],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  },
  {
    id: 'junior-high-study',
    name: '中学生向け学習ロードマップ',
    description: '中学校での学習を効率的に進めるための計画',
    data: {
      id: 'junior-high-study-template',
      title: '中学生向け学習ロードマップ',
      level: '中学生レベル',
      passRate: '定期テスト平均 80点',
      preparationPeriod: '約1年',
      goal: '目標:基礎学力を固め、高校受験に備える',
      sections: [
        {
          id: 'japanese-intermediate',
          title: '1. 国語力向上',
          description: '読解力と表現力を向上させる',
          items: [
            '現代文読解',
            '古文・漢文基礎',
            '作文・小論文',
            '語彙力強化'
          ],
          order: 1
        },
        {
          id: 'math-intermediate',
          title: '2. 数学力向上',
          description: '数学的思考力を身につける',
          items: [
            '代数・関数',
            '図形・証明',
            '確率・統計',
            '応用問題演習'
          ],
          order: 2
        },
        {
          id: 'english-intermediate',
          title: '3. 英語力向上',
          description: '実践的な英語力を身につける',
          items: [
            '文法の理解',
            '長文読解',
            'リスニング練習',
            '英作文'
          ],
          order: 3
        },
        {
          id: 'science-basic',
          title: '4. 理科基礎',
          description: '科学的思考を養う',
          items: [
            '物理・化学基礎',
            '生物・地学基礎',
            '実験・観察',
            '科学用語の理解'
          ],
          order: 4
        },
        {
          id: 'social-basic',
          title: '5. 社会基礎',
          description: '社会科の基礎知識を身につける',
          items: [
            '地理・歴史',
            '公民基礎',
            '時事問題',
            '資料読解'
          ],
          order: 5
        },
        {
          id: 'exam-preparation',
          title: '6. 受験対策',
          description: '高校受験に向けた準備',
          items: [
            '過去問演習',
            '弱点克服',
            '時間配分練習',
            '面接対策'
          ],
          order: 6
        }
      ],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  },
  {
    id: 'high-school-study',
    name: '高校生向け学習ロードマップ',
    description: '大学受験に向けた効率的な学習計画',
    data: {
      id: 'high-school-study-template',
      title: '高校生向け学習ロードマップ',
      level: '高校生レベル',
      passRate: '大学合格率 85%',
      preparationPeriod: '約2年',
      goal: '目標:志望大学に合格するための学力を身につける',
      sections: [
        {
          id: 'japanese-advanced',
          title: '1. 国語力完成',
          description: '大学受験レベルの国語力を身につける',
          items: [
            '現代文読解',
            '古文・漢文',
            '小論文対策',
            '語彙・漢字'
          ],
          order: 1
        },
        {
          id: 'math-advanced',
          title: '2. 数学力完成',
          description: '大学受験レベルの数学力を身につける',
          items: [
            '数学I・II・III',
            '数学A・B',
            '応用問題演習',
            '証明問題'
          ],
          order: 2
        },
        {
          id: 'english-advanced',
          title: '3. 英語力完成',
          description: '大学受験レベルの英語力を身につける',
          items: [
            '英文法完成',
            '長文読解',
            'リスニング',
            '英作文'
          ],
          order: 3
        },
        {
          id: 'science-advanced',
          title: '4. 理科選択',
          description: '志望学部に応じた理科科目',
          items: [
            '物理・化学・生物',
            '地学基礎',
            '実験・観察',
            '計算問題'
          ],
          order: 4
        },
        {
          id: 'social-advanced',
          title: '5. 社会選択',
          description: '志望学部に応じた社会科目',
          items: [
            '日本史・世界史',
            '地理・政治経済',
            '倫理・現代社会',
            '資料読解'
          ],
          order: 5
        },
        {
          id: 'exam-strategy',
          title: '6. 受験戦略',
          description: '効率的な受験対策',
          items: [
            '志望校分析',
            '過去問研究',
            '弱点克服',
            '面接・小論文'
          ],
          order: 6
        }
      ],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  }
]; 