import React, { useState, useEffect } from 'react';
import { Brain, Trophy, Users, Globe, Briefcase, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "1M+", label: "Active Users" },
    { icon: <Briefcase className="w-6 h-6" />, value: "500+", label: "Partner Companies" },
    { icon: <Brain className="w-6 h-6" />, value: "95%", label: "Career Success Rate" },
    { icon: <Globe className="w-6 h-6" />, value: "40+", label: "Countries Served" }
  ];

  const team = [
    {
      name: "Dr. Amanda Chen",
      role: "Chief Executive Officer",
      image: "/images/man.jpg",
      bio: "Former Career Development Director at LinkedIn, PhD in Organizational Psychology"
    },
    {
      name: "David Martinez",
      role: "Chief Technology Officer",
      image: "/images/man.jpg",
      bio: "Pioneer in AI-driven career mapping, Ex-Google AI Lead"
    },
    {
      name: "Dr. Rachel Thompson",
      role: "Head of Learning Innovation",
      image: "/images/man.jpg",
      bio: "EdTech innovator with 15+ years in adaptive learning systems"
    },
    {
      name: "Marcus Williams",
      role: "Director of Career Success",
      image: "/images/man.jpg",
      bio: "Certified Career Coach with 10,000+ successful placements"
    }
  ];

  return (
    <div id="about" className="bg-white py-24">
      <div className="container mx-auto px-6">
        {/* Mission Statement */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Transforming Careers Through AI Innovation
          </h2>
          <p className="text-xl text-gray-600">
            CareerPath AI is revolutionizing professional development by combining cutting-edge artificial intelligence 
            with deep career expertise. Our mission is to empower individuals to reach their full potential through 
            personalized career guidance and continuous learning.
          </p>
        </div>

        {/* Stats */}
        <div className={`grid md:grid-cols-4 gap-8 mb-20 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className={`transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Leadership
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-72 object-cover transform group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                    <p className="text-white">{member.bio}</p>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;