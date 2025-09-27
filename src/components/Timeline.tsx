import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, DollarSign, TrendingUp, Shield, Lightbulb } from 'lucide-react';
import { TimelineEvent } from '../types';

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'funding':
        return <DollarSign className="w-5 h-5" />;
      case 'adoption':
        return <TrendingUp className="w-5 h-5" />;
      case 'regulation':
        return <Shield className="w-5 h-5" />;
      default:
        return <Lightbulb className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'funding':
        return 'bg-green-500 text-white';
      case 'adoption':
        return 'bg-blue-500 text-white';
      case 'regulation':
        return 'bg-red-500 text-white';
      default:
        return 'bg-purple-500 text-white';
    }
  };

  const formatDate = (event: TimelineEvent) => {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return event.month ? `${monthNames[event.month - 1]} ${event.year}` : `${event.year}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-black/90 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-700/50 p-6"
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-100 mb-2">
          AI Development Timeline
        </h2>
        <p className="text-gray-300 text-sm">
          Key milestones, funding rounds, and regulatory developments
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-green-400" />

        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={`${event.year}-${event.month}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-start gap-4"
            >
              {/* Timeline dot */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full shadow-lg cursor-pointer ${getTypeColor(event.type)}`}
                onClick={() => setSelectedEvent(selectedEvent === event ? null : event)}
              >
                {getTypeIcon(event.type)}
              </motion.div>

              {/* Content */}
              <motion.div
                className="flex-1 bg-gray-900/60 backdrop-blur-sm rounded-lg p-4 border border-gray-600/40 hover:shadow-md transition-all cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedEvent(selectedEvent === event ? null : event)}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-100 text-sm">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(event)}</span>
                      {event.value && (
                        <>
                          <span>•</span>
                          <span className="font-medium text-green-400">
                            ${event.value}B
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                </div>

                <AnimatePresence>
                  {selectedEvent === event && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-sm text-gray-300 mt-2 pt-2 border-t border-gray-600/40"
                    >
                      {event.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 pt-6 border-t border-gray-600/40">
        <div className="flex flex-wrap gap-4 justify-center">
          {[
            { type: 'milestone', label: 'Milestones', color: 'bg-purple-500' },
            { type: 'funding', label: 'Funding', color: 'bg-green-500' },
            { type: 'adoption', label: 'Adoption', color: 'bg-blue-500' },
            { type: 'regulation', label: 'Regulation', color: 'bg-red-500' },
          ].map((item) => (
            <div key={item.type} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <span className="text-xs text-gray-300">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Timeline;