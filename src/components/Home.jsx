import React from 'react';
import Hero from './Hero';
import BestSeller from './BestSeller';
import Services from './Services';
import Featured from './Featured';
import Rating from './Rating';
import CallToAction from './CallToAction';

const Home = () => {
  return (
    <>
      <Hero />
      <BestSeller />
      <Services />
      <Featured />
      <Rating />
      <CallToAction />
    </>
  );
};

export default Home;
