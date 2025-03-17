import React, { useState } from 'react';
import ProgressBar from './Progressbar'; 

const PersonalDetails = ({ nextStep, prevStep, formData, setFormData }) => {
  const [errors, setErrors] = useState({
    name: '',
    designation: '',
    dateOfBirth: '',
    dateOfJoining: '',
    maritalStatus: '',
    gender: '',
    fatherOrHusbandName: '',
    eStatus: '', 
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

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters long';
      isValid = false;
    } else if (!/^[A-Z][a-zA-Z\s]*$/.test(formData.name)) {
      newErrors.name = 'Name must start with a capital letter and can only contain alphabetic characters and spaces';
      isValid = false;
    }

    if (!formData.designation.trim()) {
      newErrors.designation = 'Designation is required';
      isValid = false;
    } else if (formData.designation.length < 2) {
      newErrors.designation = 'Designation must be at least 2 characters long';
      isValid = false;
    } else if (!/^[A-Z][a-zA-Z\s]*$/.test(formData.designation)) {
      newErrors.designation = 'Designation must start with a capital letter and can only contain alphabetic characters and spaces';
      isValid = false;
    }

    if (!formData.dateOfBirth.trim()) {
      newErrors.dateOfBirth = 'Date of Birth is required';
      isValid = false;
    } else {
      const enteredDate = new Date(formData.dateOfBirth);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (enteredDate >= today) {
        newErrors.dateOfBirth = 'Date of Birth cannot be today or in the future';
        isValid = false;
      }
    }

    if (!formData.dateOfJoining.trim()) {
      newErrors.dateOfJoining = 'Date of Joining is required';
      isValid = false;
    }

    if (!formData.maritalStatus.trim()) {
      newErrors.maritalStatus = 'Marital Status is required';
      isValid = false;
    }

    if (!formData.gender.trim()) {
      newErrors.gender = 'Gender is required';
      isValid = false;
    }

    if (!formData.fatherOrHusbandName.trim()) {
      newErrors.fatherOrHusbandName = "Father's/Husband's Name is required";
      isValid = false;
    } else if (formData.fatherOrHusbandName.length < 3) {
      newErrors.fatherOrHusbandName = "Father's/Husband's Name must be at least 3 characters long";
      isValid = false;
    }

    if (!formData.eStatus.trim()) {
      newErrors.employeeStatus = 'Employee Status is required';
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
      <ProgressBar currentStep={1} totalSteps={6} />
      {/* Personal Details */}
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Personal Details</h2>
      <form onSubmit={handleNext}>
        <div className="grid grid-cols-2 gap-6">
          {/* Employee Code */}
          <div className="mb-4">
            <label htmlFor="employeeCode" className="block text-gray-900">Employee Code</label>
            <input 
              type="text" 
              id="employeeCode" 
              name="employeeCode"   
              value={formData.employeeCode} 
              placeholder="Enter Employee code" 
              onChange={(e) => setFormData({
                ...formData,
                employeeCode: e.target.value
                  .toUpperCase()
                  .replace(/[^a-zA-Z0-9]/g, '')
                  .slice(0, 8)
              })} 
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
              
          {/* Fingerprint ID */}
          <div className="mb-4">
            <label htmlFor="fingerprintID" className="block text-gray-900">Fingerprint ID</label>
            <input 
              type="text" 
              id="fingerprintID" 
              name="fingerprintID" 
              value={formData.fingerprintID} 
              placeholder="Enter Fingerprint ID" 
              onChange={(e) => setFormData({
                ...formData,
                fingerprintID: e.target.value
                  .replace(/[^0-9]/g, '')
                  .slice(0, 4)
              })} 
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-900">Name<span className="text-red-500">*</span></label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              placeholder="Enter Name" 
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                clearErrorMessage('name');
              }} 
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
          </div>

          {/* Designation */}
          <div className="mb-4">
            <label htmlFor="designation" className="block text-gray-900">Designation<span className="text-red-500">*</span></label>
            <input 
              type="text" 
              id="designation" 
              name="designation" 
              value={formData.designation} 
              placeholder="Enter Designation" 
              onChange={(e) => {
                setFormData({ ...formData, designation: e.target.value });
                clearErrorMessage('designation');
              }} 
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.designation && <span className="text-red-500 text-sm">{errors.designation}</span>}
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label htmlFor="dateOfBirth" className="block text-gray-900">Date of Birth<span className="text-red-500">*</span></label>
            <input 
              type="date" 
              id="dateOfBirth" 
              name="dateOfBirth" 
              value={formData.dateOfBirth} 
              onChange={(e) => {
                setFormData({ ...formData, dateOfBirth: e.target.value });
                clearErrorMessage('dateOfBirth');
              }} 
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.dateOfBirth && <span className="text-red-500 text-sm">{errors.dateOfBirth}</span>}
          </div>

          {/* Date of Joining */}
          <div className="mb-4">
            <label htmlFor="dateOfJoining" className="block text-gray-900">Date of Joining<span className="text-red-500">*</span></label>
            <input 
              type="date" 
              id="dateOfJoining" 
              name="dateOfJoining" 
              value={formData.dateOfJoining} 
              onChange={(e) => setFormData({ ...formData, dateOfJoining: e.target.value })} 
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.dateOfJoining && <span className="text-red-500 text-sm">{errors.dateOfJoining}</span>}
          </div>

          {/* Date of Release */}
          <div className="mb-4">
            <label htmlFor="dateOfRelease" className="block text-gray-900">Date of Release</label>
            <input 
              type="date" 
              id="dateOfRelease" 
              name="dateOfRelease" 
              value={formData.dateOfRelease} 
              onChange={(e) => setFormData({ ...formData, dateOfRelease: e.target.value })} 
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          {/* Marital Status */}
          <div className="mb-4">
            <label htmlFor="maritalStatus" className="block text-gray-700">Marital Status<span className="text-red-500">*</span></label>
            <select 
              id="maritalStatus" 
              name="maritalStatus" 
              value={formData.maritalStatus} 
              onChange={(e) => {
                setFormData({ ...formData, maritalStatus: e.target.value });
                clearErrorMessage('maritalStatus');
              }} 
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            >
              <option value="">Select Marital Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
            </select>
            {errors.maritalStatus && <span className="text-red-500 text-sm">{errors.maritalStatus}</span>}
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label htmlFor="gender" className="block text-gray-900">Gender<span className="text-red-500">*</span></label>
            <select 
              id="gender" 
              name="gender" 
              value={formData.gender} 
              onChange={(e) => {
                setFormData({ ...formData, gender: e.target.value });
                clearErrorMessage('gender');
              }} 
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <span className="text-red-500 text-sm">{errors.gender}</span>}
          </div>

          {/* Blood Group */}
          <div className="mb-4">
            <label htmlFor="bloodGroup" className="block text-gray-900">Blood Group</label>
            <select 
              id="bloodGroup" 
              name="bloodGroup" 
              value={formData.bloodGroup} 
              onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })} 
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          {/* Father's/Husband's Name */}
          <div className="mb-4">
            <label htmlFor="fatherOrHusbandName" className="block text-gray-900">Father's/Husband's Name<span className="text-red-500">*</span></label>
            <input 
              type="text" 
              id="fatherOrHusbandName" 
              name="fatherOrHusbandName" 
              value={formData.fatherOrHusbandName} 
              placeholder="Enter Father's/Husband's Name" 
              onChange={(e) => {
                setFormData({ ...formData, fatherOrHusbandName: e.target.value });
                clearErrorMessage('fatherOrHusbandName');
              }} 
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.fatherOrHusbandName && <span className="text-red-500 text-sm">{errors.fatherOrHusbandName}</span>}
          </div>
          {/* Employee Status */}
<div className="mb-4">
  <label htmlFor="eStatus" className="block text-gray-900">Employee Status<span className="text-red-500">*</span></label>
  <select
    type="text"
    id="eStatus"
    name="eStatus"
    value={formData.eStatus}
    onChange={(e) => {
      setFormData({ ...formData, eStatus: e.target.value });
      clearErrorMessage('eStatus');
    }}
    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
  >
    <option value="">Select Employee Status</option>
    <option value="Live">Live</option>
    <option value="Relieved">Relieved</option>
  </select>
  {errors.employeeStatus && <span className="text-red-500 text-sm">{errors.eStatus}</span>}
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

export default PersonalDetails;
