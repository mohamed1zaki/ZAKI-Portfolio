import React, { useState } from 'react';
import { StarField } from './components/StarField';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { TechnicalSkills } from './components/TechnicalSkills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Astronaut } from './components/Astronaute';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen relative overflow-x-hidden font-questrial">
      {/* Animated star field background */}
      <StarField />
      
      {/* Content */}
      <div className="relative z-10 w-full">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main>
          <Hero />
          <SkillsSection />
          <TechnicalSkills />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;