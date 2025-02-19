import React, { useState, FormEvent } from 'react';
import { Calendar, Clock, Mail, MessageSquare, Phone, MapPin } from 'lucide-react';

// Define the type for the form data
interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  preferredDate: string;
  preferredTime: string;
}

const Contact: React.FC = () => {
  // Initialize state with the FormData type
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  // Handle form submission with proper event type
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Ready to Transform Your Career?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Schedule a personalized demo to see how CareerPath AI can accelerate your professional growth.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-indigo-600 mr-4" />
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-600">+1 (888) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-6 h-6 text-indigo-600 mr-4" />
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">demo@careerpathai.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-indigo-600 mr-4" />
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Office</h3>
                  <p className="mt-1 text-gray-600">123 Innovation Drive<br />San Francisco, CA 94105</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-indigo-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900">What to Expect</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm mt-0.5">1</div>
                  <p className="ml-3 text-gray-600">Personalized platform walkthrough</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm mt-0.5">2</div>
                  <p className="ml-3 text-gray-600">Q&A session with our career experts</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm mt-0.5">3</div>
                  <p className="ml-3 text-gray-600">Custom implementation plan</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Schedule Your Demo</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700">
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option value="">Select a time</option>
                    <option value="9:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-200"
              >
                Schedule Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;