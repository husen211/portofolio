import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  "React.js", "Tailwind CSS", "JavaScript ES6+", "Framer Motion",
  "Node.js", "Express.js", "Laravel", "MySQL", "MongoDB", "Supabase",
  "Vite", "Figma", "FlutterFlow", "Git"
];

export default function ToolsMarquee() {
  return (
    <div className="w-full overflow-hidden bg-white py-12 border-t border-gray-100">
      <div className="relative flex whitespace-nowrap">
        <motion.div
          className="flex items-center gap-12 px-6"
          animate={{ x: [0, -1500] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Repeat multiple times to ensure no gap during infinite scroll */}
          {[...tools, ...tools, ...tools].map((tool, idx) => (
            <div key={idx} className="flex items-center gap-12">
              <span className="text-gray-400 text-sm font-medium tracking-wide">
                {tool}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
