import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const projects = [
  {
    slug: "qammaris-perfumes",
    title: "Qammaris Perfumes",
    description: "Built a digital catalog and seamless WhatsApp-integrated checkout system, streamlining the purchasing process.",
    image: "/image/Qammaris website/landing page.jpg",
    aspect: "aspect-[16/9]",
    tags: ["React/Vite", "Laravel", "Tailwind"]
  },
  {
    slug: "stepup-career",
    title: "StepUp AI Platform",
    description: "Fullstack contribution to an AI-powered career recommendation platform, managing API design and service communication.",
    image: "/image/Stepup web/landing page.png",
    aspect: "aspect-[16/9]",
    tags: ["Fullstack", "Node.js"]
  },
  {
    slug: "habib-saggaf",
    title: "Habib Saggaf Biography",
    description: "A storytelling-based biography website focusing on readability, structure, and engaging format. 400+ active organic users.",
    image: "/image/Web jejak habib saggaf/hero1.png",
    aspect: "aspect-[16/9]",
    tags: ["Frontend", "Tailwind"]
  },
  {
    slug: "beep-keychain",
    title: "BEEP Emergency Keychain",
    description: "Developed conversion-focused product landing page with CTA integration to WhatsApp.",
    image: "/image/beep/landiong page.jpg",
    aspect: "aspect-[16/9]",
    tags: ["Frontend", "HTML/CSS"]
  }
];

export default function FeaturedWork({ hideHeader = false }) {
  return (
    <section id="work" className="max-w-[1400px] mx-auto px-6 pb-32 pt-16">
      {!hideHeader && (
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          className="flex flex-col items-center gap-12 text-center mb-24"
        >
          <h2 className="text-6xl md:text-[120px] font-medium tracking-tighter-custom leading-none">Featured work</h2>
          <Link to="/projects" className="text-gray-500 hover:text-black uppercase tracking-wide text-xs font-semibold transition-colors">
            View All Projects &rarr;
          </Link>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {projects.map((project, idx) => {
          return (
            <motion.div 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
              className="project-card group relative w-full mb-8"
            >
              <Link to={`/projects/${project.slug}`} className="block w-full h-full flex flex-col">
                {/* Outer Container with soft background */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[24px] bg-gray-50/80 border border-gray-100 flex items-end justify-center px-6 pt-16 md:px-10 md:pt-20 transition-colors duration-500 group-hover:bg-gray-100/80">
                  
                  {/* Floating Screenshot */}
                  <div className="relative w-full h-full rounded-t-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.08)] transition-transform duration-700 group-hover:-translate-y-2">
                    {/* Optional: Minimalist Browser Top Bar */}
                    <div className="absolute top-0 left-0 w-full h-6 bg-white/90 backdrop-blur-md border-b border-gray-100 flex items-center px-3 gap-1.5 z-10">
                      <div className="w-2 h-2 rounded-full bg-red-400/80"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400/80"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400/80"></div>
                    </div>
                    {/* Image */}
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top pt-6 bg-white" 
                    />
                  </div>
                  
                  {/* Tags Overlay (Positioned on the outer container) */}
                  <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-20 pointer-events-none">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-white/90 backdrop-blur-md text-black text-xs font-semibold px-4 py-2 rounded-full shadow-sm border border-gray-100/50">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover Button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 bg-[#0e0e0e] text-white px-6 py-3 rounded-full font-medium text-sm pointer-events-none scale-95 group-hover:opacity-100 group-hover:scale-100 shadow-xl z-30">
                    View case study &rarr;
                  </div>
                </div>
                
                <div className="mt-6 flex flex-col items-start gap-2 transition-opacity duration-300 group-hover:opacity-50">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-base text-gray-500 font-normal leading-relaxed text-left">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {!hideHeader && (
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          className="mt-24 flex justify-center"
        >
          <Link to="/projects" className="inline-flex items-center gap-2 bg-[#0e0e0e] text-white px-8 py-4 rounded-full hover:scale-105 transition-transform active:scale-95 text-sm font-medium">
            View All Projects &rarr;
          </Link>
        </motion.div>
      )}
    </section>
  );
}
