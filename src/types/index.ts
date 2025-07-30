export interface RoadmapSection {
  id: string;
  title: string;
  description: string;
  items: string[];
  order: number;
}

export interface RoadmapData {
  id: string;
  title: string;
  subtitle?: string;
  level: string;
  passRate: string;
  preparationPeriod: string;
  goal: string;
  sections: RoadmapSection[];
  createdAt: Date;
  updatedAt: Date;
}

export interface RoadmapTemplate {
  id: string;
  name: string;
  description: string;
  data: RoadmapData;
} 