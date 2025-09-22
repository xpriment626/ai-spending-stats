import React from 'react';
import Header from './components/Header';
import KeyMetrics from './components/KeyMetrics';
import SpendingChart from './components/SpendingChart';
import { mockDashboardData } from './data/mockData';

function App() {
  const { keyMetrics, spendingTrend } = mockDashboardData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Header />
        <KeyMetrics metrics={keyMetrics} />
        <SpendingChart data={spendingTrend} />
      </div>
    </div>
  );
}

export default App;