import React from 'react';
import { ArrowRight, Star, Shield, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full">
              <Star className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-600">4.8/5 Customer Satisfaction</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Your Home Services, 
              <span className="text-blue-600"> Simplified</span>
            </h1>
            
            <p className="text-xl text-gray-600">
              Connect with 20,000+ verified service providers for all your home maintenance needs. Quality service, guaranteed satisfaction.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Find a Provider
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-300">
                Become a Provider
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-blue-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">20,000+</div>
                  <div className="text-gray-600">Verified Providers</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">$100M+</div>
                  <div className="text-gray-600">Services Processed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/api/placeholder/600/400" 
                alt="Happy family with service provider"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="font-medium">4.8/5</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Based on 50,000+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;