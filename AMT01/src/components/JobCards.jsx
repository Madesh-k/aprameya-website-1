import React from "react";

const handleClick = () => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc39CxRozhmdAHBJEMLZp1oHOD_CRF4xQVeK4D7L3jCSkrL2g/viewform?usp=sf_link";
  window.open(googleFormUrl, "_blank");
};

const JobCard = ({ title, company, location, reviewTime, posted }) => {
  return (
    <div
      id="getTouch"
      className="max-w-sm rounded overflow-hidden  max-w-7xl shadow-lg m-4"
    >
      <div className="px-9 py-4">
        <div className="flex items-center justify-between mb-2">
          <div className="font-bold text-xl">{title}</div>
          <img
            src="./images/logo.png"
            alt="Company Logo"
            className="h-10 w-auto p-2"
          />
        </div>
        <p className="text-gray-700 text-base">{company}</p>
        <p className="text-gray-700 text-base">{location}</p>
        <div className="flex items-center text-gray-600 text-sm mt-2">
          <img
            src="./images/applicationlogo.png"
            alt="Review Application Icon"
            className="h-4 w-auto mr-2"
          />
          <p>{reviewTime}</p>
        </div>
        <p className="text-gray-600 text-sm mt-2">{posted}</p>
        <div className="py-2">
         <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"onClick={handleClick}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
