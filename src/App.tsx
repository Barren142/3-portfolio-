import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#18191B] text-[#F5F5F5] flex flex-col font-body selection:bg-[#BFC3C9] selection:text-[#18191B]">
      {/* 3-Zone Top Bar Navigation */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main Content Flow */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Minimalist Editorial Footer */}
      <Footer />
    </div>
  );
}
