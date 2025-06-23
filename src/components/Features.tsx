import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingDown, Shield, Infinity, Vote, Coins, AlertTriangle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <TrendingDown className="w-8 h-8 text-gray-600" />,
      title: "0% APY Guaranteed",
      description: "Your gains won't inflate. Ever. We promise consistent disappointment."
    },
    {
      icon: <Shield className="w-8 h-8 text-gray-600" />,
      title: "Rugpull-Proof",
      description: "Devs too apathetic to pull the rug. We can barely get out of bed."
    },
    {
      icon: <Infinity className="w-8 h-8 text-gray-600" />,
      title: "Infinite Supply",
      description: "Like political promises and your disappointment in humanity."
    },
    {
      icon: <Vote className="w-8 h-8 text-gray-600" />,
      title: "Governance? Vote on Nothing",
      description: "Results pre-determined: Inertia. Democracy in its purest form."
    },
    {
      icon: <Coins className="w-8 h-8 text-gray-600" />,
      title: "Accumulate More",
      description: "And Nothing Will Happen"
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-gray-600" />,
      title: "Stagnation Protocol",
      description: "Advanced technology ensures absolute zero progress, forever."
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the cutting-edge technology of achieving precisely nothing. 
            Like that thing you're worried about right now.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom disclaimer */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 max-w-4xl mx-auto">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Disclaimer:</strong> This coin achieves precisely nothing. Like that thing you're worried about right now. 
              WAGMI? NAHMI (Nothing Actually Happens, Maybe Indefinitely).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;