import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const percentComplete = ((currentStep - 0) / totalSteps) * 100;
  // Adjust the minimum width to ensure it's not empty on the first page
  const progressBarWidth = Math.min(Math.max(percentComplete, 10), 100);

  return (
    <div className="progress-bar-container relative w-full mb-4">
      <div className="progress-bar h-4 bg-gray-200 rounded-full overflow-hidden">
        <motion.div 
          className="progress-fill h-full bg-blue-700" 
          initial={{ width: 0 }} 
          animate={{ width: `${progressBarWidth}%` }} 
          transition={{ duration: 0.5, type: 'spring', stiffness: 100, damping: 10 }}
        >
          <div className="progress-label text-xs text-white font-semibold text-center leading-4">
            {currentStep}/{totalSteps}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProgressBar;
