import { Link } from 'react-router-dom';
import Header from '../components/Header';
import AIParadoxHero from '../components/AIParadoxHero';
import KeyMetrics from '../components/KeyMetrics';
import ServiceOpportunityMatrix from '../components/ServiceOpportunityMatrix';
import ImplementationTimelineComparison from '../components/ImplementationTimelineComparison';
import SpendingChart from '../components/SpendingChart';
import RegionalMap from '../components/RegionalMap';
import IndustryBreakdown from '../components/IndustryBreakdown';
import { mockDashboardData } from '../data/mockData';
// import { NetrunnerBackground } from '../components/NetrunnerBackground';

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
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-950 to-black relative">
      {/* <NetrunnerBackground /> */}

      {/* Header Navigation */}
      <header className="flex-none px-8 py-6 relative z-10">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center">
            <Link to="/" className="cursor-pointer">
              <img
                src="/assets/arasaka-logo.png"
                alt="Arasaka Labs"
                className="h-12 w-auto hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="netrunner-nav-link font-medium">Home</Link>
            {/* <Link to="/blog" className="netrunner-nav-link font-medium">Blog</Link> */}
            <Link to="/thesis" className="netrunner-nav-link font-medium text-white">Thesis</Link>
            <Link to="/contact" className="netrunner-glass text-neutral-200 px-4 py-2 rounded-lg hover:text-white transition-all font-medium">Contact</Link>
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl relative z-10">
        <Header />

        {/* Phase 1: Lead with the Paradox */}
        <AIParadoxHero
          totalInvestment="$154.2B"
          implementationGap={78}
          revenueImpactFailure={19}
          serviceOpportunity="Multi-billion dollar"
          yearOverYearGrowth={85}
        />

        {/* Thesis Introduction */}
        <div className="vercel-content-card p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">The Deployment Gap Thesis</h2>
          <p className="text-lg text-white max-w-4xl mx-auto leading-relaxed">
            AI tooling infrastructure evolves exponentially while enterprise implementation capabilities advance linearly.
            This fundamental mismatch creates persistent gaps between investment and outcomes, generating unprecedented
            opportunities for forward-deployed engineering services.
          </p>
        </div>

        {/* Phase 2: Show Investment vs Reality Disconnect */}
        <KeyMetrics metrics={keyMetrics} />

        {/* Section Divider */}
        <div className="vercel-content-card p-6 mb-8 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">Part I: The Implementation Reality</h3>
          <p className="text-neutral-300">
            Examining the specific gaps between AI investment and successful deployment
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


        {/* Section Divider */}
        <div className="vercel-content-card p-6 mb-8 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">Part II: Market Scale & Distribution</h3>
          <p className="text-neutral-300">
            Understanding the trajectory and geographic distribution of AI investment
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

        {/* Thesis Conclusion */}
        <div className="vercel-content-card p-8 mb-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">The Service Opportunity</h3>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-lg text-neutral-300 leading-relaxed">
              The data reveals a clear pattern: as AI tooling accelerates exponentially, enterprise implementation
              capabilities evolve linearly. This creates a persistent and growing gap that high-touch engineering and strategic
              services can profitably address.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Organizations that bridge this gap through forward-deployed engineering teams achieve 3.5x higher
              success rates and compress time-to-value from 24 months to 11 months, creating sustainable competitive
              advantages in an AI-driven economy.
            </p>
          </div>
        </div>

        <footer className="mt-12 text-center text-sm text-neutral-500">
          <p className="text-neutral-400">Data sources: IDC, McKinsey, Andreessen Horowitz, IBM, Menlo Ventures</p>
          <p className="mt-1 text-neutral-500">Last updated: {new Date().toLocaleDateString()}</p>
          <div className="mt-4 pt-4 border-t border-neutral-800">
            <p className="text-neutral-400">Research by Arasaka Labs</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Stats;