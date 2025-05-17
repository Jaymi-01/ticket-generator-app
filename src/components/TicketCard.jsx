import React, { useState, useEffect } from "react";
import dropdown from "../assets/chevron-down.svg";

const TicketCard = ({ totalSteps = 3 }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [numberOfTickets, setNumberOfTickets] = useState(1);

  const ticketTypes = [
    {
      id: "free",
      name: "Free",
      description: "REGULAR ACCESS",
      availability: "20/52",
    },
    {
      id: "vip",
      name: "$150",
      description: "VIP ACCESS",
      availability: "20/52",
    },
    {
      id: "vvip",
      name: "$350",
      description: "VVIP ACCESS",
      availability: "20/52",
    },
  ];

  useEffect(() => {
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

  const handleSelectTicket = (ticketId) => {
    setSelectedTicket(ticketId);
    console.log(`Selected ticket: ${ticketId}`);
  };

  const handleNumberOfTicketsChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 1 && value <= 3) {
      setNumberOfTickets(value);
    }
  };

  const getPaddingClass = () => {
    switch (numberOfTickets) {
      case 1:
        return "p-1";
      case 2:
        return "p-2";
      case 3:
        return "p-3";
      default:
        return "p-1"; // Default padding
    }
  };

  return (
    <>
      {currentStep === 1 && (
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
          <div className="border border-border2 rounded-3xl mt-5 p-3 text-center">
            <h1 className="font-secondary text-white text-5xl md:text-8xl">
              Techember Fest "25
            </h1>
            <p className="text-white opacity-70 text-md md:text-2xl md:px-19 mt-2">
              Join us for an unforgettable experience at Techember Fest "25!
              Secure your spot now.
            </p>
            <div className="mt-5 text-white">
              <div>📍 123, Everywhere Street, Off Nowhere Close, Anywhere</div>
              <div className="mt-1">May 17, 2025 | 8PM</div>
            </div>
          </div>
          <div className="bg-bar rounded-md h-1 w-full my-8"></div>
          <div className="text-white ">Select Ticket Type</div>

          <div className="border border-border2 p-4 rounded-2xl mt-5 flex flex-col gap-y-6 md:gap-y-0 md:flex-row md:gap-x-6">
            {ticketTypes.map((ticket) => (
              <button
                key={ticket.id}
                onClick={() => handleSelectTicket(ticket.id)}
                className={`border border-border text-white p-4 rounded-2xl w-full text-left focus:outline-none focus:ring-2 focus:ring-border focus:bg-border ${
                  selectedTicket === ticket.id ? "bg-primary" : ""
                }`}
              >
                <div className="text-2xl">{ticket.name}</div>
                <div className="mt-3 opacity-80">{ticket.description}</div>
                <div className="mt-1 opacity-60">{ticket.availability}</div>
              </button>
            ))}
          </div>

          <div className="mt-6">
            <div className="text-white mb-2">Number Of Tickets</div>
            <div className="relative">
              <select
                value={numberOfTickets}
                onChange={handleNumberOfTicketsChange}
                className="appearance-none bg-primary border border-border2 text-white rounded-md p-2 w-full focus:outline-none"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
              <div
                className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white ${getPaddingClass()}`}
              >
                <img src={dropdown} alt="" />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between mt-10">
            <button
              onClick={handleNext}
              disabled={currentStep === totalSteps || !selectedTicket}
              className="bg-progress text-white py-2 px-4 md:py-4 md:px-33 rounded-md focus:outline-none focus:shadow-outline mt-4 md:mt-0"
            >
              Next
            </button>
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className="bg-primary border border-progress text-progress py-2 px-4 md:py-4 md:px-33 rounded-md focus:outline-none focus:shadow-outline mt-4 md:mt-0"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {/* {currentStep === 2 &&(
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
          <div className="border border-border2 rounded-3xl mt-5 p-3 text-center">
            <h1 className="font-secondary text-white text-5xl md:text-8xl">
              Techember Fest "25
            </h1>
            <p className="text-white opacity-70 text-md md:text-2xl md:px-19 mt-2">
              Join us for an unforgettable experience at Techember Fest "25!
              Secure your spot now.
            </p>
            <div className="mt-5 text-white">
              <div>📍 123, Everywhere Street, Off Nowhere Close, Anywhere</div>
              <div className="mt-1">May 17, 2025 | 8PM</div>
            </div>
          </div>
          <div className="bg-bar rounded-md h-1 w-full my-8"></div>
          <div className="text-white ">Select Ticket Type</div>

          <div className="border border-border2 p-4 rounded-2xl mt-5 flex flex-col gap-y-6 md:gap-y-0 md:flex-row md:gap-x-6">
            {ticketTypes.map((ticket) => (
              <button
                key={ticket.id}
                onClick={() => handleSelectTicket(ticket.id)}
                className={`border border-border text-white p-4 rounded-2xl w-full text-left focus:outline-none focus:ring-2 focus:ring-border focus:bg-border ${
                  selectedTicket === ticket.id ? "bg-primary" : ""
                }`}
              >
                <div className="text-2xl">{ticket.name}</div>
                <div className="mt-3 opacity-80">{ticket.description}</div>
                <div className="mt-1 opacity-60">{ticket.availability}</div>
              </button>
            ))}
          </div>

          <div className="mt-6">
            <div className="text-white mb-2">Number Of Tickets</div>
            <div className="relative">
              <select
                value={numberOfTickets}
                onChange={handleNumberOfTicketsChange}
                className="appearance-none bg-primary border border-border2 text-white rounded-md p-2 w-full focus:outline-none"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
              <div
                className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white ${getPaddingClass()}`}
              >
                <img src={dropdown} alt="" />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between mt-10">
            <button
              onClick={handleNext}
              disabled={currentStep === totalSteps || !selectedTicket}
              className="bg-progress text-white py-2 px-4 md:py-4 md:px-33 rounded-md focus:outline-none focus:shadow-outline mt-4 md:mt-0"
            >
              Next
            </button>
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className="bg-primary border border-progress text-progress py-2 px-4 md:py-4 md:px-33 rounded-md focus:outline-none focus:shadow-outline mt-4 md:mt-0"
            >
              Back
            </button>
          </div>
        </div>
      )} */}
      {/* <div>
        
        {currentStep === 3 && <div>Step 3 Content</div>}
      </div> */}
    </>
  );
};

export default TicketCard;
