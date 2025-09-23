import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, DollarSign, AlertTriangle } from 'lucide-react';
import { KeyMetric } from '../types';

interface KeyMetricsProps {
  metrics: KeyMetric[];
}

interface MetricPair {
  investment: KeyMetric;
  reality: KeyMetric;
  gapPercentage?: number;
}

const KeyMetrics: React.FC<KeyMetricsProps> = ({ metrics: _ }) => {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const getTrendColor = (trend: string, isInvestment: boolean = false) => {
    if (isInvestment) {
      switch (trend) {
        case 'up':
          return 'text-blue-600 bg-blue-50';
        case 'down':
          return 'text-blue-600 bg-blue-50';
        default:
          return 'text-blue-600 bg-blue-50';
      }
    }
    switch (trend) {
      case 'up':
        return 'text-red-600 bg-red-50';
      case 'down':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-red-600 bg-red-50';
    }
  };

  // Create paired metrics to show investment vs reality
  const metricPairs: MetricPair[] = [
    {
      investment: {
        title: 'Total AI Spending',
        value: '$154.2B',
        change: 96.7,
        trend: 'up',
        description: '2024 global enterprise investment'
      },
      reality: {
        title: 'Revenue Impact >5%',
        value: '19%',
        change: -2,
        trend: 'down',
        description: 'Actually achieve significant ROI'
      },
      gapPercentage: 78
    },
    {
      investment: {
        title: 'Infrastructure Investment',
        value: '$200B+',
        change: 97,
        trend: 'up',
        description: 'AI infrastructure market by 2028'
      },
      reality: {
        title: 'Implementation Success',
        value: '22%',
        change: 3,
        trend: 'up',
        description: 'Actually deploy AI successfully'
      },
      gapPercentage: 75
    },
    {
      investment: {
        title: 'Enterprise Adoption',
        value: '78%',
        change: 15,
        trend: 'up',
        description: 'Using AI in production'
      },
      reality: {
        title: 'See Earnings Benefits',
        value: '20%',
        change: 0,
        trend: 'stable',
        description: 'Report measurable business impact'
      },
      gapPercentage: 58
    }
  ];

  return (
    <div className="mb-8">
      {/* Section Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Investment vs. Reality</h2>
        <p className="text-gray-600">The disconnect between AI spending and successful outcomes</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {metricPairs.map((pair, index) => (
          <motion.div
            key={`${pair.investment.title}-${pair.reality.title}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="card relative overflow-hidden"
          >
            {/* Gap Indicator */}
            {pair.gapPercentage && (
              <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-yellow-100 rounded-full text-xs font-medium text-yellow-700">
                <AlertTriangle className="w-3 h-3" />
                <span>{pair.gapPercentage}% gap</span>
              </div>
            )}

            {/* Investment Metric */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 mb-3 border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-medium text-blue-800">
                  {pair.investment.title}
                </h3>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-900">
                  {pair.investment.value}
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getTrendColor(pair.investment.trend, true)}`}>
                  {getTrendIcon(pair.investment.trend)}
                  {pair.investment.change !== 0 && (
                    <span>
                      {pair.investment.change > 0 ? '+' : ''}{pair.investment.change}%
                    </span>
                  )}
                </div>
              </div>
              <p className="text-xs text-blue-700 mt-1">
                {pair.investment.description}
              </p>
            </div>

            {/* Reality Metric */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-4 border border-red-200">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                <h3 className="text-sm font-medium text-red-800">
                  {pair.reality.title}
                </h3>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-red-900">
                  {pair.reality.value}
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getTrendColor(pair.reality.trend)}`}>
                  {getTrendIcon(pair.reality.trend)}
                  {pair.reality.change !== 0 && (
                    <span>
                      {pair.reality.change > 0 ? '+' : ''}{pair.reality.change}%
                    </span>
                  )}
                </div>
              </div>
              <p className="text-xs text-red-700 mt-1">
                {pair.reality.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-6 text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200"
      >
        <p className="text-yellow-800 font-medium">
          Despite massive investment growth, successful AI implementation remains stagnant —
          creating a {' '}
          <span className="font-bold text-yellow-900">multi-billion dollar service opportunity</span>
        </p>
      </motion.div>
    </div>
  );
};

export default KeyMetrics;