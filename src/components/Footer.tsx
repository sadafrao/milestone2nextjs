import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} sadaf soahail. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/sadafrao" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sadaf-sohail-2954a72b4/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            LinkedIn
          </a>
          <a href="mailto:sohailsadaf88@gmail.com" className="hover:text-teal-400">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
