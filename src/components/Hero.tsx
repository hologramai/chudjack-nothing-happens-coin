import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background static noise effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Token Symbol */}
        <div className="mb-8 mt-8">
          <div className="inline-block p-4 rounded-full border-4 border-gray-300 bg-white shadow-lg">
            <img 
              src="/pic/meme.png" 
              alt="CHUDJACK" 
              className="w-32 h-32 object-cover rounded-full"
            />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4 tracking-tight">
          $JACK
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-6">
          CHUDJACK
        </h2>
        
        {/* Motto */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-mono">
          "Nothing ever happens"
        </p>
        
        {/* Subtitle */}
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          The first cryptocurrency to guarantee precisely nothing. 
          <br />
          Panic sold? Bought the dip? Doesn't matter. Nothing changes.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://pump.fun/coin/EZ8ivZo4ZjTLZGJtJEmhosxhdby7GSfDRS5Ha6h4pump', '_blank')}
          >
            Buy $JACK (If You Must)
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-gray-400 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://dexscreener.com/solana/7wxf1fmojya4sbj9usyz1u4bjjewwaqpj8gjt5z65zc5', '_blank')}
          >
            View Chart (Flatline Expected)
          </Button>
        </div>
        
        {/* Contract Address */}
        <div className="mt-12 p-4 bg-gray-50 rounded-lg border border-gray-200 max-w-md mx-auto">
          <p className="text-sm text-gray-500 mb-2">Contract Address:</p>
          <p className="font-mono text-xs text-gray-700 break-all">
            EZ8ivZo4ZjTLZGJtJEmhosxhdby7GSfDRS5Ha6h4pump
          </p>
        </div>

        {/* Video */}
        <div className="mt-8 flex justify-center">
          <video 
            className="w-1/2 rounded-lg shadow-lg"
            autoPlay
            muted
            controls
            loop
          >
            <source src="/video/fuentes.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;