import React from 'react';


import { FeaturedAnimals, Questions, Hero, Reviews, Contacts } from '../components/index';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedAnimals />
      <Questions />
      <Reviews />
      <Contacts/>
    </main>
  );
};



export default HomePage;
