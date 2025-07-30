import React from 'react';
import { ArrowLeft, BookOpen, Calculator, Globe, FileText, Scroll, BookOpenCheck } from 'lucide-react';

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
          categories: [
            {
              id: 'modern',
              name: '現代文',
              description: '現代の文章を読解し、表現力を身につける',
              icon: FileText,
              color: 'text-red-500',
              bgColor: 'bg-red-50',
              borderColor: 'border-red-200'
            },
            {
              id: 'classical',
              name: '古文',
              description: '古典文学を読み解き、古典文化を理解する',
              icon: Scroll,
              color: 'text-red-600',
              bgColor: 'bg-red-50',
              borderColor: 'border-red-200'
            },
            {
              id: 'chinese',
              name: '漢文',
              description: '中国古典文学を読み解き、中国文化を理解する',
              icon: BookOpenCheck,
              color: 'text-red-700',
              bgColor: 'bg-red-50',
              borderColor: 'border-red-200'
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
          categories: [
            {
              id: 'humanities',
              name: '文系数学',
              description: '文系大学入試に対応する数学力を身につける',
              icon: Calculator,
              color: 'text-blue-500',
              bgColor: 'bg-blue-50',
              borderColor: 'border-blue-200'
            },
            {
              id: 'science',
              name: '理系数学',
              description: '理系大学入試に対応する高度な数学力を身につける',
              icon: Calculator,
              color: 'text-blue-700',
              bgColor: 'bg-blue-50',
              borderColor: 'border-blue-200'
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
          categories: [
            {
              id: 'basic',
              name: '英語基礎',
              description: '英語の基礎文法と語彙力を身につける',
              icon: Globe,
              color: 'text-green-500',
              bgColor: 'bg-green-50',
              borderColor: 'border-green-200'
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
          categories: []
        };
    }
  };

  const subjectInfo = getSubjectInfo(subject);
  const IconComponent = subjectInfo.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="route-selector-header">
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
                {subjectInfo.name}のカテゴリ選択
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="route-selector-main">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {subjectInfo.name}のカテゴリを選択してください
            </h2>
            <p className="text-gray-600">
              あなたの学習目標に合わせて、最適なカテゴリを選択しましょう
            </p>
          </div>

          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjectInfo.categories.map((category) => {
              const CategoryIconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  onClick={() => onSelectCategory(category.id)}
                  className={`route-card ${category.bgColor} ${category.borderColor} hover-lift`}
                >
                  <div className="text-center py-8">
                    <div className={`${category.color} mb-4`}>
                      <CategoryIconComponent size={64} className="mx-auto" />
                    </div>
                    <h3 className="subject-title">
                      {category.name}
                    </h3>
                    <p className="subject-description">
                      {category.description}
                    </p>
                    <div className="subject-info">
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

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              カテゴリを選択して、具体的な学習ルートを確認しましょう
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}; 