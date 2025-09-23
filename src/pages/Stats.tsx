import Header from '../components/Header';
import AIParadoxHero from '../components/AIParadoxHero';
import KeyMetrics from '../components/KeyMetrics';
import ServiceOpportunityMatrix from '../components/ServiceOpportunityMatrix';
import ImplementationTimelineComparison from '../components/ImplementationTimelineComparison';
import ServiceROICalculator from '../components/ServiceROICalculator';
import SpendingChart from '../components/SpendingChart';
import RegionalMap from '../components/RegionalMap';
import IndustryBreakdown from '../components/IndustryBreakdown';
import { mockDashboardData } from '../data/mockData';

function Stats() {
  const {
    keyMetrics,
    spendingTrend,
    serviceOpportunities,
    implementationGaps,
    regionalData,
    industryBreakdown,
    companySizeData
  } = mockDashboardData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Header />

        {/* Phase 1: Lead with the Paradox */}
        <AIParadoxHero
          totalInvestment="$154.2B"
          implementationGap={78}
          revenueImpactFailure={19}
          serviceOpportunity="Multi-billion dollar"
          yearOverYearGrowth={85}
        />

        {/* Narrative Transition */}
        <div className="text-center mb-8 p-6 bg-white/70 backdrop-blur-sm rounded-lg border border-white/20">
          <p className="text-lg text-gray-700 font-medium">
            Let's examine this paradox in detail: massive investment growth paired with stagnant implementation success
          </p>
        </div>

        {/* Phase 2: Show Investment vs Reality Disconnect */}
        <KeyMetrics metrics={keyMetrics} />

        {/* Narrative Transition */}
        <div className="text-center mb-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <p className="text-gray-700 font-medium">
            Now let's explore the specific implementation gaps creating this service opportunity
          </p>
        </div>

        {/* Phase 3: Deep Dive into Implementation Gaps (Core GTM Component) */}
        <div className="mb-8">
          <ServiceOpportunityMatrix
            opportunities={serviceOpportunities}
            gaps={implementationGaps}
          />
        </div>

        {/* Phase 3b: Timeline Comparison */}
        <ImplementationTimelineComparison />

        {/* Phase 3c: Interactive ROI Calculator */}
        <ServiceROICalculator />

        {/* Narrative Transition */}
        <div className="text-center mb-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-gray-700 font-medium">
            To understand the scale of this opportunity, let's examine the spending trajectory and market distribution
          </p>
        </div>

        {/* Phase 4: Prove the Scale */}
        <div className="mb-8">
          <SpendingChart data={spendingTrend} />
        </div>

        {/* Supporting Evidence */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          <RegionalMap data={regionalData} />
          <IndustryBreakdown
            industryData={industryBreakdown}
            companySizeData={companySizeData}
          />
        </div>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>Data sources: IDC, McKinsey, Andreessen Horowitz, IBM, Menlo Ventures</p>
          <p className="mt-1">Last updated: {new Date().toLocaleDateString()}</p>
        </footer>
      </div>
    </div>
  );
}

export default Stats;