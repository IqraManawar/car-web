
import React from 'react';


const CarCard = () => {
  return (
    <div className="car-card border rounded-lg shadow-md p-4 bg-white flex flex-col sm:flex-row gap-4 hover:shadow-lg transition-shadow">
      {/* Car Image */}
      <div className="car-image flex-shrink-0">
        {/* <img
          src="./public/car1.jpg" // Replace with your car image URL
          alt="Car"
          className="w-full h-40 sm:h-32 object-cover rounded-md"
        /> */}
      </div>

      {/* Car Info */}
      <div className="car-info flex-1">
        {/* Car Name and Type */}
        <h3 className="text-lg font-bold text-gray-800">Car Name</h3>
        <p className="text-sm text-gray-500 mb-2">Car Type</p>

        {/* Car Details */}
        <div className="car-details flex flex-wrap gap-4 mt-4">
          {/* Fuel Type */}
          <div className="car-detail flex items-center gap-2">
            <span className="car-detail-icon text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-fuel-pump"
                viewBox="0 0 16 16"
              >
                <path d="M1.5 1.5h13v13H1.5V1.5zm14 11H1.5v-8h14v8z" />
                <path d="M4 7h6v3.5h1v2H3V7h1z" />
                <path d="M8 2.5h2.5v3.5H8V2.5z" />
              </svg>
            </span>
            <span className="car-detail-value text-sm text-gray-700">
              Fuel Type
            </span>
          </div>

          {/* Transmission */}
          <div className="car-detail flex items-center gap-2">
            <span className="car-detail-icon text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-gear"
                viewBox="0 0 16 16"
              >
                <path d="M8 4.754a.5.5 0 1 1 .5.5v2.5h2.5a.5.5 0 1 1 0 1h-2.5v2.5a.5.5 0 1 1-1 0v-2.5 h-2.5a.5.5 0 1 1 0-1h2.5V5.254a.5.5 0 0 1-.5-.5z" />
              </svg>
            </span>
            <span className="car-detail-value text-sm text-gray-700">
              Transmission
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
