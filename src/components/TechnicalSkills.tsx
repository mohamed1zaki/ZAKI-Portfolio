import React from "react";

export const TechnicalSkills: React.FC = () => {
  const skills = [
    // Programming Languages
    { name: "JavaScript", icon: "/logo/javascript.svg" },
    { name: "Python", icon: "/logo/python.svg" },
    { name: "SQL", icon: "/logo/SQL.svg" },
    { name: "HTML", icon: "/logo/html.svg" },
    

    // Frontend
    { name: "React", icon: "/logo/react.svg" },
    { name: "Vite", icon: "/logo/vite.svg" },
    { name: "TailwindCSS", icon: "/logo/tailwind.svg" },
    { name: "Three.js", icon: "/logo/three.png" },

    // Backend & AI
    { name: "PostgreSQL", icon: "/logo/postgre.svg" },
    { name: "LangChain", icon: "/logo/lang.png" },

    // Design & 3D
    { name: "Figma", icon: "/logo/figma.svg" },
    { name: "Fusion 360", icon: "/logo/fusion.png" },
    { name: "Blender", icon: "/logo/blender.svg" },

    // Video Editing
    { name: "Adobe Premier", icon: "/logo/pr.svg" },
    { name: "CapCut", icon: "/logo/capcut.svg" },
    { name: "C", icon: "/logo/C.png" },
      { name: "Bootstrap", icon: "/logo/boot.svg" },
       { name: "Vue.js", icon: "/logo/Vue.svg" },
        { name: "Next.js", icon: "/logo/next.svg" },
         { name: "Matlab", icon: "/logo/matlab.svg" },
         { name: "Java", icon: "/logo/java.svg" },
         { name: "Typescript", icon: "/logo/TS.svg" },
         { name: "CSS", icon: "/logo/css.svg" },
         { name: "Kalilinux", icon: "/logo/kali.svg" },
  ];

  return (
    <section className="relative py-12 md:py-20 px-4 md:px-6 lg:px-20">
       
      <div className="container mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 md:mb-12">
            Technical Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Logo */}
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-6 h-6 md:w-8 md:h-8 object-contain flex-shrink-0"
                />
                
                {/* Texte */}
                <span className="font-medium text-white group-hover:text-cyan-300 transition-colors text-xs md:text-sm text-center sm:text-left">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};