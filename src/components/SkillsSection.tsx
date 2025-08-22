import React, { useState } from 'react';
import { Code, Bot, Palette, Cuboid as Cube, Database, Film } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const educationData = [
    {
      icon: (
        <img
          src="/univ.png" 
          alt="University Logo"
          className="w-20 h-20 object-contain"
        />
      ),
      title: "University of Algiers 1",
      subtitle: "Bachelor of Science in Computer Science",
      years: "2023-2026",
      points: [
        "Year 1 (L1): Foundation in programming, discrete mathematics, computer architecture, and introductory algorithms.",
        "Year 2 (L2): Data structures, object-oriented programming, operating systems, computer networks, and databases.",
        "Year 3 (L3, Current): Advanced algorithms, AI, distributed systems + graduation project.",
      ],
    },
  ];

  const experienceData = [
     {
      icon: <Cube className="w-8 h-8 text-orange-400" />,
      title: "3D Modeling & Product Design",
      subtitle: "Advanced 3D modeling and visual concepts",
      description: "I create detailed 3D models and visual concepts using Fusion 360 and Blender. I also integrate 3D models into web applications, allowing interactive visualization and creative product presentations directly in the browser.",
    },
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Frontend Development",
      subtitle: "Full-stack frameworks and web development",
      description: "I build modern and responsive web applications using HTML, CSS, JavaScript, and frameworks such as React and Vite. I also create immersive 3D animated experiences using Three.js, combining performance, design, and interactivity to deliver engaging digital products.",
    },
    {
      icon: <Bot className="w-8 h-8 text-green-400" />,
      title: "AI Chatbot Development",
      subtitle: "Conversational AI and machine learning",
      description: "I develop intelligent conversational agents using natural language processing and tools like LangChain. I design chatbots and AI-driven agents that can connect to databases and external services, providing dynamic, personalized, and context-aware interactions.",
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-400" />,
      title: "UI/UX Design",
      subtitle: "User interface and user experience design",
      description: "I design user-friendly and accessible digital experiences with a strong focus on usability and modern design trends. Using Figma, I create wireframes, prototypes, and polished interfaces that align with user needs and business goals.",
    },
    {
      icon: <Cube className="w-8 h-8 text-green-500" />, 
      title: "Arduino & Raspberry Pi",
      subtitle: "Embedded Systems & IoT Projects",
      description: "I design and build hardware prototypes using Arduino microcontrollers and Raspberry Pi boards. My projects include automation, robotics, and IoT systems that combine hardware and software for real-world problem solving.",
    },

   
     {
      icon: <Database  className="w-8 h-8 text-yellow-400" />,
      title: "Database Management",
      subtitle: "Advanced 3D modeling and visual concepts",
      description: "I work with PostgreSQL to design, manage, and optimize relational databases, ensuring data integrity, scalability, and reliable backend integration for web applications.",
    },
    {
      icon: <Code className="w-8 h-8 text-red-500" />, 
      title: "Kali Linux & Ethical Hacking",
      subtitle: "White Hat Hacker & Cybersecurity Enthusiast",
      description: "I specialize in penetration testing, vulnerability assessment, and ethical hacking using Kali Linux. With a focus on white-hat practices, I explore system security to identify weaknesses and help strengthen defenses against real-world cyber threats.",
    },

    {
      icon: <Film className="w-8 h-8 text-red-400" />,
      title: "Video Editing",
      subtitle: "Advanced 3D modeling and visual concepts",
      description: "I produce and edit video content using Adobe Premiere Pro and CapCut, creating professional, high-quality edits tailored for both storytelling and digital platforms.",
    },
  ];

  const currentData = activeTab === 'education' ? educationData : experienceData;

  return (
    <section id="skills" className="relative py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          
          
          <div className="flex justify-center mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-1 border border-white/10">
            <button
                onClick={() => setActiveTab('experience')}
                className={`px-8 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === 'experience'
                    ? 'bg-white/10 text-white shadow-lg'
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-8 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === 'education'
                    ? 'bg-white/10 text-white shadow-lg'
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                Education
              </button>
              
            </div>
          </div>

          
          <div className="space-y-6">
            {currentData.map((item, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  
                  <div className="flex-shrink-0 p-3 bg-white/10 rounded-xl border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>

                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {item.title}
                      </h3>
                     
                    </div>

                    <h4 className="text-gray-300 font-medium">{item.subtitle}</h4>

                    
                    {'points' in item ? (
                      <ul className="list-disc list-inside text-gray-400 space-y-2">
                        {item.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-400 leading-relaxed">{(item as any).description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
