import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Tokenomics = () => {
  const tokenomicsData = [
    {
      label: "Total Supply",
      value: "1,000,000,000 $JACK",
      description: "One billion tokens of pure nothing"
    },
    {
      label: "Circulating Supply",
      value: "∞ $JACK",
      description: "Infinite, like your existential dread"
    },
    {
      label: "Market Cap",
      value: "$0.00",
      description: "Accurately reflects its value"
    },
    {
      label: "Liquidity Pool",
      value: "Stagnant",
      description: "Like everything else in your life"
    },
    {
      label: "Team Allocation",
      value: "6%",
      description: "Team too apathetic to claim more tokens"
    },
    {
      label: "Marketing Budget",
      value: "What's the point?",
      description: "Nothing ever happens anyway"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tokenomics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Behold our revolutionary economic model designed to guarantee zero growth, 
            zero innovation, and zero excitement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tokenomicsData.map((item, index) => (
            <Card key={index} className="border-gray-200 bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-gray-700">
                  {item.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-900 mb-2">
                  {item.value}
                </p>
                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Token Symbol and Name Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-gray-300 bg-white shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-gray-900 mb-2">
                Token Information
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div>
                <p className="text-lg text-gray-600">Token Symbol</p>
                <p className="text-4xl font-bold text-gray-900">$JACK</p>
              </div>
              <div>
                <p className="text-lg text-gray-600">Token Name</p>
                <p className="text-3xl font-bold text-gray-900">CHUDJACK</p>
              </div>
              <div>
                <p className="text-lg text-gray-600">Official Motto</p>
                <p className="text-xl font-mono text-gray-700">"Nothing ever happens"</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;