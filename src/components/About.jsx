import React from 'react';
import { motion } from 'framer-motion';

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const experience = [
  {
    year: "2026 – Present",
    title: "Qammaris Perfumes, Founder & Tech Lead.",
    location: "Palu, Indonesia",
    description: "Built a retail perfume business from the ground up, developing a complete digital commerce system in Laravel & React to support store operations, product management, and automated checkout flows."
  },
  {
    year: "2023 – 2027",
    title: "Bina Nusantara University, Computer Science.",
    location: "Jakarta, Indonesia",
    description: "Focusing on Software Engineering while building real-world projects. Active member of BNCC Frontend Learning Track."
  },
  {
    year: "2024",
    title: "Freelance, Frontend Developer.",
    location: "Remote",
    description: "Developed various landing pages and UI/UX prototypes including BEEP Emergency Keychain and Finance Monitoring Systems."
  }
];

export default function About() {
  return (
    <section id="about" className="max-w-[1200px] mx-auto px-6 py-32">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={revealVariants}
        className="mb-24"
      >
        <h2 className="text-6xl md:text-[88px] font-medium tracking-tighter-custom mb-12">About</h2>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={revealVariants}
        className="flex flex-col md:flex-row gap-12 md:gap-24 mb-32"
      >
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl md:text-3xl font-medium leading-tight">
            Building digital experiences that connect business needs with technical execution.
          </h3>
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-xl md:text-xl leading-relaxed text-gray-800 font-normal">
            I am a <strong>Fullstack Web Developer</strong> and Product Builder who creates real-world digital products with measurable business impact. 
            I don't just write code; I think about product structure, design quality, and how systems support actual operations. 
            I am highly proficient in modern frontend development using <strong>React.js</strong>, while being equally comfortable designing data structures, <strong>API contracts</strong>, and <strong>backend business logic</strong> using <strong>Node.js</strong> and <strong>Laravel</strong>.
          </p>
        </div>
      </motion.div>

      <div className="space-y-16">
        {experience.map((item, idx) => (
          <motion.div 
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="flex flex-col md:flex-row md:items-start gap-4 md:gap-32 border-t border-gray-200 pt-8"
          >
            <div className="w-full md:w-1/4">
              <span className="text-xl font-medium">{item.year}</span>
            </div>
            <div className="w-full md:w-3/4 grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-medium">{item.title}</h4>
                <span className="text-gray-500">{item.location}</span>
              </div>
              <p className="text-lg text-gray-800">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
