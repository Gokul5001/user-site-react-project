import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './Progressbar';

// Function to generate a random password
const generatePassword = (length) => {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
};

const teamMapping = {
  11: "Development",
  12: "Marketing",
  13: "Sales",
  14: "HR"
};

const Step6 = ({ formData, handleChange, prevStep }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleCancel = () => {
    navigate('/employees');
  };

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(10); // Generate a new password with length 10
    handleChange({ target: { name: 'password', value: newPassword } });
  };

  const handleTeamChange = (e) => {
    const teamName = e.target.value;
    const teamId = Object.keys(teamMapping).find(key => teamMapping[key] === teamName);
    handleChange({ target: { name: 'team', value: teamId } });
  };

  return (
    <div className="max-w-xl mx-auto mt-16 p-8 shadow-lg rounded-lg relative z-10 bg-zinc-100">
      {/* Progress Bar */}
      <ProgressBar currentStep={6} totalSteps={6} />

      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Final Details</h2>
      
      {/* Form Fields */}
      <div className="">
        {/* Team Selection */}
        <div className="mb-4">
          <label className="block text-gray-700">Select Team:</label>
          <select
            name="team"
            value={teamMapping[formData.team] || ''}
            onChange={handleTeamChange}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
          >
            <option value="">Select Team</option>
            {Object.values(teamMapping).map(team => (
              <option key={team} value={team}>{team}</option>
            ))}
          </select>
        </div>

        {/* Generated Password */}
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 mr-2">Generated Password:</label>
          <input
            type="text"
            name="password"
            value={formData.password}
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
          onClick={() => setShowModal(true)} // Show modal on click
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update
        </button>

        <button
          type="button"
          onClick={handleCancel}
          className="px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-20">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-semibold mb-4">Confirm Update</h3>
            <p className="mb-6">Are you sure you want to update the salary details?</p>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setShowModal(false)} // Close modal
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit" // This would ideally trigger a function to handle form submission
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step6;
