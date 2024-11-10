// pages/projects.tsx
import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of Project 1. It showcases my skills in front-end development.',
    imageSrc: '/projct1.png', 
    link: 'https://github.com/sadafrao/milestone-1', 
  },
  {
    title: 'Project 2',
    description: 'Project 2 focuses on building a responsive UI with a backend integration.',
    imageSrc: '/projct2.png', 
    link: 'https://project2-link.com', 
  },
  {
    title: 'Project 3',
    description: 'Project 3 involves a complex web application with state management using React.',
    imageSrc: '/projct3.png', 
    link: 'https://project3-link.com', 
  },
];

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-8">My Projects</h1>
        <p className="text-lg text-center mb-12">Here are some of the projects I have worked on. Click on any project to learn more!</p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-lg shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="overflow-hidden rounded-t-lg">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="transition duration-300 transform hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-teal-600 mb-4">{project.title}</h3>
                  <p className="text-lg text-gray-700 mb-4">{project.description}</p>
                  <button className="mt-4 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
                    View Project
                  </button>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
