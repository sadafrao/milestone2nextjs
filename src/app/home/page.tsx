// components/HomePage.tsx
import React from 'react';
import Hero from '@/components/Hero';

import Contact from '../contact/page';
import About from '../about/page';


const HomePage: React.FC = () => {
  return (
    <div>
      
      <Hero />
     
      <Contact />
      < About/>
      {/* <main className="p-8">
      
      </main> */}
      
    </div>
  );
};

export default HomePage;
