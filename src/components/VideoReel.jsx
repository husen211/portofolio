import React from 'react';
import { motion } from 'framer-motion';

const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function VideoReel() {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={revealVariants}
      className="max-w-[1300px] mx-auto px-4 sm:px-6 mb-32"
    >
      <div className="w-full aspect-video md:h-[850px] rounded-none overflow-hidden bg-gray-50">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="https://framerusercontent.com/images/YDjVNDAOvD5YmVUUL9xUCPgIbSw.png" 
          className="w-full h-full object-cover"
        >
          <source src="https://framerusercontent.com/assets/qrR62CWXqDhpxD9VshrTGooXZg.mp4" type="video/mp4" />
        </video>
      </div>
    </motion.div>
  );
}
