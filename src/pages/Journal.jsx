import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, PlayCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  })
};

// We export this data so JournalDetail can use it (in a real app, this would be an API or context)
export const journalData = [
  {
    id: 1,
    slug: "how-i-built-qammaris",
    title: "How I built Qammaris E-Commerce from scratch",
    category: "Case Study",
    date: "May 2026",
    hasVideo: true,
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    excerpt: "A deep dive into the architecture, challenges, and lessons learned while building the entire digital ecosystem for Qammaris Perfumes."
  },
  {
    id: 2,
    slug: "mastering-react-state",
    title: "Mastering React State Management in 2026",
    category: "Tech",
    date: "April 2026",
    hasVideo: true,
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    excerpt: "Exploring the modern landscape of React state management. When to use Context, Redux, Zustand, or just plain old useState."
  },
  {
    id: 3,
    slug: "founders-should-code",
    title: "Why Founders should learn to Code",
    category: "Business",
    date: "March 2026",
    hasVideo: false,
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    excerpt: "Understanding the technical side of your business gives you an unparalleled advantage in decision making and product speed."
  }
];

const categories = ["All", "Tech", "Business", "Case Study"];

export default function Journal() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredJournals = journalData.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="w-full min-h-screen flex flex-col bg-white pt-24 pb-12">
      <section className="flex-grow max-w-[1200px] mx-auto px-6 py-12 w-full">
        <motion.div initial="hidden" animate="visible" variants={revealVariants} className="mb-16">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">Journal</h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl">A hybrid space for technical deep-dives, business case studies, and my journey as a product builder.</p>
        </motion.div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search journals..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-80 pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
            />
          </div>
        </div>

        {/* Journal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJournals.length > 0 ? (
            filteredJournals.map((post, idx) => (
              <Link to={`/journal/${post.slug}`} key={post.id}>
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={revealVariants}
                  custom={idx}
                  className="group cursor-pointer flex flex-col gap-4 h-full"
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
                    <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    
                    {/* Icon indicating type (Video or Text) */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                      {post.hasVideo ? <PlayCircle className="w-4 h-4 text-blue-600" /> : <FileText className="w-4 h-4 text-gray-700" />}
                      <span className="text-xs font-bold">{post.hasVideo ? "VIDEO" : "ARTICLE"}</span>
                    </div>

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600">{post.category}</span>
                      <span className="text-sm text-gray-400 font-medium">• {post.date}</span>
                    </div>
                    <h3 className="text-xl font-medium leading-tight group-hover:text-blue-600 transition-colors mb-3">{post.title}</h3>
                    <p className="text-gray-500 line-clamp-2 text-sm">{post.excerpt}</p>
                  </div>
                </motion.div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-gray-500">
              No journals found matching your search.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
