import React from 'react';
import { Brain, Target, Briefcase, BookOpen, Trophy, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Skill Assessment",
      description: "Get a comprehensive evaluation of your skills through our advanced AI analysis of your experience, projects, and capabilities."
    },
    {
      icon: Target,
      title: "Personalized Learning Paths",
      description: "Receive custom-tailored learning recommendations based on your career goals and current skill level."
    },
    {
      icon: Briefcase,
      title: "Smart Job Matching",
      description: "Connect with opportunities that perfectly align with your skills and career aspirations through our AI matching algorithm."
    },
    {
      icon: BookOpen,
      title: "Industry-Leading Content",
      description: "Access premium learning materials from top educational institutions and industry experts."
    },
    {
      icon: Trophy,
      title: "Progress Tracking",
      description: "Monitor your skill development and career growth with detailed analytics and milestone tracking."
    },
    {
      icon: Users,
      title: "Professional Network",
      description: "Connect with peers, mentors, and industry leaders to expand your professional network."
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Accelerate Your Career Growth
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Leverage AI-powered tools and insights to take your career to the next level
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-gray-200 p-6 hover:border-indigo-600 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;