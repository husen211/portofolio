import React, { useState } from 'react';
import { Menu, X, ArrowLeft, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 transition-all duration-300">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left Section: Logo or Back Button */}
        <div className="flex items-center gap-4 z-20">
          {!isHome && (
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back</span>
            </button>
          )}
          <Link to="/" className="text-sm font-bold tracking-tight text-black relative">
            HUSEIN ALJUFRI.
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 bg-gray-50/80 px-6 py-2 rounded-full border border-gray-200">
          <Link to="/projects" className="text-sm font-semibold text-gray-500 hover:text-black transition-colors">Work</Link>
          <Link to="/about" className="text-sm font-semibold text-gray-500 hover:text-black transition-colors">About</Link>
          <Link to="/blog" className="text-sm font-semibold text-gray-500 hover:text-black transition-colors">Blog</Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6 z-20">
          
          {/* Social Icons Desktop */}
          <div className="hidden md:flex items-center gap-4 border-r border-gray-200 pr-6">
            <a href="https://github.com/husein211" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-black transition-colors">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/husein-aljufri/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Email Button Desktop (Mailto) */}
          <a 
            href="mailto:huseinaljufri4@gmail.com"
            className="hidden md:flex group items-center gap-2 bg-[#0e0e0e] text-white px-5 py-2.5 rounded-full hover:scale-105 transition-transform active:scale-95 text-sm font-medium"
          >
            <span>Say Hello</span>
            <Mail className="w-4 h-4 text-white/70" />
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 py-6 px-6 flex flex-col gap-6 shadow-xl"
          >
            <Link to="/projects" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-black">Work</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-black">About</Link>
            <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-black">Blog</Link>
            
            <div className="flex items-center gap-6 pt-4 border-t border-gray-100 mt-2">
              <a href="https://github.com/husein211" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black transition-colors">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/husein-aljufri/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>

            <a 
              href="mailto:huseinaljufri4@gmail.com"
              className="w-full flex justify-center items-center gap-2 bg-[#0e0e0e] text-white px-5 py-3 rounded-xl hover:scale-105 transition-transform active:scale-95 text-sm font-medium mt-2"
            >
              <span>Say Hello</span>
              <Mail className="w-4 h-4 text-white/70" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
