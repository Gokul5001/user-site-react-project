// Step4.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './Progressbar'; // Import the ProgressBar component

const Step4 = ({ formData, handleChange, nextStep, prevStep }) => {

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  const handlePrev = (e) => {
    e.preventDefault();
    prevStep();
  };
  
  const navigate = useNavigate(); // Initialize navigate hook

  const handleCancel = () => {
    navigate('/employees'); // Navigate to '/employees' on cancel
  };

  return (
    <div className="max-w-xl mx-auto mt-16 p-8 shadow-lg rounded-lg relative z-10 bg-zinc-100">
      <ProgressBar currentStep={4} totalSteps={6} />
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Educational Details</h2>
      <form onSubmit={handleNext}>
        {/* Qualification */}
        <div className="mb-4">
          <label htmlFor="qual" className="block text-sm font-medium text-gray-700">
            Qualification
          </label>
          <input
            type="text"
            id="qual"
            name="qual"
            placeholder="Enter Qualification"
            value={formData.qual}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        {/* Institution Studied */}
        <div className="mb-4">
          <label htmlFor="inst" className="block text-sm font-medium text-gray-700">
            Institution Studied
          </label>
          <input
            type="text"
            id="inst"
            name="inst"
            placeholder="Enter Institution Studied"
            value={formData.inst}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        {/* Certificates Submitted */}
        <div className="mb-4">
          <label htmlFor="cert" className="block text-sm font-medium text-gray-700">
            Certificates Submitted
          </label>
          <textarea
            id="cert"
            name="cert"
            placeholder="Enter Certificates Submitted"
            value={formData.cert}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        {/* Previous Experience */}
        <div className="mb-4">
          <label htmlFor="exp" className="block text-sm font-medium text-gray-700">
            Previous Experience (0-10 years)
          </label>
          <input
            type="text"
            id="exp"
            name="exp"
            placeholder="Enter Previous Experience"
            value={formData.exp}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div className="flex justify-between mt-6">
                
        <button
      type="button"
      onClick={prevStep}
      className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
    >
      Back
    </button>
    <button
            type="button"
            onClick={handleCancel}
            className="px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
    
        <button
      type="button"
      onClick={nextStep}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Next
    </button>
        </div>
      </form>
    </div>
  );
};

export default Step4;
