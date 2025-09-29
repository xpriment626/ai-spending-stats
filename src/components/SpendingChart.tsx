import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { motion } from 'framer-motion';
import { SpendingData } from '../types';

interface SpendingChartProps {
  data: SpendingData[];
}

const SpendingChart: React.FC<SpendingChartProps> = ({ data }) => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black/95 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-gray-600/40">
          <p className="font-semibold text-gray-100 mb-2">{`Year: ${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {`${entry.name}: $${entry.value}B`}
            </p>
          ))}
          <p className="text-xs text-gray-400 mt-2">
            Growth: +{data.find(d => d.year === label)?.growth.toFixed(1)}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-black/90 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-700/50 p-4 sm:p-6"
    >
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-gray-100 mb-2">
          Enterprise AI Spending Growth
        </h2>
        <p className="text-gray-300 text-xs sm:text-sm">
          Global enterprise AI investment trajectory (2020-2028)
        </p>
      </div>

      <div className="h-60 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="totalSpending" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.05}/>
              </linearGradient>
              <linearGradient id="enterpriseSpending" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis
              dataKey="year"
              stroke="#9CA3AF"
              fontSize={12}
              tickLine={false}
            />
            <YAxis
              stroke="#9CA3AF"
              fontSize={12}
              tickLine={false}
              tickFormatter={(value) => `$${value}B`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="totalSpending"
              stroke="#3B82F6"
              strokeWidth={3}
              fill="url(#totalSpending)"
              name="Total Spending"
            />
            <Area
              type="monotone"
              dataKey="enterpriseSpending"
              stroke="#10B981"
              strokeWidth={2}
              fill="url(#enterpriseSpending)"
              name="Enterprise Spending"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4 sm:mt-6 pt-4 border-t border-gray-600/40">
        <div className="text-center">
          <div className="text-sm sm:text-lg font-bold text-blue-600">$632B</div>
          <div className="text-xs text-gray-400">2028 Forecast</div>
        </div>
        <div className="text-center">
          <div className="text-sm sm:text-lg font-bold text-green-600">29%</div>
          <div className="text-xs text-gray-400">CAGR 2024-28</div>
        </div>
        <div className="text-center">
          <div className="text-sm sm:text-lg font-bold text-purple-600">96.7%</div>
          <div className="text-xs text-gray-400">2024 Growth</div>
        </div>
      </div>
    </motion.div>
  );
};

export default SpendingChart;