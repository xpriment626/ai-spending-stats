import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, DollarSign, AlertTriangle, TrendingDown, Zap } from 'lucide-react';
import { ServiceOpportunity, ImplementationGap } from '../types';

interface ServiceOpportunityMatrixProps {
  opportunities: ServiceOpportunity[];
  gaps: ImplementationGap[];
}

const ServiceOpportunityMatrix: React.FC<ServiceOpportunityMatrixProps> = ({ opportunities, gaps }) => {
  const [selectedOpportunity, setSelectedOpportunity] = useState<ServiceOpportunity | null>(null);
  const [activeView, setActiveView] = useState<'matrix' | 'gaps'>('gaps');

  const getOpportunityIntensity = (score: number) => {
    if (score >= 85) return { intensity: 'opacity-95', size: 'w-8 h-8', label: 'Critical' };
    if (score >= 70) return { intensity: 'opacity-80', size: 'w-7 h-7', label: 'High' };
    if (score >= 55) return { intensity: 'opacity-65', size: 'w-6 h-6', label: 'Medium' };
    return { intensity: 'opacity-50', size: 'w-5 h-5', label: 'Low' };
  };

  const getGapTrendIcon = (trend: string) => {
    switch (trend) {
      case 'widening':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      case 'narrowing':
        return <TrendingDown className="w-4 h-4 text-green-500 rotate-180" />;
      default:
        return <div className="w-4 h-4 bg-yellow-500 rounded-full" />;
    }
  };

  // Group opportunities by sector and company size for matrix layout
  const sectors = [...new Set(opportunities.map(o => o.sector))];
  const companySizes = ['Enterprise ($1B+)', 'Large ($100M-$1B)', 'Mid-Market ($10M-$100M)'];

  const getOpportunityByCell = (sector: string, size: string) => {
    return opportunities.find(o => o.sector === sector && o.companySize === size);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="card"
    >
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              AI Services Market Opportunity
            </h2>
            <p className="text-gray-600 text-sm">
              High spending + Low implementation success = High service opportunity
            </p>
          </div>

          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveView('gaps')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeView === 'gaps'
                  ? 'bg-white shadow-sm text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Implementation Gaps
            </button>
            <button
              onClick={() => setActiveView('matrix')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeView === 'matrix'
                  ? 'bg-white shadow-sm text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Opportunity Matrix
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeView === 'matrix' ? (
          <motion.div
            key="matrix"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Matrix Grid */}
            <div className="mb-6">
              <div className="grid grid-cols-4 gap-2 mb-4">
                {/* Header */}
                <div className="text-xs font-medium text-gray-500 p-2">Sector / Size</div>
                {companySizes.map(size => (
                  <div key={size} className="text-xs font-medium text-gray-500 p-2 text-center">
                    {size.split(' ')[0]}
                  </div>
                ))}

                {/* Matrix cells */}
                {sectors.map(sector => (
                  <React.Fragment key={sector}>
                    <div className="text-xs font-medium text-gray-700 p-2 bg-gray-50 rounded-md">
                      {sector}
                    </div>
                    {companySizes.map(size => {
                      const opportunity = getOpportunityByCell(sector, size);
                      if (!opportunity) {
                        return <div key={`${sector}-${size}`} className="p-2" />;
                      }

                      const intensity = getOpportunityIntensity(opportunity.opportunityScore);

                      return (
                        <motion.div
                          key={`${sector}-${size}`}
                          whileHover={{ scale: 1.1 }}
                          className="p-2 flex items-center justify-center cursor-pointer"
                          onClick={() => setSelectedOpportunity(
                            selectedOpportunity === opportunity ? null : opportunity
                          )}
                        >
                          <div
                            className={`rounded-full ${intensity.size} ${intensity.intensity} flex items-center justify-center shadow-lg border-2 border-white`}
                            style={{ backgroundColor: opportunity.color }}
                          >
                            <Target className="w-3 h-3 text-white" />
                          </div>
                        </motion.div>
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full opacity-95" />
                  <span>Critical (85+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full opacity-80" />
                  <span>High (70-84)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full opacity-65" />
                  <span>Medium (55-69)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full opacity-50" />
                  <span>Low (&lt;55)</span>
                </div>
              </div>
            </div>

            {/* Selected Opportunity Details */}
            <AnimatePresence>
              {selectedOpportunity && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-100"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {selectedOpportunity.sector} • {selectedOpportunity.companySize}
                      </h3>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          <span>${selectedOpportunity.aiSpending}M AI spending</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-600" />
                          <span>{selectedOpportunity.implementationSuccess}% success rate</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-purple-600" />
                          <span>${selectedOpportunity.serviceRevenuePotential}M potential</span>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <h4 className="font-medium text-gray-700 mb-2">Key Implementation Challenges:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedOpportunity.challenges.map((challenge, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white/70 rounded-full text-xs text-gray-700 border border-gray-200"
                          >
                            {challenge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key="gaps"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Implementation Gaps */}
            <div className="space-y-4">
              {gaps.map((gap, index) => (
                <motion.div
                  key={gap.metric}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h3 className="font-medium text-gray-800">{gap.metric}</h3>
                      {getGapTrendIcon(gap.trend)}
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-red-600">
                        {gap.gapSize}% gap
                      </div>
                      <div className="text-xs text-gray-500 capitalize">
                        {gap.trend}
                      </div>
                    </div>
                  </div>

                  {/* Gap visualization */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                      <span>Investment Level</span>
                      <span>Realization Level</span>
                    </div>
                    <div className="relative">
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: `${gap.investmentLevel}%` }}
                        />
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden mt-1">
                        <div
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: `${gap.realizationLevel}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>{gap.investmentLevel}%</span>
                      <span>{gap.realizationLevel}%</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600">{gap.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Summary stats */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center bg-red-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-red-600">78%</div>
                <div className="text-sm text-gray-600">Average Implementation Gap</div>
              </div>
              <div className="text-center bg-orange-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-600">Multi-Billion</div>
                <div className="text-sm text-gray-600">Total Service Opportunity</div>
              </div>
              <div className="text-center bg-green-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">46%</div>
                <div className="text-sm text-gray-600">Cite Talent Gaps</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ServiceOpportunityMatrix;