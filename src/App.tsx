import React, { useState } from 'react';
import { HomePage } from './components/HomePage';
import { CategorySelector } from './components/CategorySelector';
import { LearningRouteSelector } from './components/LearningRouteSelector';
import { RoadmapViewer } from './components/RoadmapViewer';
import { learningRoutes } from './data/learningRoutes';
import { RoadmapData } from './types';
import { APP_STATES, UI_TEXT } from './constants';
import type { AppState } from './constants';

const App: React.FC = () => {
  const [currentState, setCurrentState] = useState<AppState>(APP_STATES.HOME);
  const [currentRoadmap, setCurrentRoadmap] = useState<RoadmapData | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // データの読み込みをデバッグ
  console.log('learningRoutes:', learningRoutes);
  console.log('Math routes - humanities:', learningRoutes.math?.humanities);
  console.log('Math routes - science:', learningRoutes.math?.science);

  const handleSelectSubject = (subject: string) => {
    console.log('Selected subject:', subject);
    setSelectedSubject(subject);
    setCurrentState(APP_STATES.CATEGORY);
  };

  const handleSelectCategory = (category: string) => {
    console.log('Selected category:', category);
    setSelectedCategory(category);
    setCurrentState(APP_STATES.SELECT);
  };

  const handleSelectRoute = (route: RoadmapData) => {
    console.log('Selected route:', route);
    setCurrentRoadmap(route);
    setCurrentState(APP_STATES.VIEW);
  };

  const handleBackToHome = () => {
    setCurrentState(APP_STATES.HOME);
    setCurrentRoadmap(null);
    setSelectedSubject('');
    setSelectedCategory('');
  };

  const handleBackToCategory = () => {
    setCurrentState(APP_STATES.CATEGORY);
    setCurrentRoadmap(null);
    setSelectedCategory('');
  };

  const handleBackToSelect = () => {
    setCurrentState(APP_STATES.SELECT);
    setCurrentRoadmap(null);
  };

  const renderContent = () => {
    switch (currentState) {
      case APP_STATES.HOME:
        return (
          <HomePage
            onSelectSubject={handleSelectSubject}
          />
        );
      case APP_STATES.CATEGORY:
        return (
          <CategorySelector
            subject={selectedSubject}
            onSelectCategory={handleSelectCategory}
            onBackToHome={handleBackToHome}
          />
        );
      case APP_STATES.SELECT:
        return (
          <LearningRouteSelector
            subject={selectedSubject}
            routes={learningRoutes[selectedSubject]?.[selectedCategory] || []}
            onSelectRoute={handleSelectRoute}
            onBackToHome={handleBackToCategory}
          />
        );
      case APP_STATES.VIEW:
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
      {currentState === APP_STATES.VIEW && (
        <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <button
                onClick={handleBackToSelect}
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors duration-200"
              >
                {UI_TEXT.BACK_TO_SELECT}
              </button>
              <h1 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  学
                </span>
                {UI_TEXT.APP_TITLE}
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
      {currentState === APP_STATES.HOME && (
        <footer className="bg-white/80 backdrop-blur-sm border-t mt-auto">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="text-center text-gray-500 text-sm">
              <p>{UI_TEXT.FOOTER_TEXT}</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App; 