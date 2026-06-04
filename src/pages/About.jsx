import React from 'react';
import { motion } from 'framer-motion';

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function About() {
  return (
    <main className="w-full overflow-hidden pt-32 pb-24 max-w-[1200px] mx-auto px-6">
      <motion.div initial="hidden" animate="visible" variants={revealVariants}>
        <h1 className="text-6xl md:text-[88px] font-medium tracking-tighter-custom mb-12">About Me</h1>
      </motion.div>
      
      <motion.div initial="hidden" animate="visible" variants={revealVariants} className="text-xl md:text-2xl leading-relaxed font-medium text-gray-800 space-y-6 max-w-3xl mb-24">
        <p>I am Husein Aljufri, a Computer Science student with a focus on <strong>Fullstack Web Development</strong>.</p>
        <p>Experienced in building web applications based on real-world needs and developing digital solutions to support <strong>business operations</strong>. I am adaptable to new technologies, with strong problem-solving skills across both <strong>Frontend (React)</strong> and <strong>Backend (Node.js, Laravel)</strong>.</p>
      </motion.div>

      {/* Experience */}
      <div className="mb-32">
        <h2 className="text-3xl font-medium tracking-tight mb-8">Work Experience</h2>
        <div className="space-y-8 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-32">
            <div className="w-full md:w-1/4">
              <span className="text-xl font-medium">Feb 2026 – Present</span>
            </div>
            <div className="w-full md:w-3/4">
              <h4 className="text-xl font-medium">Qammaris Perfumes</h4>
              <span className="text-gray-500 font-medium">Founder / Owner</span>
              <ul className="mt-4 space-y-2 text-lg text-gray-800 list-disc list-inside">
                <li>Built and managed a retail perfume business from the ground up.</li>
                <li>Managed 200+ product variants from 20+ international and local brands.</li>
                <li>Handled store operations, inventory management, and procurement.</li>
                <li>Implemented digital cashier and financial recording systems.</li>
                <li>Built a catalog website using Laravel & MySQL.</li>
              </ul>
              <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                <p className="font-medium text-black">Key Achievements:</p>
                <p className="text-gray-600 mt-1">Generated ~Rp500,000,000 revenue in the first 3 months. Digital content reached 1,000,000+ views.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-32">
        <h2 className="text-3xl font-medium tracking-tight mb-8">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-200 pt-8">
          <div>
            <h4 className="text-xl font-medium mb-4">Frontend & Development</h4>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'HTML/CSS', 'JavaScript', 'Tailwind CSS', 'Laravel', 'MySQL (CRUD, MVC)', 'Git', 'Figma (UI/UX)'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-medium mb-4">Soft Skills</h4>
            <ul className="space-y-2 text-lg text-gray-800 list-disc list-inside">
              <li>Project-based Problem Solving</li>
              <li>Self-learning & Adaptability</li>
              <li>Time Management & Responsibility</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-32">
        <h2 className="text-3xl font-medium tracking-tight mb-8">Education & Organization</h2>
        <div className="space-y-8">
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row gap-4 md:gap-32">
            <div className="w-full md:w-1/4 text-xl font-medium">2023 – (Expected) 2027</div>
            <div className="w-full md:w-3/4">
              <h4 className="text-xl font-medium">Bina Nusantara University</h4>
              <p className="text-gray-500 mt-2">Bachelor of Computer Science</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row gap-4 md:gap-32">
            <div className="w-full md:w-1/4 text-xl font-medium">2025 – 2026</div>
            <div className="w-full md:w-3/4">
              <h4 className="text-xl font-medium">BNCC (Bina Nusantara Computer Club)</h4>
              <p className="text-gray-500 mt-2">Member – Frontend Learning Track</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-32">
        <h2 className="text-3xl font-medium tracking-tight mb-8">Certifications</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-200 pt-8 text-lg text-gray-800">
          <li>• React Developer – Dicoding</li>
          <li>• JavaScript Programming</li>
          <li>• Tailwind CSS</li>
          <li>• UI/UX Design</li>
          <li>• Algorithm & Programming (C) – DACODE</li>
          <li>• Study Independent DBS Foundation – Fullstack Web Development</li>
        </ul>
      </div>
      
    </main>
  );
}
