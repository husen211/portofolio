import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  })
};

const insights = [
  {
    title: "How I built Qammaris E-Commerce from scratch",
    type: "Case Study",
    date: "Coming Soon"
  },
  {
    title: "Mastering React State Management in 2026",
    type: "Video",
    date: "Coming Soon"
  }
];

export default function BlogTeaser() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-32 border-t border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          className="max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Beyond Code</h2>
          <p className="text-xl text-gray-500">I believe in continuous learning. Here I share my technical insights, case studies, and development journey.</p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          custom={1}
        >
          <Link to="/journal" className="group flex items-center gap-2 text-lg font-medium text-black hover:text-blue-600 transition-colors">
            View all content
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {insights.map((item, idx) => (
          <motion.div 
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="group relative bg-gray-50 p-8 rounded-2xl border border-gray-100 overflow-hidden cursor-pointer"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <PlayCircle className="w-24 h-24" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full">{item.type}</span>
                <span className="text-gray-500 text-sm font-medium">{item.date}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-medium leading-tight group-hover:text-blue-600 transition-colors max-w-sm">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
