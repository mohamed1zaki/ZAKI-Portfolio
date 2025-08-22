import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-6 md:py-8 px-4 md:px-6 lg:px-20 border-t border-white/10">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-center">
          <div className="text-gray-400 text-sm text-center">
            © 2025 zaki.com
          </div>
        </div>
      </div>
    </footer>
  );
};