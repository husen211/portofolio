import React from 'react';
import Hero from '../components/Hero';
import ToolsMarquee from '../components/ToolsMarquee';
import Competencies from '../components/Competencies';
import FeaturedWork from '../components/FeaturedWork';
import About from '../components/About';
import BlogTeaser from '../components/BlogTeaser';

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <ToolsMarquee />
      <Competencies />
      <FeaturedWork />
      <About />
      <BlogTeaser />
    </main>
  );
}
