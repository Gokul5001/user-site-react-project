import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './Progressbar';

const Step3 = ({ formData, handleChange, nextStep, prevStep }) => {
  const navigate = useNavigate(); 

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  const handlePrev = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handleCancel = () => {
    navigate('/employees'); 
  };

  return (
    <div className="max-w-xl mx-auto mt-16 p-8 shadow-lg rounded-lg relative z-10 bg-zinc-100">
      <ProgressBar currentStep={3} totalSteps={6} />
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Address Details</h2>
      <form onSubmit={handleNext}>
        {/* Present Address */}
        <div className="mb-4">
          <label htmlFor="address1" className="block text-sm font-medium text-gray-700">
            Present Address
          </label>
          <textarea
            id="address1"
            name="address1"
            value={formData.address1}
            placeholder="Enter Present Address"
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        {/* Permanent Address */}
        <div className="mb-4">
          <label htmlFor="address2" className="block text-sm font-medium text-gray-700">
            Permanent Address
          </label>
          <textarea
            id="address2"
            name="address2"
            value={formData.address2}
            placeholder="Enter Permanent Address"
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
     {/* Cancel Button */}
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

export default Step3;
