import React, { useState, useEffect } from "react";

const TicketCard = ({ totalSteps = 3 }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Calculate progress whenever currentStep changes
    const newProgress = ((currentStep - 1) / (totalSteps - 1)) * 100;
    setProgress(isNaN(newProgress) ? 0 : newProgress);
  }, [currentStep, totalSteps]);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="mx-5 mt-10 md:mx-92.5 border border-border p-7 rounded-4xl">
      <div className="md:flex md:items-center md:justify-between">
        <div className="font-header text-white text-xl mb-2">
          <h1>Ticket Selection</h1>
        </div>
        <div className="mb-4 flex items-center">
          <p className="text-white">
            Step {currentStep}/{totalSteps}
          </p>
        </div>
      </div>

      <div className="bg-bar rounded-md h-1 w-full transition-all duration-300 ease-linear">
        <div
          className="bg-progress rounded-md h-1"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="border border-border rounded-3xl mt-5 p-3 text-center">
        <h1 className="font-secondary text-white text-5xl md:text-8xl">
          Techember Fest "25
        </h1>
        <p className="text-white opacity-70 text-md md:text-2xl md:px-19 mt-2">
          Join us for an unforgettable experience at Techember Fest "25! Secure
          your spot now.
        </p>
        <div className="mt-5 text-white">
          <div>📍 123, Everywhere Street, Off Nowhere Close, Anywhere</div>
          <div className="mt-1">May 17, 2025 | 8PM</div>
        </div>
      </div>
      <div className="bg-bar rounded-md h-1 w-full my-8"></div>
      div 


      <div className="flex justify-between mt-10">
        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === totalSteps}
          className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Next
        </button>
      </div>
      <div className="mt-4">
        {currentStep === 1 && <div>Step 1 Content</div>}
        {currentStep === 2 && <div>Step 2 Content</div>}
        {currentStep === 3 && <div>Step 3 Content</div>}
      </div>
    </div>
  );
};

export default TicketCard;
