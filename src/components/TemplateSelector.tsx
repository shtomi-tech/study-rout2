import React from 'react';
import { BookOpen, Plus } from 'lucide-react';
import { RoadmapTemplate } from '../types';

interface TemplateSelectorProps {
  templates: RoadmapTemplate[];
  onSelectTemplate: (template: RoadmapTemplate) => void;
  onCreateNew: () => void;
}

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  templates,
  onSelectTemplate,
  onCreateNew
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          学習ロードマップ作成ツール
        </h1>
        <p className="text-lg text-gray-600">
          国語・数学・英語を中心とした効率的な学習計画を立てて、目標達成を目指しましょう
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* 新規作成カード */}
        <div
          onClick={onCreateNew}
          className="roadmap-card cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-dashed border-blue-300 hover:border-blue-500"
        >
          <div className="text-center py-8">
            <Plus size={48} className="mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              新規作成
            </h3>
            <p className="text-gray-600">
              ゼロからロードマップを作成
            </p>
          </div>
        </div>

        {/* テンプレートカード */}
        {templates.map((template) => (
          <div
            key={template.id}
            onClick={() => onSelectTemplate(template)}
            className="roadmap-card cursor-pointer hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-3 mb-4">
              <BookOpen size={24} className="text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {template.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {template.description}
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">レベル:</span>
                <span className="font-medium">{template.data.level}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">合格率:</span>
                <span className="font-medium">{template.data.passRate}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">対策期間:</span>
                <span className="font-medium">{template.data.preparationPeriod}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-gray-500 text-sm">
          テンプレートを選択するか、新規作成から始めてください
        </p>
      </div>
    </div>
  );
}; 