import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, TrendingUp, CheckCircle, XCircle, Zap } from 'lucide-react';

interface TimelineComparisonData {
  method: 'DIY' | 'Service-Assisted';
  planningPhase: number; // months
  implementationPhase: number; // months
  deploymentPhase: number; // months
  timeToValue: number; // months
  successRate: number; // percentage
  averageCost: string;
  commonChallenges: string[];
  color: string;
  icon: React.ReactNode;
}

const ImplementationTimelineComparison: React.FC = () => {
  const timelineData: TimelineComparisonData[] = [
    {
      method: 'DIY',
      planningPhase: 6,
      implementationPhase: 12,
      deploymentPhase: 6,
      timeToValue: 24,
      successRate: 22,
      averageCost: '$2.8M - $5.2M',
      commonChallenges: [
        'Talent acquisition delays',
        'Technology integration complexity',
        'Regulatory compliance gaps',
        'Change management resistance'
      ],
      color: 'red',
      icon: <XCircle className="w-6 h-6" />
    },
    {
      method: 'Service-Assisted',
      planningPhase: 2,
      implementationPhase: 6,
      deploymentPhase: 3,
      timeToValue: 11,
      successRate: 78,
      averageCost: '$1.9M - $3.1M',
      commonChallenges: [
        'Service provider selection',
        'Internal stakeholder alignment',
        'Knowledge transfer planning',
        'Ongoing maintenance strategy'
      ],
      color: 'green',
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border') => {
    const colorMap = {
      red: {
        bg: 'bg-gray-900/60',
        text: 'text-red-300',
        border: 'border-red-500/30'
      },
      green: {
        bg: 'bg-gray-900/60',
        text: 'text-green-300',
        border: 'border-green-500/30'
      }
    };
    return colorMap[color as keyof typeof colorMap][type];
  };

  const phases = [
    { name: 'Planning', key: 'planningPhase' },
    { name: 'Implementation', key: 'implementationPhase' },
    { name: 'Deployment', key: 'deploymentPhase' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="vercel-content-card p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8"
    >
      <div className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-bold text-white mb-2 flex items-center gap-2 sm:gap-3">
          <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
          <span className="hidden sm:inline">Implementation Timeline Comparison</span>
          <span className="sm:hidden">Timeline Comparison</span>
        </h2>
        <p className="text-gray-300 text-xs sm:text-sm px-0 sm:px-0">
          Service-assisted implementations achieve faster time-to-value with higher success rates
        </p>
      </div>

      {/* High-Level Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
        {timelineData.map((data, index) => (
          <motion.div
            key={data.method}
            initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
            className={`${getColorClasses(data.color, 'bg')} rounded-xl p-4 sm:p-6 lg:p-8 border ${getColorClasses(data.color, 'border')}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 ${data.color === 'red' ? 'bg-red-500' : 'bg-green-500'} rounded-lg text-white`}>
                {data.icon}
              </div>
              <h3 className={`text-xl font-bold ${getColorClasses(data.color, 'text')}`}>
                {data.method} Implementation
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <div className={`text-xl sm:text-2xl font-bold ${getColorClasses(data.color, 'text')}`}>
                  {data.timeToValue} months
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Time to Value</div>
              </div>
              <div>
                <div className={`text-xl sm:text-2xl font-bold ${getColorClasses(data.color, 'text')}`}>
                  {data.successRate}%
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Success Rate</div>
              </div>
            </div>

            <div className="mb-6">
              <div className={`text-lg font-semibold ${getColorClasses(data.color, 'text')} mb-1`}>
                {data.averageCost}
              </div>
              <div className="text-sm text-gray-400">Average Total Cost</div>
            </div>

            <div>
              <h4 className={`font-medium ${getColorClasses(data.color, 'text')} mb-2`}>
                Key Challenges:
              </h4>
              <div className="space-y-1">
                {data.commonChallenges.map((challenge, idx) => (
                  <div key={idx} className="text-xs text-gray-400 flex items-start gap-2">
                    <div className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                    <span>{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed Timeline Visualization */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-white mb-6">Phase-by-Phase Breakdown</h3>

        <div className="space-y-8">
          {timelineData.map((data, methodIndex) => (
            <motion.div
              key={data.method}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + methodIndex * 0.2, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-1 ${data.color === 'red' ? 'bg-red-500' : 'bg-green-500'} rounded text-white text-xs`}>
                  {data.icon}
                </div>
                <h4 className={`font-medium ${getColorClasses(data.color, 'text')}`}>
                  {data.method} Timeline
                </h4>
              </div>

              <div className="flex items-center gap-3 mb-4">
                {phases.map((phase, phaseIndex) => {
                  const duration = data[phase.key as keyof TimelineComparisonData] as number;
                  const maxDuration = Math.max(...timelineData.map(d => d[phase.key as keyof TimelineComparisonData] as number));
                  const width = (duration / maxDuration) * 100;

                  return (
                    <React.Fragment key={phase.name}>
                      <div className="flex flex-col items-center min-w-0 flex-1">
                        <div className="text-xs text-gray-400 mb-1">{phase.name}</div>
                        <div className="w-full bg-gray-700 rounded-full h-4 relative overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${width}%` }}
                            transition={{ delay: 0.8 + methodIndex * 0.2 + phaseIndex * 0.1, duration: 0.8 }}
                            className={`h-full rounded-full ${
                              data.color === 'red'
                                ? 'bg-gradient-to-r from-red-400 to-red-500'
                                : 'bg-gradient-to-r from-green-400 to-green-500'
                            }`}
                          />
                          <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-gray-100">
                            {duration}m
                          </div>
                        </div>
                      </div>
                      {phaseIndex < phases.length - 1 && (
                        <div className="w-4 h-4 flex items-center justify-center">
                          <div className="w-2 h-px bg-gray-600" />
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg border border-purple-500/30 backdrop-blur-sm"
      >
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-purple-400" />
            <div className="text-xl sm:text-2xl font-bold text-purple-300">2.2x</div>
          </div>
          <div className="text-xs sm:text-sm text-purple-400">Faster Time-to-Value</div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-purple-400" />
            <div className="text-xl sm:text-2xl font-bold text-purple-300">3.5x</div>
          </div>
          <div className="text-xs sm:text-sm text-purple-400">Higher Success Rate</div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Users className="w-5 h-5 text-purple-400" />
            <div className="text-xl sm:text-2xl font-bold text-purple-300">68%</div>
          </div>
          <div className="text-xs sm:text-sm text-purple-400">Cite Talent Gaps as Barrier</div>
        </div>
      </motion.div>

      <div className="mt-6 text-center p-4 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
        <p className="text-yellow-300 font-medium text-sm">
          Service-assisted implementations achieve 2.2x faster time-to-value with 3.5x higher success rates
        </p>
      </div>
    </motion.div>
  );
};

export default ImplementationTimelineComparison;