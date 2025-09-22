import React from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Globe } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <div className="flex justify-center items-center gap-3 mb-4">
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg"
        >
          <Brain className="w-8 h-8 text-white" />
        </motion.div>
        <h1 className="text-4xl lg:text-5xl font-bold gradient-text">
          Enterprise AI Spending
        </h1>
      </div>

      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
        Understanding AI's economic impact across industries, regions, and company sizes.
        Real-time insights into the $632B enterprise AI market transformation.
      </p>

      <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          <span>29% CAGR</span>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4" />
          <span>Global Coverage</span>
        </div>
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4" />
          <span>8 Industries</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;