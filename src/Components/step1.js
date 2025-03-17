import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './Progressbar'; 

const generateUsername = (name) => {
  const nameParts = name.trim().toLowerCase().split(' ');
  const baseUsername = nameParts.length > 1
    ? `${nameParts[0]}.${nameParts[nameParts.length - 1]}`
    : nameParts[0];

  // Generate a random 4-digit number to append to the username
  const randomNumber = Math.floor(1000 + Math.random() * 9000);

  return `${baseUsername}${randomNumber}`;
};

const Step1 = ({ formData, setFormData, nextStep }) => {
  const navigate = useNavigate();

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => {
        let newData = { ...prevData, [name]: value };
        // Update username if the name field changes
        if (name === 'name') {
          newData.username = generateUsername(value);
        }
        
        return newData;
      });
    },
  [setFormData]
  );

  const handleCancel = () => {
    navigate('/employees'); 
  };

  return (
    <div className="max-w-xl flex-items-center justify-center mx-auto mt-16 p-8 shadow-lg rounded-lg relative z-10 bg-zinc-100">
      <ProgressBar currentStep={1} totalSteps={6} />
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Personal Details</h2>
      <form onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
        <div className="grid grid-cols-2 gap-6">
          <div className="mb-4">
            <label htmlFor="ecode" className="block text-sm font-medium text-gray-700">Employee Code</label>
            <input
              type="text"
              id="ecode"
              name="ecode"
              value={formData.ecode}
              placeholder="Enter Employee code"
              onChange={handleChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fid" className="block text-sm font-medium text-gray-700">Fingerprint ID</label>
            <input
              type="text"
              id="fid"
              name="fid"
              value={formData.fid}
              placeholder="Enter Fingerprint ID"
              onChange={handleChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Enter Name"
              onChange={handleChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="designation" className="block text-sm font-medium text-gray-700">Designation</label>
            <input
              type="text"
              id="designation"
              name="designation"
              value={formData.designation}
              placeholder="Enter Designation"
              onChange={handleChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="doj" className="block text-sm font-medium text-gray-700">Date of Joining</label>
            <input
              type="date"
              id="doj"
              name="doj"
              value={formData.doj}
              onChange={handleChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dor" className="block text-sm font-medium text-gray-700">Date of Release</label>
            <input
              type="date"
              id="dor"
              name="dor"
              value={formData.dor}
              onChange={handleChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ms" className="block text-sm font-medium text-gray-700">Marital Status</label>
            <select
              id="ms"
              name="ms"
              value={formData.ms}
              onChange={handleChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            >
              <option value="">Select Marital Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="bg" className="block text-sm font-medium text-gray-700">Blood Group</label>
            <select
              id="bg"
              name="bg"
              value={formData.bg}
              onChange={handleChange}
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
          <div className="mb-4">
            <label htmlFor="fhname" className="block text-sm font-medium text-gray-700">Father's/Husband's Name</label>
            <input
              type="text"
              id="fhname"
              name="fhname"
              value={formData.fhname}
              placeholder="Enter Father's/Husband's Name"
              onChange={handleChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="employeeStatus" className="block text-sm font-medium text-gray-700">Employee Status</label>
            <select
              id="employeeStatus"
              name="employeeStatus"
              value={formData.employeeStatus}
              onChange={handleChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            >
              <option value="">Select Employee Status</option>
              <option value="Live">Live</option>
              <option value="Relieved">Relieved</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between mt-6">
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

export default Step1;