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
        bg: 'bg-red-50',
        text: 'text-red-700',
        border: 'border-red-200'
      },
      green: {
        bg: 'bg-green-50',
        text: 'text-green-700',
        border: 'border-green-200'
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
      className="card mb-8"
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-3">
          <Clock className="w-6 h-6 text-blue-600" />
          Implementation Timeline Comparison
        </h2>
        <p className="text-gray-600 text-sm">
          Service-assisted implementations achieve faster time-to-value with higher success rates
        </p>
      </div>

      {/* High-Level Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {timelineData.map((data, index) => (
          <motion.div
            key={data.method}
            initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
            className={`${getColorClasses(data.color, 'bg')} rounded-xl p-6 border ${getColorClasses(data.color, 'border')}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 ${data.color === 'red' ? 'bg-red-500' : 'bg-green-500'} rounded-lg text-white`}>
                {data.icon}
              </div>
              <h3 className={`text-xl font-bold ${getColorClasses(data.color, 'text')}`}>
                {data.method} Implementation
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className={`text-2xl font-bold ${getColorClasses(data.color, 'text')}`}>
                  {data.timeToValue} months
                </div>
                <div className="text-sm text-gray-600">Time to Value</div>
              </div>
              <div>
                <div className={`text-2xl font-bold ${getColorClasses(data.color, 'text')}`}>
                  {data.successRate}%
                </div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>

            <div className="mb-4">
              <div className={`text-lg font-semibold ${getColorClasses(data.color, 'text')} mb-1`}>
                {data.averageCost}
              </div>
              <div className="text-sm text-gray-600">Average Total Cost</div>
            </div>

            <div>
              <h4 className={`font-medium ${getColorClasses(data.color, 'text')} mb-2`}>
                Key Challenges:
              </h4>
              <div className="space-y-1">
                {data.commonChallenges.map((challenge, idx) => (
                  <div key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                    <span>{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed Timeline Visualization */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Phase-by-Phase Breakdown</h3>

        <div className="space-y-6">
          {timelineData.map((data, methodIndex) => (
            <motion.div
              key={data.method}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + methodIndex * 0.2, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-1 ${data.color === 'red' ? 'bg-red-500' : 'bg-green-500'} rounded text-white text-xs`}>
                  {data.icon}
                </div>
                <h4 className={`font-medium ${getColorClasses(data.color, 'text')}`}>
                  {data.method} Timeline
                </h4>
              </div>

              <div className="flex items-center gap-2 mb-2">
                {phases.map((phase, phaseIndex) => {
                  const duration = data[phase.key as keyof TimelineComparisonData] as number;
                  const maxDuration = Math.max(...timelineData.map(d => d[phase.key as keyof TimelineComparisonData] as number));
                  const width = (duration / maxDuration) * 100;

                  return (
                    <React.Fragment key={phase.name}>
                      <div className="flex flex-col items-center min-w-0 flex-1">
                        <div className="text-xs text-gray-600 mb-1">{phase.name}</div>
                        <div className="w-full bg-gray-200 rounded-full h-4 relative overflow-hidden">
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
                          <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                            {duration}m
                          </div>
                        </div>
                      </div>
                      {phaseIndex < phases.length - 1 && (
                        <div className="w-4 h-4 flex items-center justify-center">
                          <div className="w-2 h-px bg-gray-300" />
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
        className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200"
      >
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-purple-600" />
            <div className="text-2xl font-bold text-purple-700">2.2x</div>
          </div>
          <div className="text-sm text-purple-600">Faster Time-to-Value</div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            <div className="text-2xl font-bold text-purple-700">3.5x</div>
          </div>
          <div className="text-sm text-purple-600">Higher Success Rate</div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Users className="w-5 h-5 text-purple-600" />
            <div className="text-2xl font-bold text-purple-700">68%</div>
          </div>
          <div className="text-sm text-purple-600">Cite Talent Gaps as Barrier</div>
        </div>
      </motion.div>

      <div className="mt-4 text-center p-3 bg-yellow-50 rounded-lg">
        <p className="text-yellow-800 font-medium text-sm">
          Service-assisted implementations reduce time-to-value by 13 months while achieving 3.5x higher success rates
        </p>
      </div>
    </motion.div>
  );
};

export default ImplementationTimelineComparison;