import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { TabContent } from '../types/index';
import { NetrunnerBackground } from '../components/NetrunnerBackground';

const tabsData: TabContent[] = [
  {
    id: 'paradox',
    label: 'the paradox',
    title: 'The $154B AI spending paradox',
    content: [
      'Enterprise AI spending reached $154.2B in 2024 with 97% year-over-year growth, yet only 19% of companies achieve meaningful revenue impact from their AI investments.',
      'This creates the largest service opportunity in enterprise technology: bridging the acceleration gap between AI tooling availability and successful implementation. The faster AI evolves, the wider this gap becomes.'
    ]
  },
  {
    id: 'thesis',
    label: 'our thesis',
    title: 'High-touch services fill the gap',
    content: [
      'Decentralized AI platforms possess structural advantages that centralized players cannot replicate: data sovereignty, permissionless innovation, and transparent compute allocation.',
      'The deployment gap between crypto-native technical capability and enterprise implementation requirements creates systematic revenue opportunities for companies that can bridge both worlds. This window closes as enterprise procurement matures and competitive dynamics stabilize.'
    ]
  },
  {
    id: 'numbers',
    label: 'methodology',
    title: 'What we do',
    content: [
      'Forward-deployed engineering combined with evidence mining transforms crypto hype into measurable revenue through systematic customer problem validation and iterative deployment cycles.',
      'Service-guided implementations achieve 4x higher customer retention than self-deployment approaches, creating sustainable revenue streams from platform companies ready to move beyond fundraising into sustainable business models.'
    ]
  }
];

function Landing() {
  const [activeTab, setActiveTab] = useState<string>('paradox');

  const activeTabData = tabsData.find(tab => tab.id === activeTab) || tabsData[0];

  return (
    <div className="h-screen bg-gradient-to-br from-black via-neutral-950 to-black flex flex-col overflow-hidden relative">
      <NetrunnerBackground />
      {/* Header Navigation */}
      <header className="flex-none px-8 py-6 relative z-10">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center">
            <img
              src="/assets/arasaka-logo.png"
              alt="Arasaka Labs"
              className="h-12 w-auto"
            />
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="netrunner-nav-link font-medium">Home</Link>
            {/* <Link to="/blog" className="netrunner-nav-link font-medium">Blog</Link> */}
            <Link to="/thesis" className="netrunner-nav-link font-medium">Thesis</Link>
            <Link to="/contact" className="netrunner-glass text-neutral-200 px-4 py-2 rounded-lg hover:text-white transition-all font-medium">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Main Content - Centered */}
      <main className="flex-1 flex items-center relative z-10">
        <section className="w-full px-8">
          <div className="max-w-7xl mx-auto">
            {/* Title - Left Aligned */}
            <motion.h1
              className="text-5xl font-bold text-white mb-8 max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="netrunner-text-accent">Arasaka</span> Labs
            </motion.h1>

            {/* Tabbed Content Section */}
            <motion.div
              className="max-w-5xl vercel-content-card p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {/* Tab Navigation */}
              <motion.div
                className="flex space-x-2 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {tabsData.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-lg font-mono text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'netrunner-tab active text-white'
                        : 'netrunner-tab text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </motion.div>

              {/* Tab Content */}
              <div className="min-h-[240px] md:min-h-[260px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8"
                  >
                    <h2 className="text-2xl font-semibold text-white mb-6">
                      {activeTabData.title}
                    </h2>

                    <div className="space-y-4 max-w-3xl">
                      {activeTabData.content.map((paragraph, index) => (
                        <motion.p
                          key={index}
                          className="text-base text-neutral-300 leading-relaxed"
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
              </div>
            </motion.div>

            {/* Contact Button - Outside of tab content to prevent re-rendering */}
            <motion.button
              className="mt-8 netrunner-button text-white px-8 py-4 rounded-lg font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Landing;