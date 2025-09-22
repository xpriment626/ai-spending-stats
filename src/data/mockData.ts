import { DashboardData, SpendingData, RegionalData, IndustryData, CompanySizeData, KeyMetric, TimelineEvent, ServiceOpportunity, ImplementationGap } from '../types';

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

// Service opportunity matrix - high spending + low implementation success = high service opportunity
export const serviceOpportunityData: ServiceOpportunity[] = [
  // Enterprise sector
  { sector: 'Financial Services', companySize: 'Enterprise ($1B+)', aiSpending: 2890, implementationSuccess: 15, opportunityScore: 92, serviceRevenuePotential: 450, challenges: ['Regulatory compliance', 'Legacy system integration', 'Risk management'], color: '#EF4444' },
  { sector: 'Healthcare', companySize: 'Enterprise ($1B+)', aiSpending: 2340, implementationSuccess: 18, opportunityScore: 89, serviceRevenuePotential: 380, challenges: ['Data privacy', 'Clinical validation', 'Workflow integration'], color: '#EF4444' },
  { sector: 'Manufacturing', companySize: 'Enterprise ($1B+)', aiSpending: 1870, implementationSuccess: 22, opportunityScore: 85, serviceRevenuePotential: 320, challenges: ['Operational technology integration', 'Safety requirements', 'Workforce adaptation'], color: '#F97316' },

  // Large company sector
  { sector: 'Technology', companySize: 'Large ($100M-$1B)', aiSpending: 890, implementationSuccess: 35, opportunityScore: 78, serviceRevenuePotential: 180, challenges: ['Talent acquisition', 'Infrastructure scaling', 'Product integration'], color: '#F97316' },
  { sector: 'Retail & E-commerce', companySize: 'Large ($100M-$1B)', aiSpending: 670, implementationSuccess: 28, opportunityScore: 82, serviceRevenuePotential: 140, challenges: ['Customer data integration', 'Real-time processing', 'Personalization'], color: '#F97316' },
  { sector: 'Financial Services', companySize: 'Large ($100M-$1B)', aiSpending: 780, implementationSuccess: 31, opportunityScore: 79, serviceRevenuePotential: 160, challenges: ['Regulatory compliance', 'Risk assessment', 'Customer trust'], color: '#F97316' },

  // Mid-market opportunities
  { sector: 'Healthcare', companySize: 'Mid-Market ($10M-$100M)', aiSpending: 340, implementationSuccess: 42, opportunityScore: 68, serviceRevenuePotential: 75, challenges: ['Budget constraints', 'Technical expertise', 'Vendor selection'], color: '#EAB308' },
  { sector: 'Manufacturing', companySize: 'Mid-Market ($10M-$100M)', aiSpending: 280, implementationSuccess: 38, opportunityScore: 71, serviceRevenuePotential: 65, challenges: ['Process modernization', 'Skills gap', 'ROI measurement'], color: '#EAB308' },
  { sector: 'Professional Services', companySize: 'Mid-Market ($10M-$100M)', aiSpending: 190, implementationSuccess: 45, opportunityScore: 64, serviceRevenuePotential: 45, challenges: ['Client adoption', 'Service delivery', 'Competitive differentiation'], color: '#EAB308' },

  // Lower opportunity (higher success rates)
  { sector: 'Technology', companySize: 'Mid-Market ($10M-$100M)', aiSpending: 420, implementationSuccess: 58, opportunityScore: 52, serviceRevenuePotential: 85, challenges: ['Resource allocation', 'Market positioning', 'Technical debt'], color: '#22C55E' },
  { sector: 'Media & Entertainment', companySize: 'Large ($100M-$1B)', aiSpending: 310, implementationSuccess: 52, opportunityScore: 56, serviceRevenuePotential: 65, challenges: ['Content automation', 'Creative workflow', 'Rights management'], color: '#22C55E' },
  { sector: 'Energy & Utilities', companySize: 'Enterprise ($1B+)', aiSpending: 1240, implementationSuccess: 48, opportunityScore: 61, serviceRevenuePotential: 210, challenges: ['Infrastructure modernization', 'Regulatory oversight', 'Grid integration'], color: '#84CC16' },
];

// Implementation gap analysis - showcasing the acceleration disconnect
export const implementationGapData: ImplementationGap[] = [
  { metric: 'Infrastructure Investment', investmentLevel: 97, realizationLevel: 19, gapSize: 78, description: 'Massive infrastructure spending vs. minimal revenue impact', trend: 'widening' },
  { metric: 'Talent & Skills Readiness', investmentLevel: 32, realizationLevel: 15, gapSize: 17, description: '46% cite talent gaps as primary implementation barrier', trend: 'widening' },
  { metric: 'Tool Availability', investmentLevel: 89, realizationLevel: 23, gapSize: 66, description: 'Abundant AI tools but low successful enterprise adoption', trend: 'widening' },
  { metric: 'Process Integration', investmentLevel: 45, realizationLevel: 28, gapSize: 17, description: 'Legacy systems struggle with AI integration complexity', trend: 'stable' },
  { metric: 'ROI Achievement', investmentLevel: 78, realizationLevel: 20, gapSize: 58, description: 'Only 20% of businesses see earnings benefits from AI', trend: 'stable' },
  { metric: 'Regulatory Compliance', investmentLevel: 67, realizationLevel: 34, gapSize: 33, description: 'AI governance frameworks lag behind implementation needs', trend: 'narrowing' },
];

export const mockDashboardData: DashboardData = {
  keyMetrics,
  spendingTrend: spendingTrendData,
  regionalData,
  industryBreakdown: industryData,
  companySizeData,
  serviceOpportunities: serviceOpportunityData,
  implementationGaps: implementationGapData,
  lastUpdated: new Date().toISOString(),
};