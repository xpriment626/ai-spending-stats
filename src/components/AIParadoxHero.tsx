import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, AlertTriangle, DollarSign, Target } from 'lucide-react';

interface AIParadoxHeroProps {
  totalInvestment: string;
  implementationGap: number;
  revenueImpactFailure: number;
  serviceOpportunity: string;
  yearOverYearGrowth: number;
}

const AIParadoxHero: React.FC<AIParadoxHeroProps> = ({
  totalInvestment,
  implementationGap,
  revenueImpactFailure,
  serviceOpportunity,
  yearOverYearGrowth
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="vercel-content-card p-8 mb-8 overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-white mb-4"
        >
          The {totalInvestment} AI Investment Paradox
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-neutral-300 max-w-3xl mx-auto"
        >
          Enterprise AI spending grows {yearOverYearGrowth}% annually, yet implementation success remains stagnant
        </motion.p>
      </div>

      {/* Split Screen Paradox */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Left Side - Investment Reality */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="netrunner-card-blue rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-400">Massive Investment</h3>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-blue-300 font-medium">2024 Enterprise AI Spending</span>
              <span className="text-2xl font-bold text-blue-100">{totalInvestment}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-blue-300 font-medium">Year-over-Year Growth</span>
              <span className="text-xl font-bold text-blue-100">+{yearOverYearGrowth}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-blue-300 font-medium">Enterprise Adoption Rate</span>
              <span className="text-xl font-bold text-blue-100">78%</span>
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
            <p className="text-sm text-blue-300 font-medium">
              Organizations are investing heavily in AI infrastructure and tools
            </p>
          </div>
        </motion.div>

        {/* Right Side - Implementation Reality */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="netrunner-card-red rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-500 rounded-lg">
              <TrendingDown className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-red-400">Poor Outcomes</h3>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-red-300 font-medium">Revenue Impact &gt;5%</span>
              <span className="text-2xl font-bold text-red-100">{revenueImpactFailure}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-red-300 font-medium">Implementation Gap</span>
              <span className="text-xl font-bold text-red-100">{implementationGap}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-red-300 font-medium">See Earnings Benefits</span>
              <span className="text-xl font-bold text-red-100">20%</span>
            </div>
          </div>

          <div className="mt-4 p-3 bg-red-500/20 rounded-lg border border-red-500/30">
            <p className="text-sm text-red-300 font-medium">
              Despite massive spending, most implementations fail to deliver value
            </p>
          </div>
        </motion.div>
      </div>

      {/* Gap Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="relative mb-8"
      >
        <div className="flex items-center justify-center mb-4">
          <div className="flex-1 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
          <div className="px-4 py-2 bg-yellow-500/20 rounded-full border border-yellow-500/40 backdrop-blur-sm">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-red-400 to-transparent"></div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400 mb-2">{implementationGap}% Implementation Gap</div>
          <p className="text-neutral-300">The disconnect between AI investment and successful outcomes</p>
        </div>
      </motion.div>

      {/* Service Opportunity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="netrunner-card-purple rounded-xl p-6 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-purple-500 rounded-lg">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-purple-400">Service Opportunity</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-4">
          <div>
            <div className="text-3xl font-bold text-purple-300 mb-1">{serviceOpportunity}</div>
            <div className="text-sm text-purple-400">Total Addressable Service Market</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-300 mb-1">46%</div>
            <div className="text-sm text-purple-400">Cite Talent Gaps as Barrier</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-300 mb-1">3.4x</div>
            <div className="text-sm text-purple-400">Faster Time-to-Value with Services</div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-purple-300">
          <DollarSign className="w-5 h-5" />
          <p className="font-medium">
            High spending + Low success = High-touch service opportunity
          </p>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="text-center mt-6 p-4 bg-neutral-800/30 rounded-lg border border-neutral-700/30"
      >
        <p className="text-neutral-300 font-medium">
          The acceleration gap between AI tooling availability and enterprise implementation success
          creates unprecedented opportunities for forward-deployed engineering services.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AIParadoxHero;