// SalaryDetails.js
import React, { useState } from 'react';
import ProgressBar from './Progressbar';

const SalaryDetails = ({ formData, setFormData, prevStep, nextStep }) => {
  const [errors, setErrors] = useState({
    grossSalary: '',
    esi: '',
    pf: '',
    netSalary: '',
    pfNumber: '',
    esiNumber: '',
    uan: ''
  });

  const handlePrev = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateForm()) {
      nextStep(); 
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    clearErrorMessage(name);
  };

  const clearErrorMessage = (field) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.grossSalary.trim()) {
      newErrors.grossSalary = 'Gross Salary is required';
      isValid = false;
    }

    if (!formData.esi.trim()) {
      newErrors.esi = 'ESI is required';
      isValid = false;
    }

    if (!formData.pf.trim()) {
      newErrors.pf = 'PF is required';
      isValid = false;
    }

    if (!formData.netSalary.trim()) {
      newErrors.netSalary = 'Net Salary is required';
      isValid = false;
    }

    if (!formData.pfNumber.trim()) {
      newErrors.pfNumber = 'PF Number is required';
      isValid = false;
    }

    if (!formData.esiNumber.trim()) {
      newErrors.esiNumber = 'ESI Number is required';
      isValid = false;
    }

    if (!formData.uan.trim()) {
      newErrors.uan = 'UAN is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div className="max-w-xl mx-auto mt-16 p-8 shadow-lg rounded-lg relative z-10 bg-zinc-100">
      <ProgressBar currentStep={5} totalSteps={6} />
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Salary Details</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-gray-900">Gross Salary:<span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="grossSalary" 
              placeholder="Enter Gross Salary" 
              value={formData.grossSalary} 
              onChange={handleInputChange} 
              className="w-full p-2 mt-2 border border-gray-300 rounded"
            />
            {errors.grossSalary && <span className="text-red-500 text-sm mt-1">{errors.grossSalary}</span>}
          </div>
          <div>
            <label className="block text-gray-900">PF:<span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="pf" 
              placeholder="Enter PF" 
              value={formData.pf} 
              onChange={handleInputChange} 
              className="w-full p-2 mt-2 border border-gray-300 rounded"
            />
            {errors.pf && <span className="text-red-500 text-sm mt-1">{errors.pf}</span>}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-gray-900">ESI:<span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="esi" 
              placeholder="Enter ESI" 
              value={formData.esi} 
              onChange={handleInputChange} 
              className="w-full p-2 mt-2 border border-gray-300 rounded"
            />
            {errors.esi && <span className="text-red-500 text-sm mt-1">{errors.esi}</span>}
          </div>
          <div>
            <label className="block text-gray-900">NET Salary:<span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="netSalary" 
              placeholder="Enter NET Salary" 
              value={formData.netSalary} 
              onChange={handleInputChange} 
              className="w-full p-2 mt-2 border border-gray-300 rounded"
            />
            {errors.netSalary && <span className="text-red-500 text-sm mt-1">{errors.netSalary}</span>}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-gray-900">PF Number:<span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="pfNumber" 
              placeholder="Enter PF Number" 
              value={formData.pfNumber} 
              onChange={handleInputChange} 
              className="w-full p-2 mt-2 border border-gray-300 rounded"
            />
            {errors.pfNumber && <span className="text-red-500 text-sm mt-1">{errors.pfNumber}</span>}
          </div>
          <div>
            <label className="block text-gray-900">ESI Number:<span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="esiNumber" 
              placeholder="Enter ESI Number" 
              value={formData.esiNumber} 
              onChange={handleInputChange} 
              className="w-full p-2 mt-2 border border-gray-300 rounded"
            />
            {errors.esiNumber && <span className="text-red-500 text-sm mt-1">{errors.esiNumber}</span>}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-900">United Account Number (UAN):<span className="text-red-500">*</span></label>
          <input 
            type="text" 
            name="uan" 
            placeholder="Enter United Account Number" 
            value={formData.uan} 
            onChange={handleInputChange} 
            className="w-full p-2 mt-2 border border-gray-300 rounded"
          />
          {errors.uan && <span className="text-red-500 text-sm mt-1">{errors.uan}</span>}
        </div>
        <div className="flex justify-between mt-4">
          <button 
            type="button" 
            onClick={handlePrev} 
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Back
          </button>
          <button 
            type="button" 
            onClick={handleNext} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default SalaryDetails;
