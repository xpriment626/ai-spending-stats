import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PartnersCarousel from '../components/PartnersCarousel';
import { TabContent } from '../types/index';

const tabsData: TabContent[] = [
  {
    id: 'paradox',
    label: '{the paradox}',
    title: 'The $154B AI Investment Paradox',
    content: [
      'Enterprise AI spending reaches $154.2B in 2024 with 97% year-over-year growth, yet only 19% of companies achieve meaningful revenue impact from their AI investments.',
      'This creates the largest service opportunity in enterprise technology: bridging the acceleration gap between AI tooling availability and successful implementation. The faster AI evolves, the wider this gap becomes.'
    ]
  },
  {
    id: 'thesis',
    label: '{our thesis}',
    title: 'High-Touch Services Fill the Gap',
    content: [
      'While AI infrastructure scales exponentially, human organizations adapt linearly. This fundamental mismatch creates a persistent 78% implementation gap across enterprises.',
      'Forward-deployed engineering services that combine deep technical expertise with implementation methodology can compress time-to-value from 24 months to 11 months while achieving 3.5x higher success rates.'
    ]
  },
  {
    id: 'numbers',
    label: '{the numbers}',
    title: '$1.8B Service Opportunity',
    content: [
      'Financial Services enterprises show 92% opportunity score with only 15% implementation success. Healthcare follows at 89% opportunity score with 18% success rate.',
      'The math is clear: high spending + low success = high service demand. Service-assisted implementations achieve 78% success rates vs. 22% for DIY approaches, creating a $1.8B addressable market.'
    ]
  }
];

function Landing() {
  const [activeTab, setActiveTab] = useState<string>('paradox');

  const activeTabData = tabsData.find(tab => tab.id === activeTab) || tabsData[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Navigation */}
      <header className="px-8 py-6">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center">
            <img
              src="/assets/arasaka-logo.png"
              alt="Arasaka Labs"
              className="h-12 w-auto"
            />
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Home</Link>
            <Link to="/blog" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Blog</Link>
            <Link to="/stats" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Stats</Link>
            <Link to="/contact" className="glass-effect text-gray-900 px-4 py-2 rounded-lg hover:bg-white/20 transition-all font-medium">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Under Construction Notice */}
      <div className="px-8 mb-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="glass-effect bg-amber-50/80 border border-amber-200/50 rounded-lg px-4 py-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
              <p className="text-amber-800 text-sm font-medium">
                🚧 Under Construction - Preview Version
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="px-8 py-6 mb-8">
          <div className="max-w-7xl mx-auto">
            {/* Title - Left Aligned */}
            <motion.h1
              className="text-5xl font-bold text-gray-900 mb-8 max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Arasaka Labs
            </motion.h1>

            {/* Tabbed Content Section */}
            <div className="max-w-5xl">
              {/* Tab Navigation */}
              <motion.div
                className="flex space-x-2 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {tabsData.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-lg font-mono text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'glass-effect bg-white/20 text-gray-900 shadow-lg'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </motion.div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    {activeTabData.title}
                  </h2>

                  <div className="space-y-4 max-w-3xl">
                    {activeTabData.content.map((paragraph, index) => (
                      <motion.p
                        key={index}
                        className="text-base text-gray-700 leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Contact Button - Outside of tab content to prevent re-rendering */}
              <motion.button
                className="mt-6 glass-effect bg-gray-900/90 text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition-all duration-300 font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </section>

        {/* Partners Section - Full Width */}
        <PartnersCarousel />
      </main>
    </div>
  );
}

export default Landing;