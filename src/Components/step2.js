import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './Progressbar'; 

const Step2 = ({ formData, handleChange, nextStep, prevStep }) => {
  const navigate = useNavigate(); // Initialize navigate hook

  const handleCancel = () => {
    navigate('/employees'); 
  };

  return (
    <div className="max-w-xl mx-auto mt-16 p-8 shadow-lg rounded-lg relative z-10 bg-zinc-100">
      {/* Progress Bar */}
      <ProgressBar currentStep={2} totalSteps={6} />

      {/* Contact Details */}
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Contact Details</h2>
      <form onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
        <div className="grid grid-cols-2 gap-6">
          {/* Company Email */}
          <div className="mb-4">
            <label htmlFor="cemail" className="block text-sm font-medium text-gray-700">
              Company Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="cemail"
              name="cemail"
              value={formData.cemail}
              placeholder="Enter Company Email"
              onChange={handleChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          {/* Personal Email */}
          <div className="mb-4">
            <label htmlFor="pemail" className="block text-sm font-medium text-gray-700">
              Personal Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="pemail"
              name="pemail"
              value={formData.pemail}
              placeholder="Enter Personal Email"
              onChange={handleChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          {/* Primary Mobile */}
          <div className="mb-4">
            <label htmlFor="mobile1" className="block text-sm font-medium text-gray-700">
              Primary Mobile<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="mobile1"
              name="mobile1"
              value={formData.mobile1}
              placeholder="Enter Primary Mobile"
              onChange={handleChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          {/* Contact Person (Primary) */}
          <div className="mb-4">
            <label htmlFor="person1" className="block text-sm font-medium text-gray-700">
              Contact Person (Primary)<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="person1"
              name="person1"
              value={formData.person1}
              placeholder="Enter Contact Person (Primary)"
              onChange={handleChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          {/* Secondary Mobile */}
          <div className="mb-4">
            <label htmlFor="mobile2" className="block text-sm font-medium text-gray-700">Secondary Mobile</label>
            <input
              type="tel"
              id="mobile2"
              name="mobile2"
              value={formData.mobile2}
              placeholder="Enter Secondary Mobile"
              onChange={handleChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          {/* Contact Person (Secondary) */}
          <div className="mb-4">
            <label htmlFor="person2" className="block text-sm font-medium text-gray-700">Contact Person (Secondary)</label>
            <input
              type="text"
              id="person2"
              name="person2"
              value={formData.person2}
              placeholder="Enter Contact Person (Secondary)"
              onChange={handleChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          {/* Additional Mobile */}
          <div className="mb-4">
            <label htmlFor="mobile3" className="block text-sm font-medium text-gray-700">Additional Mobile</label>
            <input
              type="tel"
              id="mobile3"
              name="mobile3"
              value={formData.mobile3}
              placeholder="Enter Additional Mobile"
              onChange={handleChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          {/* Contact Person (Additional) */}
          <div className="mb-4">
            <label htmlFor="person3" className="block text-sm font-medium text-gray-700">Contact Person (Additional)</label>
            <input
              type="text"
              id="person3"
              name="person3"
              value={formData.person3}
              placeholder="Enter Contact Person (Additional)"
              onChange={handleChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
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

export default Step2;
