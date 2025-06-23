
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Tokenomics from '../components/Tokenomics';
import HappeningMeter from '../components/HappeningMeter';
import Community from '../components/Community';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <HappeningMeter />
      <Features />
      <Tokenomics />
      <Community />
    </div>
  );
};

export default Index;
