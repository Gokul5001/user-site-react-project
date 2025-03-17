import React from 'react';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-blue-700 py-6 text-white text-center">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <p className="text-lg mt-2">Explore our diverse range of innovative solutions</p>
      </header>

      <main className="flex-grow">
        <section className="py-12 px-4 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/523/309/original/web-development-and-programming-coding-concept-seo-optimization-modern-web-design-on-laptop-screen-vector.jpg"
                alt="Product Image"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 text-blue-700">Product Name</h2>
              <p className="text-lg mb-6 text-gray-600">
                Discover how our product can transform your business operations with cutting-edge technology and intuitive design.
              </p>
              <Link
  to="/contact"
  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300"
>
  Contact
</Link>

            </div>
          </div>
        </section>

        <section className="bg-white py-12 px-4 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-700">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    
              {[
                { title: 'Feature One', description: 'Experience unparalleled performance with our cutting-edge algorithms.' },
                { title: 'Feature Two', description: 'Enjoy a seamless user interface designed for maximum efficiency.' },
                { title: 'Feature Three', description: 'Benefit from real-time analytics and insights for informed decisions.' },
                { title: 'Feature Four', description: 'Leverage advanced security features to protect your data.' },
                { title: 'Feature Five', description: 'Access our platform from any device, anywhere, anytime.' },
                { title: 'Feature Six', description: 'Customize the platform to fit your unique business needs.' },
              ].map((feature, index) => (
                <div key={index} className="bg-neutral-50 p-6 rounded-lg shadow-lg hover:bg-gray-100">
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-12 px-4 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-700">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Basic', price: '$9.99/month', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
                { title: 'Standard', price: '$19.99/month', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
                { title: 'Premium', price: '$29.99/month', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'] },
              ].map((plan, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-blue-700">{plan.title}</h3>
                  <p className="text-gray-800 text-2xl mb-4">{plan.price}</p>
                  <ul className="text-gray-700 mb-6">
                    {plan.features.map((feature, i) => <li key={i} className="mb-2">• {feature}</li>)}
                  </ul>
                  <Link to="/sign-up" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300">
                    Sign Up
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 w-full py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="mb-4">&copy; 2024 Your Company. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
          </div>
          <p className="mt-4">Contact us: blueblink@gmail.com | Phone: 123-456-7890</p>
        </div>
      </footer>
    </div>
  );
}

export default ProductPage;
