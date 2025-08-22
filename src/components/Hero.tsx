import React from 'react';
import { EarthAnimation } from './EarthAnimation';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Astronaut } from './Astronaute';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-20 pt-20"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Text Content (décalé de 100px à droite) */}
          <div className="space-y-6 md:space-y-8 z-20 relative ">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">
                hi there! I'm Zaki.
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-lg">
                19-year-old computer science student from Algeria.
              </p>

              <p className="text-base md:text-lg text-gray-300 max-w-lg leading-relaxed">
                In a world of complexity, I build systems that make sense.
              </p>

              <div className="flex items-center space-x-2 text-white">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                <span className="text-sm">Currently available</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-8">
              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/in/mohamed-zaki-madani-7799b337b"
                  className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/mohamed1zaki"
                  className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:zaki.madani@univ-alger.com"
                  className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* ✅ Astronaut juste en dessous des boutons */}
            <div className="flex justify-center md:justify-start mt-6 ">
              <Astronaut />
            </div>
          </div>

          {/* Earth Animation - Hidden on small screens */}
          <div className="hidden lg:flex justify-center lg:justify-end relative">
            <EarthAnimation />
          </div>

          {/* Mobile Earth Animation - Below text on mobile */}
          <div className="lg:hidden flex justify-center mt-8">
            <div className="relative">
              <EarthAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
