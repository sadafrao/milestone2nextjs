
'use client';

import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-teal-400 to-blue-500 text-white min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
      
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeIn">
            About Me
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            I am a passionate Software Engineer who loves creating dynamic and interactive web experiences. Here is  a little about me and my journey.
          </p>
        </div>

        
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-8 md:space-y-0">
        
          <div className="flex justify-center md:w-1/3">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <Image
                src="/my-pic.jpg"
                alt="My Profile Picture"
                width={256} 
                height={256} 
                className="rounded-full object-cover shadow-xl"
              />
            </div>
          </div>

          
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4">Who I Am</h2>
            <p className="text-lg mb-4 font-light">
              I am a Software Engineer with experience in building full-stack applications. I specialize in crafting seamless web experiences using cutting-edge technologies, focusing on performance, accessibility, and user experience.
            </p>
            
            <h3 className="text-2xl font-semibold mb-2">Skills & Technologies</h3>
            <ul className="list-none grid grid-cols-2 gap-4 mb-6">
              <li className="bg-teal-600 px-4 py-2 rounded-full">JavaScript</li>
              <li className="bg-teal-600 px-4 py-2 rounded-full">React</li>
              <li className="bg-teal-600 px-4 py-2 rounded-full">Node.js</li>
              <li className="bg-teal-600 px-4 py-2 rounded-full">TypeScript</li>
              <li className="bg-teal-600 px-4 py-2 rounded-full">CSS3</li>
              <li className="bg-teal-600 px-4 py-2 rounded-full">Next.js</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-2">My Approach</h3>
            <p className="text-lg mb-6 font-light">
              I focus on creating scalable and maintainable solutions that empower users and businesses. My approach involves iterating fast, testing rigorously, and building with precision. I always aim for clean code, clear communication, and efficient collaboration.
            </p>

          
            <a href="/contact">
              <button className="bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300">
                Get in Touch
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
