import React from 'react';
import { Download, Share2 } from 'lucide-react';
import { RoadmapData } from '../types';

interface RoadmapViewerProps {
  roadmap: RoadmapData;
  onEdit: () => void;
}

export const RoadmapViewer: React.FC<RoadmapViewerProps> = ({
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
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{roadmap.title}</h1>
          {roadmap.subtitle && (
            <p className="text-lg text-gray-600">{roadmap.subtitle}</p>
          )}
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleDownload}
            className="btn-secondary flex items-center gap-2"
          >
            <Download size={20} />
            ダウンロード
          </button>
          <button
            onClick={handleShare}
            className="btn-secondary flex items-center gap-2"
          >
            <Share2 size={20} />
            共有
          </button>
        </div>
      </div>

      {/* 基本情報 */}
      <div className="roadmap-card mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">レベル</div>
            <div className="text-gray-700">{roadmap.level}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">合格率</div>
            <div className="text-gray-700">{roadmap.passRate}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">対策期間</div>
            <div className="text-gray-700">{roadmap.preparationPeriod}</div>
          </div>
        </div>
      </div>

      {/* セクション */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {roadmap.sections.map((section, index) => (
          <div key={section.id} className="roadmap-section">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
            </div>
            
            {section.description && (
              <p className="text-gray-600 mb-4">{section.description}</p>
            )}
            
            <div className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 目標 */}
      <div className="roadmap-card mt-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">目標</h3>
          <p className="text-lg text-gray-700">{roadmap.goal}</p>
        </div>
      </div>
    </div>
  );
}; 