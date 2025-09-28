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
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="p-2 rounded-2xl"
        >
          <img
            src="/assets/arasaka-logo.png"
            alt="Arasaka Labs"
            className="w-12 h-12"
          />
        </motion.div>
        <h1 className="text-4xl lg:text-5xl font-bold text-white">
          <span className="netrunner-text-accent">AI Spending</span> Analysis
        </h1>
      </div>

      <p className="text-lg text-neutral-300 max-w-3xl mx-auto mb-6">
        Analyzing the growing disconnect between AI tooling acceleration and enterprise implementation success.
        This data room offers insights into the $154B service opportunity created by this mismatch.
      </p>

      <div className="flex justify-center items-center gap-8 text-sm text-neutral-400">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-blue-400" />
          <span>97% YoY Growth</span>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-pink-400" />
          <span>78% Implementation Gap</span>
        </div>
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-cyan-400" />
          <span>19% Success Rate</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;