import React, { useState } from 'react';
import { Menu, X, ChevronDown, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const services = [
    "Cleaning",
    "Plumbing",
    "Electrical",
    "Painting",
    "Landscaping",
    "HVAC",
    "View All Services"
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-blue-600">HomeServices Hub</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Services Dropdown */}
              <div className={`absolute top-full -left-4 w-56 bg-white shadow-lg rounded-lg py-2 transition-all duration-300 ${
                isServicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                {services.map((service, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>
            
            <a href="#" className="text-gray-600 hover:text-blue-600">How It Works</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Providers</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-600 hover:text-blue-600">
              Login
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Book a Service
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="py-4 space-y-4">
            <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600">
              Services
            </a>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600">
              How It Works
            </a>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600">
              Providers
            </a>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600">
              About
            </a>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600">
              Contact
            </a>
            <div className="border-t border-gray-200 pt-4">
              <button className="block w-full px-4 py-2 text-gray-600 hover:text-blue-600">
                Login
              </button>
              <button className="block w-full px-4 py-2 mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Book a Service
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;