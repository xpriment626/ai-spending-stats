import { motion } from 'framer-motion';

interface StringPath {
  id: string;
  path: string;
  length: number;
  delay: number;
  accent: 'blue' | 'pink' | 'cyan';
}

const stringPaths: StringPath[] = [
  {
    id: 'string1',
    path: 'M0,200 Q300,50 600,150 Q900,250 1200,100 Q1500,0 1800,120',
    length: 2200,
    delay: 0,
    accent: 'blue'
  },
  {
    id: 'string2',
    path: 'M0,400 Q250,300 500,380 Q750,460 1000,350 Q1250,240 1500,320 Q1750,400 1920,280',
    length: 2400,
    delay: 2,
    accent: 'pink'
  },
  {
    id: 'string3',
    path: 'M0,600 Q350,500 700,580 Q1050,660 1400,550 Q1750,440 1920,520',
    length: 2100,
    delay: 4,
    accent: 'cyan'
  },
  {
    id: 'string4',
    path: 'M0,800 Q200,700 400,750 Q600,800 800,720 Q1000,640 1200,700 Q1400,760 1600,680 Q1800,600 1920,650',
    length: 2600,
    delay: 1,
    accent: 'blue'
  },
  {
    id: 'string5',
    path: 'M0,100 Q400,20 800,80 Q1200,140 1600,60 Q1800,20 1920,90',
    length: 2000,
    delay: 3,
    accent: 'pink'
  }
];

const accentColors = {
  blue: '#0070f3',
  pink: '#ff0080',
  cyan: '#50e3c2'
};

export function NetrunnerBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Vercel-inspired silver gradient */}
          <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#888888" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#cccccc" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#888888" stopOpacity="0.15" />
          </linearGradient>

          {/* Refined blue accent gradient */}
          <linearGradient id="blueAccent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0070f3" stopOpacity="0" />
            <stop offset="50%" stopColor="#0070f3" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0070f3" stopOpacity="0" />
          </linearGradient>

          {/* Refined pink accent gradient */}
          <linearGradient id="pinkAccent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff0080" stopOpacity="0" />
            <stop offset="50%" stopColor="#ff0080" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ff0080" stopOpacity="0" />
          </linearGradient>

          {/* Refined cyan accent gradient */}
          <linearGradient id="cyanAccent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#50e3c2" stopOpacity="0" />
            <stop offset="50%" stopColor="#50e3c2" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#50e3c2" stopOpacity="0" />
          </linearGradient>

          {/* Glow filters */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Render base silver strings */}
        {stringPaths.map((string) => (
          <g key={`base-${string.id}`}>
            <motion.path
              d={string.path}
              fill="none"
              stroke="url(#silverGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 4,
                delay: string.delay,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 6
              }}
            />
          </g>
        ))}

        {/* Render accent pulse strings */}
        {stringPaths.map((string) => (
          <g key={`accent-${string.id}`}>
            <motion.path
              d={string.path}
              fill="none"
              stroke={`url(#${string.accent}Accent)`}
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration: 3,
                delay: string.delay + 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 8
              }}
            />
          </g>
        ))}

        {/* Floating connection nodes */}
        {stringPaths.slice(0, 3).map((string, index) => (
          <motion.circle
            key={`node-${string.id}`}
            r="2"
            fill={accentColors[string.accent]}
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              cx: [100 + index * 600, 300 + index * 400, 500 + index * 300],
              cy: [200 + index * 200, 400 + index * 100, 600 + index * 50]
            }}
            transition={{
              duration: 8,
              delay: string.delay * 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        ))}
      </svg>
    </div>
  );
}