export const learningRoutes = {
  japanese: {
    modern: [
      {
        id: 'modern-basic',
        title: '現代文基礎コース',
        subtitle: '読解力と表現力の基礎を身につける',
        goal: '現代文の基本的な読解力と表現力を身につけ、文章の主旨を正確に理解できるようになる',
        level: '初級',
        passRate: '85%',
        preparationPeriod: '3ヶ月',
        sections: [
          {
            id: 'modern-basic-1',
            title: '文章の構造理解',
            description: '段落の役割と文章の構成を理解し、論理的な文章の流れを把握する',
            studyMethod: '教科書の例文を分析し、段落ごとの役割を整理する',
            duration: '2週間'
          },
          {
            id: 'modern-basic-2',
            title: '指示語・接続語の理解',
            description: '指示語と接続語の機能を理解し、文と文の関係を正確に把握する',
            studyMethod: '指示語・接続語の一覧を作成し、実際の文章で練習する',
            duration: '2週間'
          },
          {
            id: 'modern-basic-3',
            title: '要約の練習',
            description: '文章の要点を正確に把握し、簡潔に要約する技術を身につける',
            studyMethod: '短い文章から始めて、段階的に長い文章の要約に挑戦する',
            duration: '1ヶ月'
          }
        ]
      },
      {
        id: 'modern-advanced',
        title: '現代文応用コース',
        subtitle: '高度な読解力と論理的思考力を養う',
        goal: '複雑な文章を正確に読み解き、筆者の主張を論理的に分析できるようになる',
        level: '中級',
        passRate: '75%',
        preparationPeriod: '6ヶ月',
        sections: [
          {
            id: 'modern-advanced-1',
            title: '論説文の読解',
            description: '論説文の特徴を理解し、筆者の主張と論理展開を正確に把握する',
            studyMethod: '様々な論説文を読み、主張と根拠を整理する練習を行う',
            duration: '2ヶ月'
          },
          {
            id: 'modern-advanced-2',
            title: '小説文の読解',
            description: '小説の表現技法を理解し、登場人物の心理や主題を読み取る',
            studyMethod: '名作小説を読み、表現技法と心理描写を分析する',
            duration: '2ヶ月'
          },
          {
            id: 'modern-advanced-3',
            title: '評論・随筆の読解',
            description: '評論や随筆の特徴を理解し、筆者の思想や価値観を読み取る',
            studyMethod: '様々な評論・随筆を読み、筆者の思想背景を理解する',
            duration: '2ヶ月'
          }
        ]
      }
    ],
    classical: [
      {
        id: 'classical-basic',
        title: '古文基礎コース',
        subtitle: '古典文法と古文読解の基礎を身につける',
        goal: '古典文法の基本を理解し、簡単な古文を読解できるようになる',
        level: '初級',
        passRate: '80%',
        preparationPeriod: '4ヶ月',
        sections: [
          {
            id: 'classical-basic-1',
            title: '古典文法基礎',
            description: '動詞・形容詞・助動詞の活用を理解し、基本的な文法事項を習得する',
            studyMethod: '活用表を暗記し、実際の古文で活用を確認する',
            duration: '1ヶ月'
          },
          {
            id: 'classical-basic-2',
            title: '敬語の理解',
            description: '尊敬語・謙譲語・丁寧語の使い分けを理解し、適切に使用できるようになる',
            studyMethod: '敬語の一覧を作成し、現代語との対応関係を理解する',
            duration: '1ヶ月'
          },
          {
            id: 'classical-basic-3',
            title: '古文読解の基礎',
            description: '簡単な古文を読み、基本的な内容を理解できるようになる',
            studyMethod: '教科書の古文を丁寧に読み、現代語訳と照らし合わせる',
            duration: '2ヶ月'
          }
        ]
      }
    ],
    chinese: [
      {
        id: 'chinese-basic',
        title: '漢文基礎コース',
        subtitle: '漢文の基本文法と読解技術を身につける',
        goal: '漢文の基本文法を理解し、簡単な漢文を読解できるようになる',
        level: '初級',
        passRate: '75%',
        preparationPeriod: '3ヶ月',
        sections: [
          {
            id: 'chinese-basic-1',
            title: '漢文の基本構造',
            description: '漢文の語順と基本構造を理解し、返り点の読み方を習得する',
            studyMethod: '基本的な漢文の構造を理解し、返り点の練習を行う',
            duration: '1ヶ月'
          },
          {
            id: 'chinese-basic-2',
            title: '重要漢字の習得',
            description: '漢文で頻出する重要漢字の意味と用法を理解する',
            studyMethod: '重要漢字の一覧を作成し、意味と用法を暗記する',
            duration: '1ヶ月'
          },
          {
            id: 'chinese-basic-3',
            title: '漢文読解の基礎',
            description: '簡単な漢文を読み、基本的な内容を理解できるようになる',
            studyMethod: '教科書の漢文を丁寧に読み、現代語訳と照らし合わせる',
            duration: '1ヶ月'
          }
        ]
      }
    ]
  },
  math: {
    humanities: [
      {
        id: 'math-humanities-basic',
        title: '文系数学基礎コース',
        subtitle: '文系大学入試に対応する数学の基礎を身につける',
        goal: '文系大学入試に必要な数学の基礎知識を習得し、基本的な問題を解けるようになる',
        level: '初級',
        passRate: '80%',
        preparationPeriod: '6ヶ月',
        sections: [
          {
            id: 'math-humanities-basic-1',
            title: '数と式',
            description: '実数、複素数、式の計算、方程式・不等式の解法を習得する',
            studyMethod: '教科書の問題を解き、計算力を身につける',
            duration: '2ヶ月'
          },
          {
            id: 'math-humanities-basic-2',
            title: '図形と方程式',
            description: '直線、円、2次曲線の方程式とその性質を理解する',
            studyMethod: '図形の方程式を理解し、実際にグラフを描いて確認する',
            duration: '2ヶ月'
          },
          {
            id: 'math-humanities-basic-3',
            title: '確率・統計',
            description: '確率の基本概念と統計の基礎を理解し、基本的な問題を解けるようになる',
            studyMethod: '確率の問題を解き、統計の概念を理解する',
            duration: '2ヶ月'
          }
        ]
      }
    ],
    science: [
      {
        id: 'math-science-advanced',
        title: '理系数学応用コース',
        subtitle: '理系大学入試に対応する高度な数学力を身につける',
        goal: '理系大学入試に必要な高度な数学知識を習得し、複雑な問題も解けるようになる',
        level: '上級',
        passRate: '70%',
        preparationPeriod: '1年',
        sections: [
          {
            id: 'math-science-advanced-1',
            title: '微分・積分',
            description: '微分・積分の概念を理解し、様々な関数の微分・積分を習得する',
            studyMethod: '微分・積分の公式を理解し、多くの問題を解いて習熟する',
            duration: '3ヶ月'
          },
          {
            id: 'math-science-advanced-2',
            title: 'ベクトル・行列',
            description: 'ベクトルと行列の基本概念を理解し、線形代数の基礎を習得する',
            studyMethod: 'ベクトル・行列の計算練習を行い、幾何学的な意味を理解する',
            duration: '3ヶ月'
          },
          {
            id: 'math-science-advanced-3',
            title: '複素数・複素平面',
            description: '複素数の性質を理解し、複素平面での図形的な意味を習得する',
            studyMethod: '複素数の計算練習を行い、複素平面での図形を描く',
            duration: '2ヶ月'
          },
          {
            id: 'math-science-advanced-4',
            title: '数列・級数',
            description: '数列の性質と級数の収束・発散を理解し、様々な数列を扱えるようになる',
            studyMethod: '様々な数列の問題を解き、級数の性質を理解する',
            duration: '2ヶ月'
          },
          {
            id: 'math-science-advanced-5',
            title: '確率・統計（応用）',
            description: '確率分布、統計的推測の基礎を理解し、応用的な問題を解けるようになる',
            studyMethod: '確率分布の問題を解き、統計的推測の概念を理解する',
            duration: '2ヶ月'
          }
        ]
      }
    ]
  },
  english: {
    basic: [
      {
        id: 'english-basic',
        title: '英語基礎コース',
        subtitle: '英語の基礎文法と語彙力を身につける',
        goal: '英語の基礎文法を理解し、基本的な英文を読解・作成できるようになる',
        level: '初級',
        passRate: '85%',
        preparationPeriod: '6ヶ月',
        sections: [
          {
            id: 'english-basic-1',
            title: '基本文法',
            description: '英語の基本文法（時制、助動詞、受動態など）を理解し、正確に使用できるようになる',
            studyMethod: '文法書を参考に、基本的な文法事項を理解し、練習問題を解く',
            duration: '3ヶ月'
          },
          {
            id: 'english-basic-2',
            title: '語彙力強化',
            description: '基本的な英単語・熟語を習得し、語彙力を強化する',
            studyMethod: '単語帳を使用して語彙を増やし、実際の文章で使用する',
            duration: '2ヶ月'
          },
          {
            id: 'english-basic-3',
            title: '読解力向上',
            description: '基本的な英文を読み、内容を正確に理解できるようになる',
            studyMethod: '簡単な英文を読み、内容を日本語で要約する練習を行う',
            duration: '1ヶ月'
          }
        ]
      }
    ]
  }
}; 