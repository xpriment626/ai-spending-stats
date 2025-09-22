import React from 'react';
import { motion } from 'framer-motion';

interface Partner {
  name: string;
  id: string;
}

const partners: Partner[] = [
  { name: 'Atlas Technologies', id: 'atlas' },
  { name: 'Meridian Systems', id: 'meridian' },
  { name: 'Vertex Innovations', id: 'vertex' },
  { name: 'TechCorp Industries', id: 'techcorp' },
  { name: 'NexGen Solutions', id: 'nexgen' },
  { name: 'Quantum Dynamics', id: 'quantum' },
  { name: 'Synapse AI', id: 'synapse' },
  { name: 'Neural Networks Inc', id: 'neural' },
  { name: 'Cyber Solutions', id: 'cyber' },
  { name: 'Digital Forge', id: 'forge' },
];

const PartnersCarousel: React.FC = () => {
  // Triple the partners array to ensure smooth infinite scroll
  const extendedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="w-full overflow-hidden py-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mb-4">
        <motion.h2
          className="text-2xl font-bold text-gray-900 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Partners
        </motion.h2>
      </div>

      <div className="relative">
        {/* Gradient overlays for seamless edges */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-50 via-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-blue-50 via-blue-50 to-transparent z-10 pointer-events-none" />

        {/* Carousel container */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8 flex-shrink-0"
            animate={{
              x: ['0%', '-66.666%'], // Move by 2/3 to seamlessly loop back to start
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 200, // Much slower for relaxed viewing (75% speed reduction)
                ease: 'linear',
              },
            }}
            style={{
              width: `${extendedPartners.length * (256 + 32)}px`, // 256px width + 32px gap
            }}
          >
            {extendedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 w-64 h-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="card h-full flex items-center justify-center group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <span className="text-gray-700 font-medium text-center group-hover:gradient-text transition-all duration-300 px-4">
                    {partner.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;