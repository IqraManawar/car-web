


import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center gap-6 px-6 py-12 bg-gray-50">
      {/* First Section */}
      <div className="bg-blue-100 p-6 rounded-lg text-center lg:text-left">
        <h2 className="text-xl lg:text-2xl font-bold mb-2">
          The Best Platform for Car Rental
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Ease of doing a car rental safely and reliably. Of course at a low
          price.
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Rental Car
        </button>
      </div>

      {/* Second Section */}
      <div className="bg-blue-200 p-6 rounded-lg text-center lg:text-left">
        <h2 className="text-xl lg:text-2xl font-bold mb-2">
          Easy way to rent a car at a low price
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Providing cheap car rental services and safe and comfortable
          facilities.
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Rental Car
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
