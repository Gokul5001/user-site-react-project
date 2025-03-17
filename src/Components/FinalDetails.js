import React, { useState, useEffect } from 'react';
import ProgressBar from './Progressbar';

const generatePassword = (length) => {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
};

const teamMapping = {
  "Development": 11,
  "Marketing": 12,
  "Sales": 13,
  "HR": 14
};

const FinalDetails = ({ formData, setFormData, prevStep, onSubmit }) => {
  const [errors, setErrors] = useState({ team: '' });
  const [generatedPassword, setGeneratedPassword] = useState('');

  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, password: '' }));
  }, [setFormData]);

  const handlePrev = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit();
    } else {
      console.log("Please fill in all required fields!");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "team") {
      setFormData({ ...formData, [name]: teamMapping[value] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    clearErrorMessage(name);
  };

  const clearErrorMessage = (field) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.team) {
      newErrors.team = 'Team is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(10);
    setGeneratedPassword(newPassword);
    setFormData((prevData) => ({ ...prevData, password: newPassword }));
  };

  return (
    <div className="max-w-xl mx-auto mt-16 p-8 shadow-lg rounded-lg relative z-10 bg-zinc-100">
      <ProgressBar currentStep={6} totalSteps={6} />
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Final Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Select Team:<span className="text-red-500">*</span></label>
          <select
            name="team"
            value={Object.keys(teamMapping).find(key => teamMapping[key] === formData.team) || ''}
            onChange={handleInputChange}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
          >
            <option value="">Select Team</option>
            {Object.keys(teamMapping).map(team => (
              <option key={team} value={team}>{team}</option>
            ))}
          </select>
          {errors.team && <span className="text-red-500 text-sm mt-1">{errors.team}</span>}
        </div>
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 mr-2">Generated Password:</label>
          <input
            type="text"
            name="password"
            value={generatedPassword}
            readOnly
            className="flex-1 p-2 border border-gray-300 rounded bg-gray-200"
          />
          <button
            type="button"
            onClick={handleGeneratePassword}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            style={{ minWidth: '120px' }}
          >
            Generate New
          </button>
        </div>
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={handlePrev}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FinalDetails;
