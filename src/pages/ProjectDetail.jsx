import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const projectData = {
  "qammaris-perfumes": {
    title: "Qammaris Perfumes",
    link: "https://qammarisparfum.id/",
    social: "@qammaris",
    role: "Fullstack Developer",
    timeline: "Feb 2026 – Present",
    tech: "React, Laravel, MySQL, Tailwind CSS",
    overview: "A digital business catalog with seamless WhatsApp checkout integration for a retail perfume brand.",
    images: [
      "/image/Qammaris website/landing page.jpg",
      "/image/Qammaris website/about page.jpg",
      "/image/Qammaris website/halaman katalog .jpg",
      "/image/Qammaris website/cart page.jpg"
    ],
    sections: [
      {
        title: "The Problem",
        content: "Qammaris needed a way to bridge the physical retail experience with a digital catalog. Customers needed to understand the subjective nature of perfumes, filter through 200+ product variants from 20+ international and local brands, and find their perfect scent before committing to a purchase."
      },
      {
        title: "The Solution",
        content: "I developed a comprehensive catalog website that acts as a digital storefront. The UI is designed to be highly informative yet simple, allowing users to explore perfume notes and add items to their cart. Instead of a complex internal payment gateway, the checkout process asks for basic shipping details and intelligently redirects the formatted order directly to WhatsApp for final payment processing."
      },
      {
        title: "Technical Implementation",
        content: "The platform was built using Laravel for a robust MVC backend and MySQL for managing the complex data relationships. The frontend leverages React/Vite and Tailwind CSS to deliver a premium, responsive user interface that reflects the elegance of Middle Eastern perfumery."
      },
      {
        title: "Business Impact",
        content: "The website successfully streamlined the purchasing flow. It acts as the primary digital touchpoint where customers can comfortably browse the catalog, learn about the products, and smoothly transition to WhatsApp for personalized customer service and payment, greatly reducing manual order taking."
      }
    ]
  },
  "stepup-career": {
    title: "StepUp AI Platform",
    link: "https://stepupcareer.id/",
    role: "Backend Developer",
    timeline: "Project",
    tech: "Node.js, Express.js, MongoDB",
    overview: "Backend systems for an AI-powered career recommendation platform. Managed API design and service communication.",
    images: [
      "/image/Stepup web/landing page.png",
      "/image/Stepup web/landing page 2.jpg"
    ],
    sections: [
      {
        title: "Discover your perfect career path with AI precision",
        content: "Stop guessing about your future. StepUp analyzes your skills, interests, and experience to match you with career paths where you’ll thrive."
      },
      {
        title: "How StepUp Works",
        content: "1. Build Profile: Enter your academic background, skills, and interests. 2. AI Analysis: Our engine cross-references your profile with thousands of career trajectories and market data. 3. Get Recommendations: Receive detailed career matches, skill gap analysis, and a personalized roadmap."
      },
      {
        title: "Backend Contribution",
        content: "I focused on backend engineering using Node.js and Express. I collaborated with Frontend, AI, and Data Science teams to establish robust <strong>API contracts</strong> and handle seamless <strong>service communication</strong>."
      }
    ]
  },
  "habib-saggaf": {
    title: "Habib Saggaf Biography",
    link: "https://jejakhabibsaggaf.com/",
    role: "Frontend Developer",
    timeline: "Project",
    tech: "HTML, CSS, Vanilla JS",
    overview: "A storytelling-based biography website focusing on readability, structure, and engaging format.",
    images: [
      "/image/Web jejak habib saggaf/hero1.png",
      "/image/Web jejak habib saggaf/lanscape2.png",
      "/image/Web jejak habib saggaf/potrait.png"
    ],
    sections: [
      {
        title: "The Goal",
        content: "Developed a storytelling-based interface to improve readability and content structure. Reached approximately 400+ active users."
      }
    ]
  },
  "beep-keychain": {
    title: "BEEP Emergency Keychain",
    link: "https://beep.web.id/",
    role: "Frontend Developer",
    timeline: "Project",
    tech: "HTML, CSS, Tailwind CSS",
    overview: "Developed conversion-focused product landing page with CTA integration to WhatsApp.",
    images: [
      "/image/beep/landiong page.jpg",
      "/image/beep/landing page 2.jpg"
    ],
    sections: [
      {
        title: "The Project",
        content: "Designed and developed a landing page intended to convert visitors into buyers. Focused heavily on the user interface to clearly explain the utility of the emergency keychain and direct users seamlessly to WhatsApp for purchasing."
      }
    ]
  }
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const data = projectData[slug];

  if (!data) {
    return <Navigate to="/projects" />;
  }

  return (
    <main className="w-full overflow-hidden pt-32 pb-24">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={revealVariants} className="mb-16 text-center">
          <h1 className="text-5xl md:text-[80px] font-medium tracking-tighter-custom mb-6">{data.title}</h1>
          <p className="text-xl text-gray-500">{data.overview}</p>
          <div className="mt-6 flex justify-center gap-4">
            {data.link && (
              <a href={data.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700 font-medium">Visit Website &rarr;</a>
            )}
            {data.social && (
              <span className="text-gray-400 font-medium">{data.social}</span>
            )}
          </div>
        </motion.div>

        {/* Dynamic Image Gallery */}
        <motion.div initial="hidden" animate="visible" variants={revealVariants} className="mb-24 space-y-8">
          {data.images.map((imgSrc, index) => (
            <div key={index} className="w-full bg-gray-50 rounded-[16px] md:rounded-[24px] overflow-hidden shadow-sm border border-gray-100">
              <img src={imgSrc} alt={`${data.title} screenshot ${index + 1}`} className="w-full h-auto object-cover" />
            </div>
          ))}
        </motion.div>

        {/* Info Grid */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariants} className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24 border-b border-gray-200 pb-24">
          <div className="md:col-span-1 space-y-8">
            <div>
              <h4 className="text-sm font-semibold uppercase text-gray-400 mb-2">Role</h4>
              <p className="font-medium text-lg">{data.role}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase text-gray-400 mb-2">Timeline</h4>
              <p className="font-medium text-lg">{data.timeline}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase text-gray-400 mb-2">Tech Stack</h4>
              <p className="font-medium text-lg">{data.tech}</p>
            </div>
          </div>
          
          <div className="md:col-span-3 space-y-12 text-xl leading-relaxed text-gray-800">
            {data.sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-3xl font-medium tracking-tight text-black mb-4">{section.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: section.content }}></p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </main>
  );
}
