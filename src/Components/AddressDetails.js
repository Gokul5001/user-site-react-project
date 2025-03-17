import React, { useState } from 'react';
import ProgressBar from './Progressbar'; 

const AddressDetails = ({ formData, setFormData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({
    presentAddress: '',
    permanentAddress: '',
  });

  const handleNext = (e) => {
    e.preventDefault();
    if (validateForm()) {
      nextStep();
    }
  };

  const handlePrev = (e) => {
    e.preventDefault();
    prevStep();
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate present address
    if (!formData.presentAddress.trim()) {
      newErrors.presentAddress = 'Present Address is required';
      isValid = false;
    } else if (formData.presentAddress.length < 30 || formData.presentAddress.length > 100) {
      newErrors.presentAddress = 'Present Address must be between 30 and 100 characters';
      isValid = false;
    }

    // Validate permanent address
    if (!formData.permanentAddress.trim()) {
      newErrors.permanentAddress = 'Permanent Address is required';
      isValid = false;
    } else if (formData.permanentAddress.length < 30 || formData.permanentAddress.length > 100) {
      newErrors.permanentAddress = 'Permanent Address must be between 30 and 100 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const clearErrorMessage = (field) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
  };

  return (
    <div className="max-w-xl mx-auto mt-16 p-8 shadow-lg rounded-lg relative z-10 bg-zinc-100">
      <ProgressBar currentStep={3} totalSteps={6} />
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Address Details</h2>
      <form onSubmit={handleNext}>
        <div className="mb-4">
          <label htmlFor="presentAddress" className="block text-gray-900">
            Present Address<span className="text-red-500">*</span>
          </label>
          <textarea
            id="presentAddress"
            name="presentAddress"
            value={formData.presentAddress}
            placeholder="Enter Present Address"
            onChange={(e) => {
              setFormData({ ...formData, presentAddress: e.target.value });
              clearErrorMessage('presentAddress');
            }}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
          {errors.presentAddress && <span className="text-red-500 text-sm">{errors.presentAddress}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="permanentAddress" className="block text-gray-900">
            Permanent Address<span className="text-red-500">*</span>
          </label>
          <textarea
            id="permanentAddress"
            name="permanentAddress"
            value={formData.permanentAddress}
            placeholder="Enter Permanent Address"
            onChange={(e) => {
              setFormData({ ...formData, permanentAddress: e.target.value });
              clearErrorMessage('permanentAddress');
            }}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
          {errors.permanentAddress && <span className="text-red-500 text-sm">{errors.permanentAddress}</span>}
        </div>

        <div className="flex justify-between mt-6">
          <button onClick={handlePrev} className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            Back
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressDetails;
