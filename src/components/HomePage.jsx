import React from 'react';

const HomePage = ({ onSelectSubject }) => {
  const subjects = [
    {
      id: 'japanese',
      name: '国語の学習ルート',
      description: '読解力と表現力を身につける学習計画',
      icon: '📚',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      gradient: 'from-red-500 to-red-600'
    },
    {
      id: 'math',
      name: '数学の学習ルート',
      description: '論理的思考と計算力を養う学習計画',
      icon: '🧮',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 'english',
      name: '英語の学習ルート',
      description: '実践的な英語力を身につける学習計画',
      icon: '🌍',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      gradient: 'from-green-500 to-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* ヘッダー */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              学習ロードマップ作成ツール
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              国語・数学・英語を中心とした効率的な学習計画を立てて、目標達成を目指しましょう
            </p>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              学習科目を選択してください
            </h2>
            <p className="text-gray-600">
              各科目の学習ルートから選択して、効率的な学習計画を作成しましょう
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subjects.map((subject) => (
              <div
                key={subject.id}
                className="group"
              >
                <button
                  onClick={() => onSelectSubject(subject.id)}
                  className="w-full h-full text-left bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 overflow-hidden group-hover:scale-105"
                >
                  <div className="p-8">
                    {/* アイコンとグラデーション背景 */}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${subject.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 text-white text-2xl`}>
                      {subject.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                      {subject.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 text-center text-sm leading-relaxed">
                      {subject.description}
                    </p>
                    
                    {/* 学習情報 */}
                    <div className="space-y-3 text-sm text-gray-500 mb-6">
                      <div className="flex justify-between items-center">
                        <span>対象レベル:</span>
                        <span className="font-medium text-gray-700">初級〜上級</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>学習期間:</span>
                        <span className="font-medium text-gray-700">3ヶ月〜1年</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>習得目標:</span>
                        <span className="font-medium text-gray-700">基礎〜応用</span>
                      </div>
                    </div>
                    
                    {/* アクションボタン */}
                    <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-700 font-medium">
                      <span>詳細を見る</span>
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* 追加情報セクション */}
          <div className="mt-16 bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                学習ロードマップの特徴
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
                <div>
                  <div className="font-medium text-gray-900 mb-2">🎯 目標設定</div>
                  <p>明確な学習目標を設定し、段階的に達成</p>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-2">📊 進捗管理</div>
                  <p>学習の進捗を可視化して継続をサポート</p>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-2">🔄 柔軟な調整</div>
                  <p>個人のペースに合わせて学習計画を調整</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export { HomePage }; 