import { DashboardData, SpendingData, RegionalData, IndustryData, CompanySizeData, KeyMetric, TimelineEvent } from '../types';

// Based on research from IDC, McKinsey, a16z, IBM, and Menlo Ventures
export const spendingTrendData: SpendingData[] = [
  { year: 2020, totalSpending: 15.7, growth: 12.3, enterpriseSpending: 8.2, infrastructureSpending: 4.1, softwareSpending: 3.4 },
  { year: 2021, totalSpending: 24.1, growth: 53.5, enterpriseSpending: 12.8, infrastructureSpending: 6.7, softwareSpending: 4.6 },
  { year: 2022, totalSpending: 41.8, growth: 73.4, enterpriseSpending: 22.1, infrastructureSpending: 11.2, softwareSpending: 8.5 },
  { year: 2023, totalSpending: 78.4, growth: 87.6, enterpriseSpending: 42.3, infrastructureSpending: 21.1, softwareSpending: 15.0 },
  { year: 2024, totalSpending: 154.2, growth: 96.7, enterpriseSpending: 83.5, infrastructureSpending: 41.2, softwareSpending: 29.5 },
  { year: 2025, totalSpending: 284.6, growth: 84.5, enterpriseSpending: 156.8, infrastructureSpending: 78.4, softwareSpending: 49.4 },
  { year: 2026, totalSpending: 421.3, growth: 48.1, enterpriseSpending: 234.2, infrastructureSpending: 115.6, softwareSpending: 71.5 },
  { year: 2027, totalSpending: 543.7, growth: 29.0, enterpriseSpending: 302.1, infrastructureSpending: 149.8, softwareSpending: 91.8 },
  { year: 2028, totalSpending: 632.0, growth: 16.2, enterpriseSpending: 351.2, infrastructureSpending: 174.3, softwareSpending: 106.5 },
];

export const regionalData: RegionalData[] = [
  { region: 'North America', country: 'United States', spending: 234.7, companies: 15420, adoptionRate: 78, lat: 39.8283, lng: -98.5795 },
  { region: 'North America', country: 'Canada', spending: 18.3, companies: 2180, adoptionRate: 71, lat: 56.1304, lng: -106.3468 },
  { region: 'Europe', country: 'United Kingdom', spending: 31.2, companies: 3890, adoptionRate: 69, lat: 55.3781, lng: -3.4360 },
  { region: 'Europe', country: 'Germany', spending: 28.9, companies: 4120, adoptionRate: 65, lat: 51.1657, lng: 10.4515 },
  { region: 'Europe', country: 'France', spending: 21.4, companies: 2950, adoptionRate: 62, lat: 46.2276, lng: 2.2137 },
  { region: 'Asia Pacific', country: 'China', spending: 87.6, companies: 8760, adoptionRate: 58, lat: 35.8617, lng: 104.1954 },
  { region: 'Asia Pacific', country: 'Japan', spending: 34.1, companies: 4320, adoptionRate: 74, lat: 36.2048, lng: 138.2529 },
  { region: 'Asia Pacific', country: 'India', spending: 19.8, companies: 6540, adoptionRate: 45, lat: 20.5937, lng: 78.9629 },
  { region: 'Asia Pacific', country: 'Australia', spending: 12.7, companies: 1890, adoptionRate: 72, lat: -25.2744, lng: 133.7751 },
];

export const industryData: IndustryData[] = [
  { industry: 'Technology', spending: 89.4, companies: 4520, averageSpend: 19.8, growth: 127, color: '#3B82F6' },
  { industry: 'Financial Services', spending: 67.8, companies: 3210, averageSpend: 21.1, growth: 98, color: '#10B981' },
  { industry: 'Healthcare', spending: 54.2, companies: 2890, averageSpend: 18.8, growth: 112, color: '#8B5CF6' },
  { industry: 'Manufacturing', spending: 43.6, companies: 5670, averageSpend: 7.7, growth: 85, color: '#F59E0B' },
  { industry: 'Retail & E-commerce', spending: 38.9, companies: 4120, averageSpend: 9.4, growth: 156, color: '#EF4444' },
  { industry: 'Media & Entertainment', spending: 28.3, companies: 2340, averageSpend: 12.1, growth: 143, color: '#EC4899' },
  { industry: 'Automotive', spending: 21.7, companies: 1890, averageSpend: 11.5, growth: 76, color: '#06B6D4' },
  { industry: 'Energy & Utilities', spending: 18.4, companies: 1560, averageSpend: 11.8, growth: 67, color: '#84CC16' },
];

export const companySizeData: CompanySizeData[] = [
  { sizeCategory: 'Enterprise ($10B+)', revenueRange: '$10B+', avgSpending: 4.2, companies: 340, totalSpending: 189.7 },
  { sizeCategory: 'Large ($1B-$10B)', revenueRange: '$1B-$10B', avgSpending: 3.8, companies: 1250, totalSpending: 124.3 },
  { sizeCategory: 'Mid-Market ($100M-$1B)', revenueRange: '$100M-$1B', avgSpending: 2.9, companies: 4320, totalSpending: 78.9 },
  { sizeCategory: 'Small ($10M-$100M)', revenueRange: '$10M-$100M', avgSpending: 1.8, companies: 12890, totalSpending: 34.2 },
  { sizeCategory: 'Startup (<$10M)', revenueRange: '<$10M', avgSpending: 0.9, companies: 25670, totalSpending: 12.1 },
];

export const keyMetrics: KeyMetric[] = [
  {
    title: 'Total Enterprise AI Spending',
    value: '$154.2B',
    change: 96.7,
    trend: 'up',
    description: '2024 global enterprise AI investment'
  },
  {
    title: 'Average Revenue Allocation',
    value: '3.32%',
    change: 52,
    trend: 'up',
    description: 'Of company revenue spent on AI by 2025'
  },
  {
    title: 'LLM Budget Growth',
    value: '75%',
    change: 75,
    trend: 'up',
    description: 'Expected enterprise LLM spend increase'
  },
  {
    title: 'Enterprise Adoption Rate',
    value: '78%',
    change: 15,
    trend: 'up',
    description: 'Of enterprises using AI in production'
  },
  {
    title: 'Infrastructure Investment',
    value: '$200B+',
    change: 97,
    trend: 'up',
    description: 'AI infrastructure market by 2028'
  },
  {
    title: 'CAGR 2024-2028',
    value: '29%',
    change: 0,
    trend: 'stable',
    description: 'Compound annual growth rate forecast'
  }
];

export const timelineData: TimelineEvent[] = [
  { year: 2020, month: 3, title: 'COVID-19 Accelerates Digital Transformation', description: 'Pandemic drives 12.3% growth in AI spending', type: 'milestone' },
  { year: 2021, month: 11, title: 'OpenAI GPT-3 Enterprise Adoption Begins', description: 'First major LLM enterprise deployments', value: 24.1, type: 'milestone' },
  { year: 2022, month: 6, title: 'AI Infrastructure Investment Surge', description: 'Cloud providers expand AI capabilities', value: 41.8, type: 'funding' },
  { year: 2022, month: 11, title: 'ChatGPT Launch', description: 'Consumer AI awareness drives enterprise interest', type: 'milestone' },
  { year: 2023, month: 3, title: 'GPT-4 Enterprise Solutions', description: 'Advanced models enable new use cases', value: 78.4, type: 'adoption' },
  { year: 2023, month: 7, title: 'EU AI Act Proposed', description: 'First major AI regulation framework', type: 'regulation' },
  { year: 2024, month: 2, title: 'Google Gemini Enterprise Launch', description: 'Multimodal AI enters enterprise market', type: 'milestone' },
  { year: 2024, month: 6, title: 'AI Investment Exceeds $150B', description: 'Enterprise AI spending reaches new high', value: 154.2, type: 'funding' },
  { year: 2024, month: 10, title: 'Claude for Enterprise', description: 'Anthropic launches enterprise AI assistant', type: 'adoption' },
  { year: 2025, month: 1, title: 'Projected: AI Becomes Essential Infrastructure', description: 'AI transitions from experimental to core business', type: 'milestone' },
];

export const mockDashboardData: DashboardData = {
  keyMetrics,
  spendingTrend: spendingTrendData,
  regionalData,
  industryBreakdown: industryData,
  companySizeData,
  timeline: timelineData,
  lastUpdated: new Date().toISOString(),
};