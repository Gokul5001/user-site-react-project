import React, { useState } from 'react';
import ProgressBar from './Progressbar';

const CommunicationDetails = ({ formData, setFormData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({
    companyEmail: '',
    personalEmail: '',
    primaryMobile: '',
    contactPersonPrimary: '',
    secondaryMobile: '',
    contactPersonSecondary: '',
    additionalMobile: '',
    contactPersonAdditional: '',
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

    if (!formData.companyEmail.trim()) {
      newErrors.companyEmail = 'Company Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.companyEmail)) {
      newErrors.companyEmail = 'Company Email is invalid';
      isValid = false;
    }

    if (!formData.personalEmail.trim()) {
      newErrors.personalEmail = 'Personal Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.personalEmail)) {
      newErrors.personalEmail = 'Personal Email is invalid';
      isValid = false;
    }

    if (!formData.primaryMobile.trim()) {
      newErrors.primaryMobile = 'Primary Mobile is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.primaryMobile)) {
      newErrors.primaryMobile = 'Primary Mobile must be 10 digits';
      isValid = false;
    }

    if (!formData.contactPersonPrimary.trim()) {
      newErrors.contactPersonPrimary = 'Contact Person (Primary) is required';
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
      {/* Progress Bar */}
      <ProgressBar currentStep={2} totalSteps={6} />

      {/* Communication Details */}
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Communication Details</h2>
      <form onSubmit={handleNext}>

        <div className="grid grid-cols-2 gap-6">
          <div className="mb-4">
            <label htmlFor="companyEmail" className="block text-gray-900">Company Email<span className="text-red-500">*</span></label>
            <input 
              type="email" 
              id="companyEmail" 
              name="companyEmail" 
              value={formData.companyEmail} 
              placeholder="Enter Company Email" 
              onChange={(e) => {
                setFormData({ ...formData, companyEmail: e.target.value });
                clearErrorMessage('companyEmail');
              }} 
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.companyEmail && <span className="text-red-500 text-sm">{errors.companyEmail}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="personalEmail" className="block text-gray-900">Personal Email<span className="text-red-500">*</span></label>
            <input 
              type="email" 
              id="personalEmail" 
              name="personalEmail" 
              value={formData.personalEmail} 
              placeholder="Enter Personal Email" 
              onChange={(e) => {
                setFormData({ ...formData, personalEmail: e.target.value });
                clearErrorMessage('personalEmail');
              }} 
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.personalEmail && <span className="text-red-500 text-sm">{errors.personalEmail}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="primaryMobile" className="block text-gray-900">Primary Mobile<span className="text-red-500">*</span></label>
            <input 
              type="tel" 
              id="primaryMobile" 
              name="primaryMobile" 
              value={formData.primaryMobile} 
              placeholder="Enter Primary Mobile" 
              onChange={(e) => {
                setFormData({ ...formData, primaryMobile: e.target.value });
                clearErrorMessage('primaryMobile');
              }} 
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.primaryMobile && <span className="text-red-500 text-sm">{errors.primaryMobile}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="contactPersonPrimary" className="block text-gray-900">Contact Person (Primary)<span className="text-red-500">*</span></label>
            <input 
              type="text" 
              id="contactPersonPrimary" 
              name="contactPersonPrimary" 
              value={formData.contactPersonPrimary} 
              placeholder="Enter Contact Person (Primary)" 
              onChange={(e) => {
                setFormData({ ...formData, contactPersonPrimary: e.target.value });
                clearErrorMessage('contactPersonPrimary');
              }} 
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.contactPersonPrimary && <span className="text-red-500 text-sm">{errors.contactPersonPrimary}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="secondaryMobile" className="block text-gray-900">Secondary Mobile</label>
            <input 
              type="tel" 
              id="secondaryMobile" 
              name="secondaryMobile" 
              value={formData.secondaryMobile} 
              placeholder="Enter Secondary Mobile" 
              onChange={(e) => setFormData({ ...formData, secondaryMobile: e.target.value })} 
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contactPersonSecondary" className="block text-gray-900">Contact Person (Secondary)</label>
            <input 
              type="text" 
              id="contactPersonSecondary" 
              name="contactPersonSecondary" 
              value={formData.contactPersonSecondary} 
              placeholder="Enter Contact Person (Secondary)" 
              onChange={(e) => setFormData({ ...formData, contactPersonSecondary: e.target.value })} 
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="additionalMobile" className="block text-gray-900">Additional Mobile</label>
            <input 
              type="tel" 
              id="additionalMobile" 
              name="additionalMobile" 
              value={formData.additionalMobile} 
              placeholder="Enter Additional Mobile" 
              onChange={(e) => setFormData({ ...formData, additionalMobile: e.target.value })} 
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contactPersonAdditional" className="block text-gray-900">Contact Person (Additional)</label>
            <input 
              type="text" 
              id="contactPersonAdditional" 
              name="contactPersonAdditional" 
              value={formData.contactPersonAdditional} 
              placeholder="Enter Contact Person (Additional)" 
              onChange={(e) => setFormData({ ...formData, contactPersonAdditional: e.target.value })} 
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button onClick={handlePrev} className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">Back</button>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Next</button>
        </div>
      </form>
    </div>
  );
};

export default CommunicationDetails;

