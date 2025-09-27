import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, TrendingUp } from 'lucide-react';
import { RegionalData } from '../types';

interface RegionalMapProps {
  data: RegionalData[];
}

const RegionalMap: React.FC<RegionalMapProps> = ({ data }) => {
  const [selectedRegion, setSelectedRegion] = useState<RegionalData | null>(null);

  const maxSpending = Math.max(...data.map(d => d.spending));

  const getSpendingLevel = (spending: number) => {
    const ratio = spending / maxSpending;
    if (ratio > 0.8) return { level: 'very-high', color: 'bg-red-500', intensity: 'opacity-90' };
    if (ratio > 0.6) return { level: 'high', color: 'bg-orange-500', intensity: 'opacity-80' };
    if (ratio > 0.4) return { level: 'medium', color: 'bg-yellow-500', intensity: 'opacity-70' };
    if (ratio > 0.2) return { level: 'low', color: 'bg-green-500', intensity: 'opacity-60' };
    return { level: 'very-low', color: 'bg-blue-500', intensity: 'opacity-50' };
  };

  const getRegionPosition = (country: string) => {
    const positions: { [key: string]: { x: number; y: number } } = {
      'United States': { x: 20, y: 40 },
      'Canada': { x: 25, y: 25 },
      'United Kingdom': { x: 48, y: 35 },
      'Germany': { x: 52, y: 40 },
      'France': { x: 48, y: 45 },
      'China': { x: 78, y: 45 },
      'Japan': { x: 85, y: 40 },
      'India': { x: 72, y: 55 },
      'Australia': { x: 85, y: 75 },
    };
    return positions[country] || { x: 50, y: 50 };
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-black/90 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-700/50 p-6"
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-100 mb-2">
          Global AI Spending Distribution
        </h2>
        <p className="text-gray-300 text-sm">
          Enterprise AI investment by region and adoption rates
        </p>
      </div>

      {/* Simplified World Map */}
      <div className="relative bg-gradient-to-br from-gray-900/80 to-black/90 rounded-xl p-8 mb-6" style={{ height: '400px' }}>
        {/* Continent outlines (simplified) */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          {/* North America */}
          <path
            d="M5,20 Q15,15 25,20 L30,35 Q25,45 20,50 L10,45 Q5,35 5,20"
            fill="rgba(99, 102, 241, 0.1)"
            stroke="rgba(99, 102, 241, 0.3)"
            strokeWidth="0.2"
          />
          {/* Europe */}
          <path
            d="M40,25 Q50,20 55,30 L52,45 Q48,50 45,45 L42,35 Q40,30 40,25"
            fill="rgba(99, 102, 241, 0.1)"
            stroke="rgba(99, 102, 241, 0.3)"
            strokeWidth="0.2"
          />
          {/* Asia */}
          <path
            d="M60,20 Q80,15 90,25 L85,50 Q75,60 70,55 L65,40 Q60,30 60,20"
            fill="rgba(99, 102, 241, 0.1)"
            stroke="rgba(99, 102, 241, 0.3)"
            strokeWidth="0.2"
          />
          {/* Australia */}
          <path
            d="M80,70 Q88,68 90,75 L88,80 Q85,82 82,80 Q80,75 80,70"
            fill="rgba(99, 102, 241, 0.1)"
            stroke="rgba(99, 102, 241, 0.3)"
            strokeWidth="0.2"
          />
        </svg>

        {/* Data points */}
        {data.map((region, index) => {
          const position = getRegionPosition(region.country || region.region);
          const spendingInfo = getSpendingLevel(region.spending);

          return (
            <motion.div
              key={region.country || region.region}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{ left: `${position.x}%`, top: `${position.y}%` }}
              onClick={() => setSelectedRegion(selectedRegion === region ? null : region)}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`w-6 h-6 rounded-full ${spendingInfo.color} ${spendingInfo.intensity} shadow-lg border-2 border-white`}
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: selectedRegion === region ? 1 : 0 }}
                className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-black/95 backdrop-blur-sm p-3 rounded-lg shadow-xl border border-gray-600/40 whitespace-nowrap z-10"
              >
                <div className="text-sm font-semibold text-gray-100">
                  {region.country || region.region}
                </div>
                <div className="text-xs text-gray-300 space-y-1">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>${region.spending}B spending</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building2 className="w-3 h-3" />
                    <span>{region.companies.toLocaleString()} companies</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>{region.adoptionRate}% adoption</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Top Regions Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.slice(0, 3).map((region, index) => (
          <motion.div
            key={region.country || region.region}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="bg-gray-900/60 backdrop-blur-sm rounded-lg p-4 border border-gray-600/40"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-100 text-sm">
                {region.country || region.region}
              </h3>
              <div className={`w-3 h-3 rounded-full ${getSpendingLevel(region.spending).color}`} />
            </div>
            <div className="text-lg font-bold text-blue-600">
              ${region.spending}B
            </div>
            <div className="text-xs text-gray-400 mt-1">
              {region.adoptionRate}% enterprise adoption
            </div>
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 pt-4 border-t border-gray-600/40">
        <div className="flex items-center justify-center gap-6 text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-gray-300">$200B+ spending</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            <span className="text-gray-300">$50-200B</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="text-gray-300">$20-50B</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-gray-300">$10-20B</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-gray-300">&lt;$10B</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RegionalMap;