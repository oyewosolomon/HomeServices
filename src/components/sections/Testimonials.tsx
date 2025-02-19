import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      service: "Interior Painting",
      image: "https://randomuser.me/api/portraits/women/70.jpg",
      rating: 5,
      text: "The painters were professional, efficient, and did an amazing job. They transformed our living room completely!",
      location: "Boston, MA"
    },
    {
      name: "Michael Chen",
      service: "Plumbing Services",
      image: "https://randomuser.me/api/portraits/men/57.jpg",
      rating: 5,
      text: "Fast response time and excellent work. Fixed our emergency leak within hours. Highly recommended!",
      location: "San Francisco, CA"
    },
    {
      name: "Emily Rodriguez",
      service: "Landscaping",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
      rating: 5,
      text: "Our yard has never looked better! The team was creative and paid attention to every detail.",
      location: "Austin, TX"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-4">
            <Star className="w-4 h-4 text-blue-600 mr-2 fill-current" />
            <span className="text-sm font-medium text-blue-600">4.8/5 Average Rating</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Thousands of Homeowners
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-50 rounded-2xl p-8 relative">
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-100" />
                    
                    {/* Author Info */}
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.location}</p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Service Tag */}
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                      {testimonial.service}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute -right-8 top-1/2 transform -translate-            y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;