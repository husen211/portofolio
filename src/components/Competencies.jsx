import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiExpress, SiLaravel, SiMysql, SiMongodb, SiJavascript } from 'react-icons/si';

const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  })
};

const competencies = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, animated, and highly interactive user interfaces. I focus on clean code and optimal user experience.",
    skills: [
      { name: "React.js", icon: <FaReact className="w-4 h-4 text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-cyan-500" /> },
      { name: "JavaScript ES6+", icon: <SiJavascript className="w-4 h-4 text-yellow-500" /> },
      { name: "Framer Motion", icon: <SiFramer className="w-4 h-4 text-black" /> }
    ]
  },
  {
    title: "Backend & APIs",
    description: "Designing robust server-side architecture and RESTful APIs to power business logic efficiently.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="w-4 h-4 text-gray-700" /> },
      { name: "Laravel", icon: <SiLaravel className="w-4 h-4 text-red-600" /> },
      { name: "API Design", icon: null }
    ]
  },
  {
    title: "Database & Architecture",
    description: "Structuring relational and non-relational databases for scalability, ensuring data integrity and fast queries.",
    skills: [
      { name: "MySQL", icon: <SiMysql className="w-4 h-4 text-blue-700" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-green-500" /> },
      { name: "System Design", icon: null },
      { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-orange-600" /> }
    ]
  }
];

export default function Competencies() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24 border-t border-gray-100">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={revealVariants}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Core Competencies</h2>
        <p className="text-xl text-gray-500 max-w-2xl">A fullstack approach bridging the gap between engaging user interfaces and solid backend logic.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {competencies.map((comp, idx) => (
          <motion.div 
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-medium mb-4">{comp.title}</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">{comp.description}</p>
            <div className="flex flex-wrap gap-3">
              {comp.skills.map(skill => (
                <span key={skill.name} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-800">
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
