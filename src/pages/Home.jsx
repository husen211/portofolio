import React from 'react';
import Hero from '../components/Hero';
import VideoReel from '../components/VideoReel';
import ToolsMarquee from '../components/ToolsMarquee';
import FeaturedWork from '../components/FeaturedWork';
import About from '../components/About';

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      {/* <VideoReel /> */}
      <ToolsMarquee />
      <FeaturedWork />
      <About />
    </main>
  );
}
