export interface SpendingData {
  year: number;
  totalSpending: number; // in billions USD
  growth: number; // percentage
  enterpriseSpending: number;
  infrastructureSpending: number;
  softwareSpending: number;
}

export interface RegionalData {
  region: string;
  country?: string;
  spending: number; // in billions USD
  companies: number;
  adoptionRate: number; // percentage
  lat?: number;
  lng?: number;
}

export interface IndustryData {
  industry: string;
  spending: number; // in billions USD
  companies: number;
  averageSpend: number; // per company in millions
  growth: number; // percentage
  color: string;
}

export interface CompanySizeData {
  sizeCategory: string;
  revenueRange: string;
  avgSpending: number; // percentage of revenue
  companies: number;
  totalSpending: number; // in billions
}

export interface KeyMetric {
  title: string;
  value: string;
  change: number;
  trend: 'up' | 'down' | 'stable';
  description: string;
}

export interface TimelineEvent {
  year: number;
  month?: number;
  title: string;
  description: string;
  value?: number;
  type: 'milestone' | 'funding' | 'adoption' | 'regulation';
}

export interface DashboardData {
  keyMetrics: KeyMetric[];
  spendingTrend: SpendingData[];
  regionalData: RegionalData[];
  industryBreakdown: IndustryData[];
  companySizeData: CompanySizeData[];
  timeline: TimelineEvent[];
  lastUpdated: string;
}