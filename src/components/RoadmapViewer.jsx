import React from 'react';

const RoadmapViewer = ({
  roadmap,
  onEdit: _onEdit
}) => {
  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([JSON.stringify(roadmap, null, 2)], { type: 'application/json' });
    element.href = URL.createObjectURL(file);
    element.download = `${roadmap.title}.json`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: roadmap.title,
        text: `学習ロードマップ: ${roadmap.title}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('URLをクリップボードにコピーしました');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* ヘッダー */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{roadmap.title}</h1>
            {roadmap.subtitle && (
              <p className="text-lg text-gray-600 mb-4">{roadmap.subtitle}</p>
            )}
            <div className="flex items-center gap-2 text-blue-600 font-medium">
              <span className="text-xl">📚</span>
              <span>学習ロードマップ</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleDownload}
              className="btn-secondary flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
            >
              <span>📥</span>
              ダウンロード
            </button>
            <button
              onClick={handleShare}
              className="btn-primary flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
            >
              <span>📤</span>
              共有
            </button>
          </div>
        </div>
      </div>

      {/* 基本情報 */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <span className="text-blue-600">🎯</span>
          学習概要
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">レベル</div>
            <div className="text-gray-700 font-medium">{roadmap.level}</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-2">合格率</div>
            <div className="text-gray-700 font-medium">{roadmap.passRate}</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-2">対策期間</div>
            <div className="text-gray-700 font-medium">{roadmap.preparationPeriod}</div>
          </div>
        </div>
      </div>

      {/* 学習セクション */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <span className="text-green-600">📈</span>
          学習セクション
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {roadmap.sections.map((section, index) => (
            <div key={section.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
              </div>
              
              {section.description && (
                <p className="text-gray-600 mb-4 leading-relaxed">{section.description}</p>
              )}
              
              {/* 学習方法と期間 */}
              {(section.studyMethod || section.duration) && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-4">
                  {section.studyMethod && (
                    <div className="mb-3">
                      <div className="text-sm font-semibold text-blue-800 mb-1 flex items-center gap-2">
                        <span>📚</span>
                        学習方法
                      </div>
                      <p className="text-sm text-blue-700 leading-relaxed">{section.studyMethod}</p>
                    </div>
                  )}
                  {section.duration && (
                    <div>
                      <div className="text-sm font-semibold text-blue-800 mb-1 flex items-center gap-2">
                        <span>⏰</span>
                        所要期間
                      </div>
                      <p className="text-sm text-blue-700">{section.duration}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 目標 */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl shadow-sm border border-green-200 p-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <span className="text-green-600">✅</span>
            学習目標
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">{roadmap.goal}</p>
        </div>
      </div>

      {/* 学習のポイント */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-blue-600">→</span>
          学習のポイント
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-600 font-bold text-xs">1</span>
            </div>
            <div>
              <div className="font-medium text-gray-900 mb-1">段階的な学習</div>
              <p>基礎から応用まで、順序立てて学習を進めましょう</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-green-600 font-bold text-xs">2</span>
            </div>
            <div>
              <div className="font-medium text-gray-900 mb-1">継続的な復習</div>
              <p>定期的に復習を行い、知識を定着させましょう</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-purple-600 font-bold text-xs">3</span>
            </div>
            <div>
              <div className="font-medium text-gray-900 mb-1">実践的な演習</div>
              <p>理論だけでなく、実際の問題演習も重要です</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-orange-600 font-bold text-xs">4</span>
            </div>
            <div>
              <div className="font-medium text-gray-900 mb-1">進捗の確認</div>
              <p>定期的に学習の進捗を確認し、必要に応じて調整しましょう</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { RoadmapViewer }; 