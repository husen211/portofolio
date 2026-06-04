import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export default function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32 flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-24">
      {/* Hero Image */}
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={revealVariants}
        className="relative w-full max-w-[400px] aspect-square flex-shrink-0 md:ml-12"
      >
        <div className="w-full h-full rounded-none overflow-hidden rotate-[-8deg] shadow-2xl transition-transform duration-700 hover:rotate-0 bg-gray-100">
          <img
            src="/image/hero.png"
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Hero Text */}
      <motion.div
        custom={1}
        initial="hidden"
        animate="visible"
        variants={revealVariants}
        className="flex flex-col gap-8 max-w-2xl"
      >
        <h1 className="text-5xl md:text-[88px] leading-[0.95] tracking-tighter-custom font-medium text-[#0e0e0e] min-h-[120px] md:min-h-[180px]">
          <TypeAnimation
            sequence={[
              'Frontend Developer',
              2000,
              'Fullstack Developer',
              2000,
              'Product Builder',
              2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block"
          />
        </h1>
        <div className="text-xl md:text-2xl leading-relaxed font-medium text-[#0e0e0e] space-y-4 mt-4">
          <p>
            Currently building the business and digital ecosystem for <a href="https://www.linkedin.com/company/qammaris-perfumes/" target="_blank" rel="noreferrer" className="text-black font-semibold border-b-2 border-black/20 hover:border-black transition-colors pb-0.5 ml-1">Qammaris Perfumes</a> as Founder & Tech Lead.
          </p>
          <p className="text-gray-500 font-normal text-lg md:text-xl">
            I focus on bridging the gap between frontend interfaces and backend logic, ensuring that every line of code serves a real-world business purpose. From designing intuitive UIs to engineering robust APIs, I love bringing ideas to life.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
