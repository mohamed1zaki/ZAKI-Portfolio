import React from 'react';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

export const Contact: React.FC = () => {
  const contactItems = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'zaki.madani@univ-alger.com',
      href: 'mailto:zaki.madani@univ-alger.com'
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'Github',
      value: 'mohamed1zaki',
      href: 'https://github.com/mohamed1zaki'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'Mohamed Zaki Madani',
      href: 'https://www.linkedin.com/in/mohamed-zaki-madani-7799b337b'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      value: 'moh_zaki_mdn',
      href: 'https://www.instagram.com/moh_zaki_mdn'
    }
  ];

  return (
    <section id="contact" className="relative py-12 md:py-20 px-4 md:px-6 lg:px-20">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 md:mb-12 text-center">
            Contact
          </h2>
          
          <div className="space-y-4 mb-8 md:mb-12">
            {contactItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 md:space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="flex-shrink-0 p-2 md:p-3 bg-white/10 rounded-xl border border-white/20 group-hover:scale-110 transition-transform duration-300 text-blue-400">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-medium group-hover:text-blue-300 transition-colors text-sm md:text-base">
                    {item.label}
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors text-xs md:text-sm truncate">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="px-4 md:px-0">
            <p className="text-gray-300 leading-relaxed text-center text-sm md:text-base">
              I'm always excited to make new connections, hear about new ideas, 
              and explore potential opportunities, so please feel free to reach out to me :)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};