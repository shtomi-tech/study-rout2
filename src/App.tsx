import React, { useState } from 'react';
import { HomePage } from './components/HomePage';
import { CategorySelector } from './components/CategorySelector';
import { LearningRouteSelector } from './components/LearningRouteSelector';
import { RoadmapViewer } from './components/RoadmapViewer';
import { learningRoutes } from './data/learningRoutes';
import { RoadmapData } from './types';

type AppState = 'home' | 'category' | 'select' | 'view';

const App: React.FC = () => {
  const [currentState, setCurrentState] = useState<AppState>('home');
  const [currentRoadmap, setCurrentRoadmap] = useState<RoadmapData | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');



  const handleSelectSubject = (subject: string) => {
    setSelectedSubject(subject);
    setCurrentState('category');
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setCurrentState('select');
  };

  const handleSelectRoute = (route: RoadmapData) => {
    setCurrentRoadmap(route);
    setCurrentState('view');
  };

  const handleBackToHome = () => {
    setCurrentState('home');
    setCurrentRoadmap(null);
    setSelectedSubject('');
    setSelectedCategory('');
  };

  const handleBackToCategory = () => {
    setCurrentState('category');
    setCurrentRoadmap(null);
    setSelectedCategory('');
  };

  const handleBackToSelect = () => {
    setCurrentState('select');
    setCurrentRoadmap(null);
  };

  const renderContent = () => {
    switch (currentState) {
      case 'home':
        return (
          <HomePage
            onSelectSubject={handleSelectSubject}
          />
        );
      case 'category':
        return (
          <CategorySelector
            subject={selectedSubject}
            onSelectCategory={handleSelectCategory}
            onBackToHome={handleBackToHome}
          />
        );
      case 'select':
        return (
          <LearningRouteSelector
            subject={selectedSubject}
            routes={learningRoutes[selectedSubject]?.[selectedCategory] || []}
            onSelectRoute={handleSelectRoute}
            onBackToHome={handleBackToCategory}
          />
        );
      case 'view':
        return currentRoadmap ? (
          <RoadmapViewer
            roadmap={currentRoadmap}
            onEdit={() => {}} // 編集機能はオミット
          />
        ) : null;
      default:
        return null;
    }
  };

    return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      {currentState === 'view' && (
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <button
                onClick={handleBackToSelect}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                ← 学習ルート選択に戻る
              </button>
              <h1 className="text-xl font-semibold text-gray-900">
                学習ロードマップ作成ツール
              </h1>
            </div>
          </div>
        </header>
      )}

      {/* メインコンテンツ */}
      <main className="py-8">
        {renderContent()}
      </main>

      {/* フッター */}
      {currentState === 'home' && (
        <footer className="bg-white border-t mt-auto">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="text-center text-gray-500 text-sm">
              <p>学習ロードマップ作成ツール - 国語・数学・英語の学習計画をサポート</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App; 