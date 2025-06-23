
import React, { useState, useEffect } from 'react';

const HappeningMeter = () => {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => {
        const newPos = prev + (direction * 0.5);
        if (newPos >= 100) {
          setDirection(-1);
          return 100;
        }
        if (newPos <= 0) {
          setDirection(1);
          return 0;
        }
        return newPos;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [direction]);

  const getCurrentText = () => {
    if (position < 20) return "Nothing will happen";
    if (position < 40) return "Still nothing";
    if (position < 60) return "Maybe something?";
    if (position < 80) return "It's happening!";
    return "Nothing happened";
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          The Happening Meter™
        </h2>
        
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Our patented algorithm continuously monitors global events and consistently confirms: nothing ever happens.
        </p>
        
        <div className="max-w-2xl mx-auto">
          {/* Meter Container */}
          <div className="relative bg-white rounded-full h-12 border-4 border-gray-300 shadow-inner overflow-hidden mb-6">
            {/* Track */}
            <div className="absolute inset-2 bg-gradient-to-r from-red-200 via-yellow-200 to-green-200 rounded-full"></div>
            
            {/* Slider */}
            <div 
              className="absolute top-1 w-8 h-8 bg-gray-900 rounded-full shadow-lg transition-all duration-100 ease-linear"
              style={{ left: `calc(${position}% - 16px + 8px)` }}
            >
              <div className="absolute inset-1 bg-white rounded-full"></div>
            </div>
          </div>
          
          {/* Labels */}
          <div className="flex justify-between text-sm text-gray-500 mb-6">
            <span>Nothing will happen</span>
            <span>It's happening!</span>
          </div>
          
          {/* Current Status */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-2xl font-bold text-gray-900 mb-2">
              Current Status: {getCurrentText()}
            </p>
            <p className="text-gray-600">
              Confidence Level: {(100 - position).toFixed(0)}% (that nothing will happen)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappeningMeter;
