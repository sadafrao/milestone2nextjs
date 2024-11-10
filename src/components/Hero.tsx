import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 text-white overflow-hidden">
      
      <div className="absolute inset-0 bg-opacity-50 bg-gradient-to-r from-teal-500 to-blue-600"></div>

      
      <div className="relative z-10 px-6 md:px-12 lg:px-24 text-center lg:text-left lg:w-1/2">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          Hello, Sadaf
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light mb-8">
          A passionate Software Engineer creating interactive and dynamic web experiences.
        </p>

        
        <div className="flex justify-center lg:justify-start space-x-6">
          <a href="/projects">
            <button className="bg-teal-500 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
              View My Work
            </button>
          </a>
          <a href="/contact">
            <button className="border border-teal-500 text-teal-500 font-semibold px-6 py-3 rounded-lg hover:bg-teal-500 hover:text-gray-900 transition duration-300">
              Contact Me
            </button>
          </a>
        </div>
      </div>


      <div className="relative w-full lg:w-1/2 h-64 md:h-80 lg:h-96 flex justify-center items-center mb-8 lg:mb-0">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          
          <Image
            src="/my-pic.jpg" 
            alt="My Profile Picture"
            width={400}  
            height={400} 
            className="object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
