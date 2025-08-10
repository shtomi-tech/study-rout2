import { RoadmapData } from '../types';
import { modernJapaneseRoutes, classicalJapaneseRoutes } from './japaneseRoutes';
import { humanitiesMathRoutes, scienceMathRoutes } from './mathRoutes';
import { englishRoutes } from './englishRoutes';

// 統合された学習ルートデータ
export const learningRoutes: Record<string, Record<string, RoadmapData[]>> = {
  japanese: {
    modern: modernJapaneseRoutes,
    classical: classicalJapaneseRoutes
  },
  math: {
    humanities: humanitiesMathRoutes,
    science: scienceMathRoutes
  },
  english: {
    exam: englishRoutes
  }
};

// 個別のルートもエクスポート
export { modernJapaneseRoutes, classicalJapaneseRoutes } from './japaneseRoutes';
export { humanitiesMathRoutes, scienceMathRoutes } from './mathRoutes';
export { englishRoutes } from './englishRoutes'; 