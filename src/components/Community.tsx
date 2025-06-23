import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Users, ExternalLink } from 'lucide-react';

const Community = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join the Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow believers in the philosophy that nothing ever happens. 
            Share your apathy with like-minded individuals.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Telegram Card */}
            <Card className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <MessageCircle className="w-12 h-12 text-blue-500" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Telegram Chat
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Join our Telegram group to discuss how nothing is happening in real-time. 
                  Share memes, complaints, and general disillusionment.
                </p>
                <Button 
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-lg transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('https://t.me/chudjackcoin', '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Join Telegram
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
            
            {/* Community Stats */}
            <Card className="border-gray-200">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Users className="w-12 h-12 text-gray-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Community Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Members:</span>
                  <span className="font-bold text-gray-900">42</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Active Today:</span>
                  <span className="font-bold text-gray-900">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Things That Happened:</span>
                  <span className="font-bold text-gray-900">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Hope Level:</span>
                  <span className="font-bold text-gray-900">Critically Low</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 CHUDJACK. All rights reserved (not that it matters).
              <br />
              Built with apathy and resignation. Nothing ever happens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;