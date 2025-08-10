import React from 'react';
import { ArrowLeft, BookOpen, Calculator, Globe, FileText, Scroll, BookOpenCheck, ArrowRight } from 'lucide-react';

interface CategorySelectorProps {
  subject: string;
  onSelectCategory: (category: string) => void;
  onBackToHome: () => void;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  subject,
  onSelectCategory,
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
          borderColor: 'border-red-200',
          gradient: 'from-red-500 to-red-600',
          categories: [
            {
              id: 'modern',
              name: '現代文',
              description: '現代の文章を読解し、表現力を身につける',
              icon: FileText,
              color: 'text-red-500',
              bgColor: 'bg-red-50',
              borderColor: 'border-red-200',
              gradient: 'from-red-400 to-red-500'
            },
            {
              id: 'classical',
              name: '古文',
              description: '古典文学を読み解き、古典文化を理解する',
              icon: Scroll,
              color: 'text-red-600',
              bgColor: 'bg-red-50',
              borderColor: 'border-red-200',
              gradient: 'from-red-500 to-red-600'
            },
            {
              id: 'chinese',
              name: '漢文',
              description: '中国古典文学を読み解き、中国文化を理解する',
              icon: BookOpenCheck,
              color: 'text-red-700',
              bgColor: 'bg-red-50',
              borderColor: 'border-red-200',
              gradient: 'from-red-600 to-red-700'
            }
          ]
        };
      case 'math':
        return {
          name: '数学',
          icon: Calculator,
          color: 'text-blue-600',
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200',
          gradient: 'from-blue-500 to-blue-600',
          categories: [
            {
              id: 'humanities',
              name: '文系数学',
              description: '文系大学入試に対応する数学力を身につける',
              icon: Calculator,
              color: 'text-blue-500',
              bgColor: 'bg-blue-50',
              borderColor: 'border-blue-200',
              gradient: 'from-blue-400 to-blue-500'
            },
            {
              id: 'science',
              name: '理系数学',
              description: '理系大学入試に対応する高度な数学力を身につける',
              icon: Calculator,
              color: 'text-blue-700',
              bgColor: 'bg-blue-50',
              borderColor: 'border-blue-200',
              gradient: 'from-blue-600 to-blue-700'
            }
          ]
        };
      case 'english':
        return {
          name: '英語',
          icon: Globe,
          color: 'text-green-600',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          gradient: 'from-green-500 to-green-600',
          categories: [
            {
              id: 'basic',
              name: '英語基礎',
              description: '英語の基礎文法と語彙力を身につける',
              icon: Globe,
              color: 'text-green-500',
              bgColor: 'bg-green-50',
              borderColor: 'border-green-200',
              gradient: 'from-green-400 to-green-500'
            },
            {
              id: 'exam',
              name: '大学受験英語',
              description: '大学入試に必要な英語力を総合的に習得',
              icon: Globe,
              color: 'text-green-600',
              bgColor: 'bg-green-50',
              borderColor: 'border-green-200',
              gradient: 'from-green-500 to-green-600'
            },
            {
              id: 'eiken',
              name: '英検対策',
              description: '英検合格に必要な英語力を段階的に習得',
              icon: Globe,
              color: 'text-green-700',
              bgColor: 'bg-green-50',
              borderColor: 'border-green-200',
              gradient: 'from-green-600 to-green-700'
            }
          ]
        };
      default:
        return {
          name: '学習',
          icon: BookOpen,
          color: 'text-gray-600',
          bgColor: 'bg-gray-50',
          borderColor: 'border-gray-200',
          gradient: 'from-gray-500 to-gray-600',
          categories: []
        };
    }
  };

  const subjectInfo = getSubjectInfo(subject);
  const IconComponent = subjectInfo.icon;

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
              <ArrowLeft size={20} />
              ホームに戻る
            </button>
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${subjectInfo.gradient} shadow-sm`}>
                <IconComponent size={24} className="text-white" />
              </div>
              <h1 className="text-xl font-semibold text-gray-900">
                {subjectInfo.name}のカテゴリ選択
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
              {subjectInfo.name}のカテゴリを選択してください
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              あなたの学習目標に合わせて、最適なカテゴリを選択しましょう
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjectInfo.categories.map((category) => {
              const CategoryIconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className="group"
                >
                  <button
                    onClick={() => onSelectCategory(category.id)}
                    className="w-full h-full text-left bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 overflow-hidden group-hover:scale-105"
                  >
                    <div className="p-6">
                      {/* アイコンとグラデーション背景 */}
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <CategoryIconComponent size={28} className="text-white" />
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                        {category.name}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 text-center text-sm leading-relaxed">
                        {category.description}
                      </p>
                      
                      {/* 学習情報 */}
                      <div className="space-y-2 text-xs text-gray-500 mb-4">
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
                      <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-700 font-medium text-sm">
                        <span>カテゴリを選択</span>
                        <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* 追加情報セクション */}
          <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {subjectInfo.name}学習のポイント
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="text-left">
                  <div className="font-medium text-gray-900 mb-2">📚 基礎固め</div>
                  <p>基本概念をしっかり理解してから応用に進む</p>
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900 mb-2">🎯 目標設定</div>
                  <p>明確な学習目標を設定して効率的に学習</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}; 