import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Free",
      description: "Perfect for exploring career opportunities",
      price: {
        monthly: 0,
        annual: 0
      },
      features: [
        "Basic skill assessment",
        "Limited learning paths",
        "Job board access",
        "Community forums"
      ],
      buttonText: "Get Started",
      highlighted: false
    },
    {
      name: "Professional",
      description: "Ideal for career advancement",
      price: {
        monthly: 29,
        annual: 19
      },
      features: [
        "Advanced skill assessments",
        "Unlimited learning paths",
        "Priority job matching",
        "1-on-1 career coaching session",
        "Industry certification prep",
        "Learning progress analytics"
      ],
      buttonText: "Start Pro Plan",
      highlighted: true
    },
    {
      name: "Enterprise",
      description: "Custom solutions for teams",
      price: {
        monthly: null,
        annual: null
      },
      features: [
        "Team skill mapping",
        "Custom learning paths",
        "Advanced analytics",
        "API access",
        "Dedicated support",
        "Custom integrations"
      ],
      buttonText: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Choose Your Path to Success
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Flexible plans to support your career growth journey
          </p>
        </div>

        {/* Pricing toggle */}
        <div className="mt-12 flex justify-center">
          <div className="relative flex items-center p-1 bg-gray-100 rounded-full">
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                isAnnual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
              }`}
            >
              Annual (Save 20%)
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                !isAnnual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg overflow-hidden ${
                plan.highlighted ? 'border-2 border-indigo-600 transform scale-105' : 'border border-gray-200'
              }`}
            >
              <div className="bg-white p-8">
                <h3 className="text-xl font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-2 text-gray-600">
                  {plan.description}
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price[isAnnual ? 'annual' : 'monthly'] === null ? 'Custom' : `$${plan.price[isAnnual ? 'annual' : 'monthly']}`}
                  </span>
                  {plan.price[isAnnual ? 'annual' : 'monthly'] !== null && (
                    <span className="text-gray-600">/month</span>
                  )}
                </p>
                <button
                  className={`mt-8 w-full rounded-md px-4 py-2 text-base font-semibold ${
                    plan.highlighted
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
              <div className="bg-gray-50 px-8 py-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-indigo-600 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;