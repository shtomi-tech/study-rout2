import { RoadmapData } from '../types';

/**
 * 学習ルートをIDで検索する
 */
export const findRoadmapById = (
  roadmaps: RoadmapData[],
  id: string
): RoadmapData | undefined => {
  return roadmaps.find(roadmap => roadmap.id === id);
};

/**
 * 学習ルートをタイトルで検索する
 */
export const findRoadmapByTitle = (
  roadmaps: RoadmapData[],
  title: string
): RoadmapData | undefined => {
  return roadmaps.find(roadmap => 
    roadmap.title.toLowerCase().includes(title.toLowerCase())
  );
};

/**
 * 学習ルートをレベルでフィルタリングする
 */
export const filterRoadmapsByLevel = (
  roadmaps: RoadmapData[],
  level: string
): RoadmapData[] => {
  return roadmaps.filter(roadmap => 
    roadmap.level.toLowerCase().includes(level.toLowerCase())
  );
};

/**
 * 学習ルートを準備期間でソートする
 */
export const sortRoadmapsByPreparationPeriod = (
  roadmaps: RoadmapData[]
): RoadmapData[] => {
  return [...roadmaps].sort((a, b) => {
    const aPeriod = parseInt(a.preparationPeriod.match(/\d+/)?.[0] || '0');
    const bPeriod = parseInt(b.preparationPeriod.match(/\d+/)?.[0] || '0');
    return aPeriod - bPeriod;
  });
};

/**
 * 学習ルートを合格率でソートする
 */
export const sortRoadmapsByPassRate = (
  roadmaps: RoadmapData[]
): RoadmapData[] => {
  return [...roadmaps].sort((a, b) => {
    const aRate = parseInt(a.passRate.replace('%', ''));
    const bRate = parseInt(b.passRate.replace('%', ''));
    return bRate - aRate; // 降順
  });
};

/**
 * 日付をフォーマットする
 */
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * 学習期間を計算する
 */
export const calculateStudyDuration = (sections: RoadmapData['sections']): string => {
  const totalMonths = sections.reduce((total, section) => {
    const months = parseInt(section.duration?.match(/\d+/)?.[0] || '0');
    return total + months;
  }, 0);
  
  return `約${totalMonths}ヶ月`;
};

/**
 * 学習進捗率を計算する
 */
export const calculateProgress = (
  completedSections: number,
  totalSections: number
): number => {
  return Math.round((completedSections / totalSections) * 100);
};

/**
 * 色の値を検証する
 */
export const isValidColor = (color: string): boolean => {
  const s = new Option().style;
  s.color = color;
  return s.color !== '';
};

/**
 * デバウンス関数
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * ローカルストレージのヘルパー関数
 */
export const storage = {
  get: <T>(key: string, defaultValue: T): T => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  },
  
  set: <T>(key: string, value: T): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  },
  
  remove: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Failed to remove from localStorage:', error);
    }
  }
}; 