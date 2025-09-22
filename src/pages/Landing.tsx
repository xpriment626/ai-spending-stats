import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PartnersCarousel from '../components/PartnersCarousel';
import { TabContent } from '../types/index';

const tabsData: TabContent[] = [
  {
    id: 'about',
    label: '{about}',
    title: 'About Arasaka Labs',
    content: [
      'We are a venture studio specializing in AI service implementations for enterprise clients. Our mission is to bridge the acceleration gap between AI tooling availability and successful enterprise adoption.',
      'Founded on the principle that technology advances faster than organizations can implement, we provide high-touch consulting and implementation services that transform AI investments into measurable business outcomes.'
    ]
  },
  {
    id: 'thesis',
    label: '{our thesis}',
    title: 'The Acceleration Gap',
    content: [
      'The AI tooling and infrastructure ecosystem advances exponentially, while enterprise implementation success rates remain frustratingly low. This creates a massive service opportunity.',
      'Our thesis: The faster technology evolves, the wider the implementation gap becomes. Companies need expert guidance to navigate this complexity and achieve meaningful ROI from their AI investments.'
    ]
  },
  {
    id: 'numbers',
    label: '{the numbers}',
    title: 'Market Opportunity',
    content: [
      'The data tells a compelling story: $1.8B total service opportunity across enterprise AI implementations, with 78% average implementation gap in the market.',
      'Financial services show 92% opportunity score while only 19% achieve meaningful revenue impact. This disparity represents our target market and value proposition.'
    ]
  }
];

function Landing() {
  const [activeTab, setActiveTab] = useState<string>('about');

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