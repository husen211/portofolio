import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { journalData } from './Journal';

export default function JournalDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = journalData.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24">
        <h1 className="text-2xl font-bold mb-4">Journal not found</h1>
        <button onClick={() => navigate('/journal')} className="text-blue-600 hover:underline">Return to Journal</button>
      </div>
    );
  }

  const dummyHtmlContent = `
    <p class="text-xl leading-relaxed text-gray-600 mb-8">
      This is a detailed article view for <strong>${post.title}</strong>. In a real application, you would fetch the full Markdown or HTML content from a CMS or an API. 
      For now, this demonstrates how the hybrid platform works: you can have your video embedded at the top, and your extensive writing flowing down below.
    </p>
    <h2 class="text-2xl font-bold mb-4">The Challenge</h2>
    <p class="text-lg leading-relaxed text-gray-600 mb-6">
      When building scalable applications, one of the biggest hurdles is ensuring that the architecture can adapt to changing business needs. Often, developers focus purely on code structure without understanding the underlying business operations.
    </p>
    <h2 class="text-2xl font-bold mb-4">The Solution</h2>
    <p class="text-lg leading-relaxed text-gray-600 mb-6">
      By adopting a product-first mindset, we can bridge the gap between technical execution and business reality. This involves careful planning, robust system design, and selecting the right tools for the job.
    </p>
  `;

  return (
    <main className="w-full min-h-screen bg-white pt-32 pb-24">
      <article className="max-w-[800px] mx-auto px-6">
        
        <Link to="/journal" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Journal
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full">{post.category}</span>
            <span className="text-gray-500 font-medium">{post.date}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Video Player Header (If post has video) */}
          {post.hasVideo ? (
            <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-xl mb-12">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl mb-12">
              <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          {/* Text Content */}
          <div 
            className="prose prose-lg max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: dummyHtmlContent }}
          />
        </motion.div>
      </article>
    </main>
  );
}
