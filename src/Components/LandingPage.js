import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';


function LandingPage() {
  const currentYear= new Date().getFullYear();
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
    <div id="home" className="flex-grow flex flex-col md:flex-row items-center justify-start py-12 w-full">
      <div className="md:w-1/2 flex flex-col items-center justify-center px-8">
        <h2 className="text-3xl font-bold mb-4 mt-9 text-blue-700">CRAFTED FOR BUSINESS</h2>
        <p className="text-lg mb-6 text-gray-600">
          Embark on a transformative journey with us.
        </p>
        <Link
          to="/get-started"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300"
        >
          Get Started
        </Link>
        <div className="mt-10 text-center max-w-md mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 mb-8 px-1">
            At Blue, we offer a cutting-edge platform designed to empower you in reaching your goals efficiently and effectively. Join our community to explore new opportunities and take your first step towards success.
          </p>
          <div className="flex justify-center space-x-4 mb-10 mt-9">
  <Link
    to="https://www.linkedin.com/company/your-company"
    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={faLinkedin} />
  </Link>
  <Link
    to="https://twitter.com/your_company"
    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={faTwitter} />
  </Link>
  <Link
    to="https://www.facebook.com/yourcompany"
    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={faFacebook} />
  </Link>
</div>
        </div>
      </div>
      <div className="md:w-1/2 h-full flex items-center justify-center">
        <img
          src="https://img.freepik.com/free-photo/office-workers-using-finance-graphs_23-2150408682.jpg?t=st=1716977595~exp=1716978195~hmac=826548ca16451f151a6096a8aa1989e6630195274b0e285264b0d84e3d44584f.webp"
          alt="Technology"
          className="w-med   h-auto object-cover rounded-lg"
        />
      </div>
    </div>
    <div id="About" className="bg-white w-full py-12">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-semibold mb-6 text-blue-700 text-center">Our Features</h2>
    <p className="text-gray-600 text-center mb-8">At our company, we are committed to providing exceptional services and innovative solutions to help you achieve your goals. Our platform is designed with you in mind, offering unique features that stand out in the industry.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      <div className="bg-neutral-50 p-6 rounded-lg shadow-lg hover:bg-gray-100">
        <h3 className="text-xl font-bold mb-4">Feature One</h3>
        <p className="text-gray-700 mb-4">Explore the unique aspects of our platform that set us apart from the competition. Our user-friendly interface and advanced algorithms ensure you get the best experience.</p>
        <Link to="/feature-one" className="text-blue-700 hover:underline">Learn more</Link>
      </div>
      <div className="bg-neutral-50 p-6 rounded-lg shadow-lg hover:bg-gray-100">
        <h3 className="text-xl font-bold mb-4">Feature Two</h3>
        <p className="text-gray-700 mb-4">Discover how our tools can help you achieve your professional goals effectively. From personalized recommendations to robust analytics, we've got you covered.</p>
        <Link to="/feature-two" className="text-indigo-500 hover:underline">Learn more</Link>
      </div>
      <div className="bg-neutral-50 p-6 rounded-lg shadow-lg hover:bg-gray-100">
        <h3 className="text-xl font-bold mb-4">Feature Three</h3>
        <p className="text-gray-700 mb-4">Learn more about the innovative solutions we provide for our users. Our platform leverages the latest technologies to deliver unmatched performance and reliability.</p>
        <Link to="/feature-three" className="text-indigo-500 hover:underline">Learn more</Link>
      </div>
    </div>
    <p className="text-gray-600 text-center mt-8">We are dedicated to continuously improving our services and features to meet the evolving needs of our users. Join us on this journey and experience the difference.</p>
  </div>
</div>
<div id="Services" className="bg-gray-50 w-full py-12">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-semibold mb-6 text-blue-700 text-center">Our Services</h2>
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-100">
        <h3 className="text-xl font-bold mb-4">Consulting Services</h3>
        <p className="text-gray-700 mb-4">Our expert consulting services are designed to provide you with strategic insights and actionable solutions to drive your business forward. We prioritize understanding your unique needs and delivering tailored recommendations.</p>
        <p className="text-indigo-500 font-bold">- Your Company</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-100">
        <h3 className="text-xl font-bold mb-4">Technical Support</h3>
        <p className="text-gray-700 mb-4">We offer comprehensive technical support to ensure your systems run smoothly and efficiently. Our dedicated team is available around the clock to assist you with any technical challenges you may face.</p>
        <p className="text-indigo-500 font-bold">- Your Company</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-100">
        <h3 className="text-xl font-bold mb-4">Custom Development</h3>
        <p className="text-gray-700 mb-4">Our custom development services provide you with tailored software solutions that meet your specific requirements. We work closely with you to create robust and scalable applications that drive your business success.</p>
        <p className="text-indigo-500 font-bold">- Your Company</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-100">
        <h3 className="text-xl font-bold mb-4">Training and Workshops</h3>
        <p className="text-gray-700 mb-4">Empower your team with our comprehensive training programs and workshops. We offer hands-on learning experiences to help you maximize the use of our products and improve your overall productivity.</p>
        <p className="text-indigo-500 font-bold">- Your Company</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-100">
        <h3 className="text-xl font-bold mb-4">Cloud Solutions</h3>
        <p className="text-gray-700 mb-4">Leverage the power of the cloud with our state-of-the-art cloud solutions. We provide secure, scalable, and efficient cloud services to meet your business needs and enhance your operational capabilities.</p>
        <p className="text-indigo-500 font-bold">- Your Company</p>
      </div>
    </div>
  </div>
</div>
<div className="med-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.399419088093!2d77.8927313745939!3d11.378508888809224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96190f45423bd%3A0x532e623ef33ee390!2sNithra%20Apps%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1717762426513!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
      <footer id="contact" className="bg-gray-800 w-full py-6">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
    <p className="mb-4">&copy; {currentYear} Your Company. All rights reserved.</p>
    <div className="flex justify-center space-x-4">
      
      <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
      <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
    </div>
    <p className="mt-4">Contact us: blueblink@gmail.com | Phone:123-456-7890</p>
  </div>
</footer>

    </div>
  );
}

export default LandingPage;
