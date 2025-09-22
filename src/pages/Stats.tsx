import Header from '../components/Header';
import KeyMetrics from '../components/KeyMetrics';
import SpendingChart from '../components/SpendingChart';
import ServiceOpportunityMatrix from '../components/ServiceOpportunityMatrix';
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

        <KeyMetrics metrics={keyMetrics} />

        <div className="mb-8">
          <SpendingChart data={spendingTrend} />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          <ServiceOpportunityMatrix
            opportunities={serviceOpportunities}
            gaps={implementationGaps}
          />
          <RegionalMap data={regionalData} />
        </div>

        <IndustryBreakdown
          industryData={industryBreakdown}
          companySizeData={companySizeData}
        />

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>Data sources: IDC, McKinsey, Andreessen Horowitz, IBM, Menlo Ventures</p>
          <p className="mt-1">Last updated: {new Date().toLocaleDateString()}</p>
        </footer>
      </div>
    </div>
  );
}

export default Stats;