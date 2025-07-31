import React, { useState } from 'react';
import { HomePage } from './components/HomePage.jsx';
import { CategorySelector } from './components/CategorySelector.jsx';
import { LearningRouteSelector } from './components/LearningRouteSelector.jsx';
import { RoadmapViewer } from './components/RoadmapViewer.jsx';
import { learningRoutes } from './data/learningRoutes.js';

const App = () => {
  const [currentState, setCurrentState] = useState('home');
  const [currentRoadmap, setCurrentRoadmap] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject);
    setCurrentState('category');
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCurrentState('select');
  };

  const handleSelectRoute = (route) => {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* ヘッダー */}
      {currentState === 'view' && (
        <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <button
                onClick={handleBackToSelect}
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors duration-200"
              >
                ← 学習ルート選択に戻る
              </button>
              <h1 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  学
                </span>
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
        <footer className="bg-white/80 backdrop-blur-sm border-t mt-auto">
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