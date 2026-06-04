import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Journal from './pages/Journal';
import JournalDetail from './pages/JournalDetail';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="antialiased selection:bg-gray-200 selection:text-black bg-white min-h-screen flex flex-col">
        <Nav />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/journal/:slug" element={<JournalDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
