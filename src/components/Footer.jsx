import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import { motion } from 'framer-motion';

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  })
};

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "huseinaljufri4@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <footer className="w-full bg-white border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-24 flex flex-col items-center">
          <motion.h2 
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="text-5xl md:text-[100px] font-medium tracking-tighter-custom leading-[0.9] text-center mb-16 max-w-4xl"
          >
            Let's get to know each other
          </motion.h2>

          <motion.button 
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            onClick={handleCopyEmail}
            className="group flex items-center gap-3 bg-[#0e0e0e] text-white px-8 py-4 rounded-full hover:scale-105 transition-transform active:scale-95 text-lg font-medium mb-32"
          >
            <span className="email-text">{copied ? "Email copied!" : email}</span>
            <Copy className="w-5 h-5 text-white/70" />
          </motion.button>

          <motion.div 
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="w-full flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-black/80 border-t border-gray-100 pt-8"
          >
            <div className="flex gap-6">
              <a href="https://github.com/husein211" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">My Repos</a>
              <a href="https://www.linkedin.com/in/husein-aljufri/" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
            </div>
            <div>
              © 2026 Husein Aljufri
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Fixed CTA Button - Commented out for now
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-8 right-8 z-40"
      >
        <a href="#" className="flex items-center gap-2 bg-[#009aff] text-white px-5 py-3 rounded-xl shadow-lg hover:-translate-y-1 transition-transform duration-300 font-semibold text-sm">
          Download CV
        </a>
      </motion.div>
      */}
    </>
  );
}
