import React, { useState } from 'react';
import ProgressBar from './Progressbar'; 

const EducationDetails = ({ formData, setFormData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({
    qualification: '',
    institution: '',
    certificates: '',
    previousExperience: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.qualification.trim()) {
      newErrors.qualification = 'Qualification is required';
      isValid = false;
    }

    if (!formData.institution.trim()) {
      newErrors.institution = 'Institution is required';
      isValid = false;
    }

    if (!formData.certificates.trim()) {
      newErrors.certificates = 'Details of certificates submitted are required';
      isValid = false;
    } else if (formData.certificates.length < 30 || formData.certificates.length > 100) {
      newErrors.certificates = 'Certificates submitted must be between 30 and 100 characters long';
      isValid = false;
    }

    if (formData.previousExperience.trim() !== '') {
      const experience = parseInt(formData.previousExperience);
      if (isNaN(experience) || experience < 0 || experience > 10) {
        newErrors.previousExperience = 'Previous experience must be an integer value between 0 and 10';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

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

  const clearError = (field) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
  };

  return (
    <div className="max-w-xl mx-auto mt-16 p-8 shadow-lg rounded-lg relative z-10 bg-zinc-100">
      <ProgressBar currentStep={4} totalSteps={6} />
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Educational Details</h2>
      <form onSubmit={handleNext}>
        <div className="mb-4">
          <label className="block text-gray-900">Qualification:<span className="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="Enter Qualification"
            value={formData.qualification}
            onChange={(e) => {
              setFormData({ ...formData, qualification: e.target.value });
              clearError('qualification');
            }}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
          />
          {errors.qualification && <div className="text-red-500 text-sm mt-1">{errors.qualification}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-900">Institution Studied:<span className="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="Enter Institution studied"
            value={formData.institution}
            onChange={(e) => {
              setFormData({ ...formData, institution: e.target.value });
              clearError('institution');
            }}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
          />
          {errors.institution && <div className="text-red-500 text-sm mt-1">{errors.institution}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-900">Certificates Submitted:<span className="text-red-500">*</span></label>
          <textarea
            placeholder="Enter Certificates Submitted"
            value={formData.certificates}
            onChange={(e) => {
              setFormData({ ...formData, certificates: e.target.value });
              clearError('certificates');
            }}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
          />
          {errors.certificates && <div className="text-red-500 text-sm mt-1">{errors.certificates}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-900">Previous Experience (0-10 years):</label>
          <input
            type="text"
            placeholder="Enter Previous Experience"
            value={formData.previousExperience}
            onChange={(e) => {
              setFormData({ ...formData, previousExperience: e.target.value });
              clearError('previousExperience');
            }}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
          />
          {errors.previousExperience && <div className="text-red-500 text-sm mt-1">{errors.previousExperience}</div>}
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handlePrev}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default EducationDetails;


