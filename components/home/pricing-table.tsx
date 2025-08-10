import React from 'react';

const PricingTable = () => {

    
  const pricingPlans = [
    {
      id: 'daily',
      name: 'Daily Pass',
      price: 1000,
      period: 'per day',
      description: 'Perfect for occasional visits',
      features: [
        'Full gym access',
        'Basic equipment usage',
        'Locker room access',
        'Single day entry'
      ],
      popular: false
    },
    {
      id: 'weekly',
      name: 'One Week',
      price: 5000,
      period: 'per week',
      description: 'Great for short-term commitment',
      features: [
        'Full gym access',
        'All equipment usage',
        'Locker room access',
        'Group classes included',
        '7 consecutive days'
      ],
      popular: false
    },
    {
      id: 'biweekly',
      name: 'Two Weeks',
      price: 7000,
      period: 'per 2 weeks',
      description: 'Extended trial period',
      features: [
        'Full gym access',
        'All equipment usage',
        'Locker room access',
        'Group classes included',
        'Personal trainer consultation',
        '14 consecutive days'
      ],
      popular: false
    },
    {
      id: 'triweekly',
      name: 'Three Weeks',
      price: 9000,
      period: 'per 3 weeks',
      description: 'Build your routine',
      features: [
        'Full gym access',
        'All equipment usage',
        'Locker room access',
        'Unlimited group classes',
        'Personal trainer consultation',
        'Nutrition guidance',
        '21 consecutive days'
      ],
      popular: false
    },
    {
      id: 'monthly',
      name: 'Monthly',
      price: 12000,
      period: 'per month',
      description: 'Most popular choice',
      features: [
        'Full gym access',
        'All equipment usage',
        'Locker room access',
        'Unlimited group classes',
        '2 personal training sessions',
        'Nutrition plan',
        'Progress tracking',
        'Guest passes (2/month)'
      ],
      popular: true
    },
    {
      id: 'quarterly',
      name: 'Three Months',
      price: 36000,
      period: 'per quarter',
      description: 'Best value for commitment',
      features: [
        'Full gym access',
        'All equipment usage',
        'Premium locker access',
        'Unlimited group classes',
        '8 personal training sessions',
        'Custom nutrition plan',
        'Progress tracking',
        'Guest passes (6/quarter)',
        'Priority booking'
      ],
      popular: false
    },
    {
      id: 'biannual',
      name: 'Six Months',
      price: 72000,
      period: 'per 6 months',
      description: 'Serious fitness journey',
      features: [
        'Full gym access',
        'All equipment usage',
        'Premium locker access',
        'Unlimited group classes',
        '16 personal training sessions',
        'Custom nutrition plan',
        'Progress tracking',
        'Guest passes (12/6 months)',
        'Priority booking',
        'Wellness assessments'
      ],
      popular: false
    },
    {
      id: 'annual',
      name: 'One Year',
      price: 144000,
      period: 'per year',
      description: 'Ultimate fitness commitment',
      features: [
        'Full gym access',
        'All equipment usage',
        'VIP locker access',
        'Unlimited group classes',
        '36 personal training sessions',
        'Custom nutrition plan',
        'Progress tracking',
        'Guest passes (24/year)',
        'Priority booking',
        'Monthly wellness assessments',
        'Supplement discounts'
      ],
      popular: false
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Choose Your
            <span className="text-transparent bg-clip-text bg-accent-gradient ml-3">
              Fitness Plan
            </span>
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Flexible membership options designed to fit your lifestyle and fitness goals. 
            Start your transformation today with our premium facilities and expert guidance.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col ${
                plan.popular
                  ? 'border-primary-500 shadow-primary-100 ring-2 ring-primary-200'
                  : 'border-slate-200 hover:border-primary-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8 flex flex-col h-full">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-navy-600 text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-navy-900">
                      {formatPrice(plan.price)}
                    </span>
                    <span className="text-navy-600 text-sm ml-2">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features - Flex grow to push button to bottom */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-navy-700 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button - Always at bottom */}
                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 mt-auto ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg hover:shadow-xl hover:scale-105 hover:from-primary-600 hover:to-primary-700'
                      : 'bg-navy-900 text-white hover:bg-navy-800 hover:shadow-lg hover:scale-105'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <p className="text-navy-600 text-lg mb-4">
            All memberships include access to our premium facilities and equipment
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-navy-500">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No hidden fees
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Cancel anytime
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              24/7 access
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;