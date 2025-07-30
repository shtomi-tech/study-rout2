import React from 'react';
import { ArrowLeft, BookOpen, Calculator, Globe, Star, Clock, Target } from 'lucide-react';
import { RoadmapData } from '../types';

interface LearningRouteSelectorProps {
  subject: string;
  routes: RoadmapData[];
  onSelectRoute: (route: RoadmapData) => void;
  onBackToHome: () => void;
}

export const LearningRouteSelector: React.FC<LearningRouteSelectorProps> = ({
  subject,
  routes,
  onSelectRoute,
  onBackToHome
}) => {
  const getSubjectInfo = (subject: string) => {
    switch (subject) {
      case 'japanese':
        return {
          name: '国語',
          icon: BookOpen,
          color: 'text-red-600',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200'
        };
      case 'math':
        return {
          name: '数学',
          icon: Calculator,
          color: 'text-blue-600',
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200'
        };
      case 'english':
        return {
          name: '英語',
          icon: Globe,
          color: 'text-green-600',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200'
        };
      default:
        return {
          name: '学習',
          icon: BookOpen,
          color: 'text-gray-600',
          bgColor: 'bg-gray-50',
          borderColor: 'border-gray-200'
        };
    }
  };

  const subjectInfo = getSubjectInfo(subject);
  const IconComponent = subjectInfo.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHome}
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              ホームに戻る
            </button>
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${subjectInfo.bgColor}`}>
                <IconComponent size={24} className={subjectInfo.color} />
              </div>
              <h1 className="text-xl font-semibold text-gray-900">
                {subjectInfo.name}の学習ルート
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {subjectInfo.name}の学習ルートを選択してください
            </h2>
            <p className="text-gray-600">
              あなたのレベルに合わせて、最適な学習ルートを選択しましょう
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {routes.map((route) => (
              <div
                key={route.id}
                onClick={() => onSelectRoute(route)}
                className={`roadmap-card cursor-pointer hover:shadow-xl transition-all duration-300 ${subjectInfo.bgColor} ${subjectInfo.borderColor} border-2`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${subjectInfo.bgColor}`}>
                        <IconComponent size={24} className={subjectInfo.color} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {route.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {route.goal}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Star size={16} className="text-yellow-500" />
                      <span className="text-gray-600">レベル:</span>
                      <span className="font-medium">{route.level}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Target size={16} className="text-blue-500" />
                      <span className="text-gray-600">習得率:</span>
                      <span className="font-medium">{route.passRate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock size={16} className="text-green-500" />
                      <span className="text-gray-600">学習期間:</span>
                      <span className="font-medium">{route.preparationPeriod}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-2">学習内容:</h4>
                    {route.sections.slice(0, 3).map((section) => (
                      <div key={section.id} className="text-sm">
                        <div className="font-medium text-gray-900 mb-1">
                          {section.title}
                        </div>
                        <div className="text-gray-600 text-xs">
                          {section.description}
                        </div>
                      </div>
                    ))}
                    {route.sections.length > 3 && (
                      <div className="text-sm text-gray-500">
                        他 {route.sections.length - 3} セクション
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              学習ルートを選択して、詳細な学習計画を確認しましょう
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}; 