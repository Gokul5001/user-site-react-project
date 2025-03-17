import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './Progressbar';

const Step5 = ({ formData, handleChange, nextStep, prevStep }) => {

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  const handlePrev = (e) => {
    e.preventDefault();
    prevStep();
  };

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/employees');
  };

  return (
    <div className="max-w-xl mx-auto mt-16 p-8 shadow-lg rounded-lg relative z-10 bg-zinc-100">
      {/* Progress Bar */}
      <ProgressBar currentStep={5} totalSteps={6} />

      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Salary Details</h2>
      <form onSubmit={handleNext}>

      {/* Form Fields */}
      <div className="grid grid-cols-2 gap-6">
        {/* Gross Salary */}
        <div className="mb-4 col-span-2 sm:col-span-1">
          <label htmlFor="gs" className="block text-sm font-medium text-gray-700">
            Gross Salary
          </label>
          <input
            type="text"
            id="gs"
            name="gs"
            value={formData.gs}
            placeholder="Enter Gross Salary"
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        {/* PF */}
        <div className="mb-4 col-span-2 sm:col-span-1">
          <label htmlFor="pf" className="block text-sm font-medium text-gray-700">
            PF
          </label>
          <input
            type="text"
            id="pf"
            name="pf"
            value={formData.pf}
            placeholder="Enter PF"
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        {/* ESI */}
        <div className="mb-4 col-span-2 sm:col-span-1">
          <label htmlFor="esi" className="block text-sm font-medium text-gray-700">
            ESI
          </label>
          <input
            type="text"
            id="esi"
            name="esi"
            value={formData.esi}
            placeholder="Enter ESI"
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        {/* Net Salary */}
        <div className="mb-4 col-span-2 sm:col-span-1">
          <label htmlFor="netsal" className="block text-sm font-medium text-gray-700">
            Net Salary
          </label>
          <input
            type="text"
            id="netsal"
            name="netsal"
            value={formData.netsal}
            placeholder="Enter Net Salary"
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        {/* PF Number */}
        <div className="mb-4 col-span-2 sm:col-span-1">
          <label htmlFor="pfn" className="block text-sm font-medium text-gray-700">
            PF Number
          </label>
          <input
            type="text"
            id="pfn"
            name="pfn"
            value={formData.pfn}
            placeholder="Enter PF Number"
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        {/* ESI Number */}
        <div className="mb-4 col-span-2 sm:col-span-1">
          <label htmlFor="esin" className="block text-sm font-medium text-gray-700">
            ESI Number
          </label>
          <input
            type="text"
            id="esin"
            name="esin"
            value={formData.esin}
            placeholder="Enter ESI Number"
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        {/* UAN */}
        <div className="mb-4 col-span-2 sm:col-span-1">
          <label htmlFor="uan" className="block text-sm font-medium text-gray-700">
            UAN
          </label>
          <input
            type="text"
            id="uan"
            name="uan"
            value={formData.uan}
            placeholder="Enter UAN"
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

export default Step5;