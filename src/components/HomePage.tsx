import React from 'react';
import { BookOpen, Calculator, Globe } from 'lucide-react';

interface HomePageProps {
  onSelectSubject: (subject: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectSubject }) => {
  const subjects = [
    {
      id: 'japanese',
      name: '国語の学習ルート',
      description: '読解力と表現力を身につける学習計画',
      icon: BookOpen,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      id: 'math',
      name: '数学の学習ルート',
      description: '論理的思考と計算力を養う学習計画',
      icon: Calculator,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 'english',
      name: '英語の学習ルート',
      description: '実践的な英語力を身につける学習計画',
      icon: Globe,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              学習ロードマップ作成ツール
            </h1>
            <p className="text-lg text-gray-600">
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
            {subjects.map((subject) => {
              const IconComponent = subject.icon;
              return (
                <div
                  key={subject.id}
                  onClick={() => onSelectSubject(subject.id)}
                  className={`roadmap-card cursor-pointer hover:shadow-xl transition-all duration-300 ${subject.bgColor} ${subject.borderColor} border-2`}
                >
                  <div className="text-center py-8">
                    <div className={`${subject.color} mb-4`}>
                      <IconComponent size={64} className="mx-auto" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {subject.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {subject.description}
                    </p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex justify-between">
                        <span>対象レベル:</span>
                        <span className="font-medium">初級〜上級</span>
                      </div>
                      <div className="flex justify-between">
                        <span>学習期間:</span>
                        <span className="font-medium">3ヶ月〜1年</span>
                      </div>
                      <div className="flex justify-between">
                        <span>習得目標:</span>
                        <span className="font-medium">基礎〜応用</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              各科目の学習ルートを選択して、あなたに最適な学習計画を作成しましょう
            </p>
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-white border-t mt-auto">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="text-center text-gray-500 text-sm">
            <p>学習ロードマップ作成ツール - 国語・数学・英語の学習計画をサポート</p>
          </div>
        </div>
      </footer>
    </div>
  );
}; 