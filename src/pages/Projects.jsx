import React from 'react';
import { motion } from 'framer-motion';
import FeaturedWork from '../components/FeaturedWork';

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Projects() {
  return (
    <main className="w-full overflow-hidden pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 mb-16">
        <motion.div initial="hidden" animate="visible" variants={revealVariants}>
          <h1 className="text-6xl md:text-[88px] font-medium tracking-tighter-custom mb-6">All Projects</h1>
          <p className="text-xl text-gray-500 max-w-2xl">A collection of things I've built, from business operations to complete web applications.</p>
        </motion.div>
      </div>
      
      <FeaturedWork hideHeader={true} />
    </main>
  );
}
