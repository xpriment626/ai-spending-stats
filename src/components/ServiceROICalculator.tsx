import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, AlertCircle, CheckCircle, Zap } from 'lucide-react';

interface CalculationInputs {
  investmentAmount: number;
  companySize: 'startup' | 'small' | 'medium' | 'large' | 'enterprise';
  industry: 'technology' | 'financial' | 'healthcare' | 'manufacturing' | 'retail' | 'other';
  hasInternalTalent: boolean;
  timelinePreference: 'aggressive' | 'moderate' | 'conservative';
}

interface CalculationResults {
  diySuccessProbability: number;
  serviceSuccessProbability: number;
  diyExpectedROI: number;
  serviceExpectedROI: number;
  diyTimeToValue: number;
  serviceTimeToValue: number;
  servicePremium: number;
  netBenefit: number;
  recommendedApproach: 'DIY' | 'Service-Assisted' | 'Hybrid';
}

const ServiceROICalculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculationInputs>({
    investmentAmount: 2500000, // $2.5M default
    companySize: 'large',
    industry: 'technology',
    hasInternalTalent: false,
    timelinePreference: 'moderate'
  });

  const [results, setResults] = useState<CalculationResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const companySizeOptions = [
    { value: 'startup', label: 'Startup (<$10M)', multiplier: 0.7 },
    { value: 'small', label: 'Small ($10M-$100M)', multiplier: 0.8 },
    { value: 'medium', label: 'Medium ($100M-$1B)', multiplier: 0.9 },
    { value: 'large', label: 'Large ($1B-$10B)', multiplier: 1.0 },
    { value: 'enterprise', label: 'Enterprise ($10B+)', multiplier: 1.2 }
  ];

  const industryOptions = [
    { value: 'technology', label: 'Technology', successBonus: 0.15 },
    { value: 'financial', label: 'Financial Services', successBonus: -0.05 },
    { value: 'healthcare', label: 'Healthcare', successBonus: -0.10 },
    { value: 'manufacturing', label: 'Manufacturing', successBonus: 0.05 },
    { value: 'retail', label: 'Retail & E-commerce', successBonus: 0.10 },
    { value: 'other', label: 'Other', successBonus: 0.00 }
  ];

  const calculateROI = () => {
    setIsCalculating(true);

    // Simulate calculation delay for better UX
    setTimeout(() => {
      const companyMultiplier = companySizeOptions.find(c => c.value === inputs.companySize)?.multiplier || 1.0;
      const industryBonus = industryOptions.find(i => i.value === inputs.industry)?.successBonus || 0;
      const talentBonus = inputs.hasInternalTalent ? 0.10 : -0.15;
      const timelineMultiplier = inputs.timelinePreference === 'aggressive' ? 1.2 :
                                inputs.timelinePreference === 'conservative' ? 0.8 : 1.0;

      // Base success probabilities
      let diyBase = 22; // 22% base DIY success rate
      let serviceBase = 78; // 78% base service success rate

      // Apply modifiers
      const diySuccessProbability = Math.max(5, Math.min(95,
        diyBase + (industryBonus * 100) + (talentBonus * 100) + (companyMultiplier * 5)
      ));

      const serviceSuccessProbability = Math.max(60, Math.min(95,
        serviceBase + (industryBonus * 50) + (talentBonus * 30) + (companyMultiplier * 2)
      ));

      // Calculate expected ROI (simplified model)
      const baseROI = inputs.investmentAmount * 0.35; // 35% base ROI assumption
      const diyExpectedROI = baseROI * (diySuccessProbability / 100) * companyMultiplier;
      const serviceExpectedROI = baseROI * (serviceSuccessProbability / 100) * companyMultiplier * 1.1; // 10% service uplift

      // Time calculations
      const diyTimeToValue = Math.round(24 * timelineMultiplier); // 24 months base
      const serviceTimeToValue = Math.round(11 * timelineMultiplier); // 11 months base

      // Service premium (20-30% of investment)
      const servicePremium = inputs.investmentAmount * 0.25;

      // Net benefit
      const netBenefit = serviceExpectedROI - diyExpectedROI - servicePremium;

      // Recommendation logic
      let recommendedApproach: 'DIY' | 'Service-Assisted' | 'Hybrid';
      if (netBenefit > inputs.investmentAmount * 0.1) {
        recommendedApproach = 'Service-Assisted';
      } else if (netBenefit < -inputs.investmentAmount * 0.05) {
        recommendedApproach = 'DIY';
      } else {
        recommendedApproach = 'Hybrid';
      }

      setResults({
        diySuccessProbability: Math.round(diySuccessProbability),
        serviceSuccessProbability: Math.round(serviceSuccessProbability),
        diyExpectedROI: Math.round(diyExpectedROI),
        serviceExpectedROI: Math.round(serviceExpectedROI),
        diyTimeToValue,
        serviceTimeToValue,
        servicePremium: Math.round(servicePremium),
        netBenefit: Math.round(netBenefit),
        recommendedApproach
      });

      setIsCalculating(false);
    }, 1000);
  };

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getRecommendationColor = (approach: string) => {
    switch (approach) {
      case 'Service-Assisted':
        return 'text-green-700 bg-green-50 border-green-200';
      case 'DIY':
        return 'text-blue-700 bg-blue-50 border-blue-200';
      case 'Hybrid':
        return 'text-purple-700 bg-purple-50 border-purple-200';
      default:
        return 'text-gray-700 bg-gray-50 border-gray-200';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="card mb-8"
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-3">
          <Calculator className="w-6 h-6 text-purple-600" />
          AI Implementation ROI Calculator
        </h2>
        <p className="text-gray-600 text-sm">
          Calculate the expected return on investment for DIY vs. service-assisted AI implementation
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Panel */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Project Parameters</h3>

          {/* Investment Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              AI Investment Budget
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="number"
                value={inputs.investmentAmount}
                onChange={(e) => setInputs(prev => ({ ...prev, investmentAmount: Number(e.target.value) }))}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="2500000"
                min="100000"
                step="100000"
              />
            </div>
          </div>

          {/* Company Size */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Size
            </label>
            <select
              value={inputs.companySize}
              onChange={(e) => setInputs(prev => ({ ...prev, companySize: e.target.value as any }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {companySizeOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Industry */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry
            </label>
            <select
              value={inputs.industry}
              onChange={(e) => setInputs(prev => ({ ...prev, industry: e.target.value as any }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {industryOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Internal Talent */}
          <div>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={inputs.hasInternalTalent}
                onChange={(e) => setInputs(prev => ({ ...prev, hasInternalTalent: e.target.checked }))}
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <span className="text-sm font-medium text-gray-700">
                Have experienced AI/ML talent in-house
              </span>
            </label>
          </div>

          {/* Timeline Preference */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Timeline Preference
            </label>
            <select
              value={inputs.timelinePreference}
              onChange={(e) => setInputs(prev => ({ ...prev, timelinePreference: e.target.value as any }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="aggressive">Aggressive (Fast deployment)</option>
              <option value="moderate">Moderate (Balanced approach)</option>
              <option value="conservative">Conservative (Risk-averse)</option>
            </select>
          </div>
        </div>

        {/* Results Panel */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">ROI Analysis</h3>

          {isCalculating ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Calculating ROI scenarios...</p>
              </div>
            </div>
          ) : results ? (
            <div className="space-y-4">
              {/* Recommendation */}
              <div className={`p-4 rounded-lg border ${getRecommendationColor(results.recommendedApproach)}`}>
                <div className="flex items-center gap-2 mb-2">
                  {results.recommendedApproach === 'Service-Assisted' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : results.recommendedApproach === 'DIY' ? (
                    <AlertCircle className="w-5 h-5" />
                  ) : (
                    <Zap className="w-5 h-5" />
                  )}
                  <span className="font-semibold">Recommended: {results.recommendedApproach}</span>
                </div>
                <p className="text-sm">
                  {results.netBenefit > 0
                    ? `Service approach provides ${formatCurrency(results.netBenefit)} net benefit`
                    : results.netBenefit < -inputs.investmentAmount * 0.05
                    ? `DIY approach saves ${formatCurrency(Math.abs(results.netBenefit))} in service costs`
                    : 'Consider hybrid approach with selective service support'
                  }
                </p>
              </div>

              {/* Comparison Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* DIY Column */}
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-3">DIY Implementation</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Success Rate:</span>
                      <span className="font-medium">{results.diySuccessProbability}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Expected ROI:</span>
                      <span className="font-medium">{formatCurrency(results.diyExpectedROI)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time to Value:</span>
                      <span className="font-medium">{results.diyTimeToValue} months</span>
                    </div>
                  </div>
                </div>

                {/* Service Column */}
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-3">Service-Assisted</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Success Rate:</span>
                      <span className="font-medium">{results.serviceSuccessProbability}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Expected ROI:</span>
                      <span className="font-medium">{formatCurrency(results.serviceExpectedROI)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time to Value:</span>
                      <span className="font-medium">{results.serviceTimeToValue} months</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-700">
                    {results.serviceSuccessProbability - results.diySuccessProbability}%
                  </div>
                  <div className="text-xs text-gray-600">Success Rate Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-700">
                    {results.diyTimeToValue - results.serviceTimeToValue}
                  </div>
                  <div className="text-xs text-gray-600">Months Faster</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-700">
                    {formatCurrency(results.servicePremium)}
                  </div>
                  <div className="text-xs text-gray-600">Service Investment</div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <p className="text-yellow-800 text-sm">
          <strong>Note:</strong> Calculations are based on industry benchmarks and research data.
          Actual results may vary depending on specific implementation factors and organizational readiness.
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceROICalculator;