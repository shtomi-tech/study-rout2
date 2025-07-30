import React, { useState } from 'react';
import { Plus, Trash2, Edit3, Save, X } from 'lucide-react';
import { RoadmapData, RoadmapSection } from '../types';

interface RoadmapEditorProps {
  roadmap: RoadmapData;
  onSave: (roadmap: RoadmapData) => void;
  onCancel: () => void;
}

export const RoadmapEditor: React.FC<RoadmapEditorProps> = ({
  roadmap,
  onSave,
  onCancel
}) => {
  const [editedRoadmap, setEditedRoadmap] = useState<RoadmapData>(roadmap);
  const [editingSection, setEditingSection] = useState<string | null>(null);

  const updateRoadmap = (updates: Partial<RoadmapData>) => {
    setEditedRoadmap(prev => ({
      ...prev,
      ...updates,
      updatedAt: new Date()
    }));
  };

  const addSection = () => {
    const newSection: RoadmapSection = {
      id: `section-${Date.now()}`,
      title: '新しいセクション',
      description: '',
      items: [''],
      order: editedRoadmap.sections.length
    };
    
    setEditedRoadmap(prev => ({
      ...prev,
      sections: [...prev.sections, newSection],
      updatedAt: new Date()
    }));
  };

  const updateSection = (sectionId: string, updates: Partial<RoadmapSection>) => {
    setEditedRoadmap(prev => ({
      ...prev,
      sections: prev.sections.map(section =>
        section.id === sectionId ? { ...section, ...updates } : section
      ),
      updatedAt: new Date()
    }));
  };

  const removeSection = (sectionId: string) => {
    setEditedRoadmap(prev => ({
      ...prev,
      sections: prev.sections.filter(section => section.id !== sectionId),
      updatedAt: new Date()
    }));
  };

  const addItem = (sectionId: string) => {
    updateSection(sectionId, {
      items: [...editedRoadmap.sections.find(s => s.id === sectionId)!.items, '']
    });
  };

  const updateItem = (sectionId: string, itemIndex: number, value: string) => {
    const section = editedRoadmap.sections.find(s => s.id === sectionId);
    if (!section) return;

    const newItems = [...section.items];
    newItems[itemIndex] = value;

    updateSection(sectionId, { items: newItems });
  };

  const removeItem = (sectionId: string, itemIndex: number) => {
    const section = editedRoadmap.sections.find(s => s.id === sectionId);
    if (!section) return;

    const newItems = section.items.filter((_, index) => index !== itemIndex);
    updateSection(sectionId, { items: newItems });
  };

  const handleSave = () => {
    onSave(editedRoadmap);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">ロードマップ編集</h1>
        <div className="flex gap-2">
          <button
            onClick={handleSave}
            className="btn-primary flex items-center gap-2"
          >
            <Save size={20} />
            保存
          </button>
          <button
            onClick={onCancel}
            className="btn-secondary flex items-center gap-2"
          >
            <X size={20} />
            キャンセル
          </button>
        </div>
      </div>

      {/* 基本情報 */}
      <div className="roadmap-card mb-6">
        <h2 className="text-xl font-semibold mb-4">基本情報</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              タイトル
            </label>
            <input
              type="text"
              value={editedRoadmap.title}
              onChange={(e) => updateRoadmap({ title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              レベル
            </label>
            <input
              type="text"
              value={editedRoadmap.level}
              onChange={(e) => updateRoadmap({ level: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              合格率
            </label>
            <input
              type="text"
              value={editedRoadmap.passRate}
              onChange={(e) => updateRoadmap({ passRate: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              対策期間
            </label>
            <input
              type="text"
              value={editedRoadmap.preparationPeriod}
              onChange={(e) => updateRoadmap({ preparationPeriod: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              目標
            </label>
            <input
              type="text"
              value={editedRoadmap.goal}
              onChange={(e) => updateRoadmap({ goal: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* セクション */}
      <div className="roadmap-card">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">セクション</h2>
          <button
            onClick={addSection}
            className="btn-primary flex items-center gap-2"
          >
            <Plus size={20} />
            セクション追加
          </button>
        </div>

        <div className="space-y-4">
          {editedRoadmap.sections.map((section) => (
            <div key={section.id} className="roadmap-section">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <input
                    type="text"
                    value={section.title}
                    onChange={(e) => updateSection(section.id, { title: e.target.value })}
                    className="text-lg font-semibold bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 w-full"
                    placeholder="セクションタイトル"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setEditingSection(editingSection === section.id ? null : section.id)}
                    className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Edit3 size={16} />
                  </button>
                  <button
                    onClick={() => removeSection(section.id)}
                    className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              {editingSection === section.id && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      説明
                    </label>
                    <textarea
                      value={section.description}
                      onChange={(e) => updateSection(section.id, { description: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={2}
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-sm font-medium text-gray-700">
                        項目
                      </label>
                      <button
                        onClick={() => addItem(section.id)}
                        className="text-sm text-blue-600 hover:text-blue-700"
                      >
                        + 項目追加
                      </button>
                    </div>
                    <div className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex gap-2">
                          <input
                            type="text"
                            value={item}
                            onChange={(e) => updateItem(section.id, itemIndex, e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="項目を入力"
                          />
                          <button
                            onClick={() => removeItem(section.id, itemIndex)}
                            className="px-3 py-2 text-red-600 hover:text-red-700"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 