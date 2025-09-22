import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { motion } from 'framer-motion';
import { IndustryData, CompanySizeData } from '../types';

interface IndustryBreakdownProps {
  industryData: IndustryData[];
  companySizeData: CompanySizeData[];
}

const IndustryBreakdown: React.FC<IndustryBreakdownProps> = ({ industryData, companySizeData }) => {
  const [activeView, setActiveView] = useState<'industry' | 'size'>('industry');

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-white/20">
          <p className="font-semibold text-gray-800 mb-2">
            {data.industry || data.sizeCategory}
          </p>
          <p className="text-sm text-blue-600">
            Spending: ${data.spending || data.totalSpending}B
          </p>
          <p className="text-sm text-gray-600">
            Companies: {(data.companies || 0).toLocaleString()}
          </p>
          {data.growth && (
            <p className="text-sm text-green-600">
              Growth: +{data.growth}%
            </p>
          )}
          {data.avgSpending && (
            <p className="text-sm text-purple-600">
              Avg: {data.avgSpending}% of revenue
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Industry Breakdown */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="card"
      >
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Industry Breakdown
          </h2>
          <p className="text-gray-600 text-sm">
            AI spending distribution across major sectors
          </p>
        </div>

        <div className="h-80 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={industryData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="spending"
                stroke="#fff"
                strokeWidth={2}
              >
                {industryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          {industryData.map((industry) => (
            <div key={industry.industry} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: industry.color }}
              />
              <span className="text-gray-600 truncate">
                {industry.industry}
              </span>
              <span className="text-gray-800 font-medium ml-auto">
                ${industry.spending}B
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Company Size Analysis */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="card"
      >
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Company Size Analysis
          </h2>
          <p className="text-gray-600 text-sm">
            AI spending by company revenue bracket
          </p>
        </div>

        <div className="h-80 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={companySizeData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey="sizeCategory"
                stroke="#6B7280"
                fontSize={10}
                tickLine={false}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis
                stroke="#6B7280"
                fontSize={10}
                tickLine={false}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="avgSpending"
                fill="#3B82F6"
                radius={[4, 4, 0, 0]}
                name="Avg Revenue %"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-2">
          {companySizeData.slice(0, 3).map((size, index) => (
            <div key={size.sizeCategory} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-gray-600">{size.sizeCategory}</span>
              </div>
              <div className="text-right">
                <div className="font-medium text-gray-800">
                  ${size.totalSpending}B
                </div>
                <div className="text-xs text-gray-500">
                  {size.avgSpending}% of revenue
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default IndustryBreakdown;