import React from 'react';

const FAQ = () => {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-700">What is your return policy?</h3>
          <p className="text-gray-600">Our return policy lasts 30 days...</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-700">How do I track my order?</h3>
          <p className="text-gray-600">You can track your order using...</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-700">How do I contact support?</h3>
          <p className="text-gray-600">You can contact support by filling out the form below...</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
