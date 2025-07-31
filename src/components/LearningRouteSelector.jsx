import React from 'react';

const LearningRouteSelector = ({
  subject,
  routes,
  onSelectRoute,
  onBackToHome
}) => {
  const getSubjectInfo = (subject) => {
    switch (subject) {
      case 'japanese':
        return {
          name: '国語',
          icon: '📚',
          color: 'text-red-600',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          gradient: 'from-red-500 to-red-600'
        };
      case 'math':
        return {
          name: '数学',
          icon: '🧮',
          color: 'text-blue-600',
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200',
          gradient: 'from-blue-500 to-blue-600'
        };
      case 'english':
        return {
          name: '英語',
          icon: '🌍',
          color: 'text-green-600',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          gradient: 'from-green-500 to-green-600'
        };
      default:
        return {
          name: '学習',
          icon: '📚',
          color: 'text-gray-600',
          bgColor: 'bg-gray-50',
          borderColor: 'border-gray-200',
          gradient: 'from-gray-500 to-gray-600'
        };
    }
  };

  const subjectInfo = getSubjectInfo(subject);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* ヘッダー */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHome}
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors duration-200"
            >
              ← カテゴリ選択に戻る
            </button>
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${subjectInfo.gradient} shadow-sm text-white text-xl`}>
                {subjectInfo.icon}
              </div>
              <h1 className="text-xl font-semibold text-gray-900">
                {subjectInfo.name}の学習ルート
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {subjectInfo.name}の学習ルートを選択してください
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              あなたのレベルに合わせて、最適な学習ルートを選択しましょう
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {routes.map((route) => (
              <div
                key={route.id}
                className="group"
              >
                <button
                  onClick={() => onSelectRoute(route)}
                  className="w-full h-full text-left bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 overflow-hidden group-hover:scale-105"
                >
                  <div className="p-6">
                    {/* ヘッダー部分 */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${subjectInfo.gradient} shadow-sm text-white text-lg`}>
                          {subjectInfo.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {route.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {route.goal}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 学習情報 */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-gray-600">レベル:</span>
                        <span className="font-medium text-gray-900">{route.level}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-blue-500">🎯</span>
                        <span className="text-gray-600">習得率:</span>
                        <span className="font-medium text-gray-900">{route.passRate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-green-500">⏰</span>
                        <span className="text-gray-600">学習期間:</span>
                        <span className="font-medium text-gray-900">{route.preparationPeriod}</span>
                      </div>
                    </div>

                    {/* 学習内容プレビュー */}
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        学習内容:
                      </h4>
                      {route.sections.slice(0, 3).map((section, index) => (
                        <div key={section.id} className="text-sm bg-gray-50 rounded-lg p-3">
                          <div className="font-medium text-gray-900 mb-1">
                            {index + 1}. {section.title}
                          </div>
                          <div className="text-gray-600 text-xs leading-relaxed">
                            {section.description}
                          </div>
                        </div>
                      ))}
                      {route.sections.length > 3 && (
                        <div className="text-sm text-gray-500 bg-blue-50 rounded-lg p-3">
                          他 {route.sections.length - 3} セクションを含む
                        </div>
                      )}
                    </div>

                    {/* アクションボタン */}
                    <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-700 font-medium">
                      <span>このルートを選択</span>
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* 追加情報セクション */}
          <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                学習ルートの選び方
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div>
                  <div className="font-medium text-gray-900 mb-2">📊 現在のレベル</div>
                  <p>自分の現在の理解度を正確に把握する</p>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-2">🎯 目標設定</div>
                  <p>達成したい目標に合わせてルートを選択</p>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-2">⏰ 学習時間</div>
                  <p>確保できる学習時間に合わせて調整</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export { LearningRouteSelector }; 