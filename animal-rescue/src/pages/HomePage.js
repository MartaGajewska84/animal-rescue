import React from 'react';


import { FeaturedAnimals, Questions, Hero, Reviews } from '../components/index';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedAnimals />
      <Questions />
      <Reviews />
    </main>
  );
};



export default HomePage;
