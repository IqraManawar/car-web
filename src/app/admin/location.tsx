

import { useState } from 'react';
import Link from 'next/link';

function CarRental() {
  const [rentalData] = useState({
    car: 'Nissan GT-R',
    carType: 'Sport Car',
    pickUpLocation: 'Kota Semarang',
    dropOffLocation: 'Kota Semarang',
    pickUpDate: '20 July 2022',
    pickUpTime: '07:00',
    dropOffDate: '21 July 2022',
    dropOffTime: '01:00',
    totalPrice: 80,
  });

  const [topCars] = useState([
    { type: 'Sport Car', count: 17439 },
    { type: 'SUV', count: 9478 },
    { type: 'Coupe', count: 18197 },
    { type: 'Hatchback', count: 12510 },
    { type: 'MPV', count: 14406 },
  ]);

  const [recentTransactions] = useState([
    { car: 'Nissan GT-R', carType: 'Sport Car', date: '20 July', price: 80 },
    { car: 'Koegnigsegg', carType: 'Sport Car', date: '19 July', price: 99 },
    { car: 'Rolls-Royce', carType: 'Sport Car', date: '18 July', price: 96 },
    { car: 'CR-V', carType: 'SUV', date: '17 July', price: 80 },
  ]);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="bg-gray-100 w-full md:w-1/4 p-4 border-b md:border-b-0 md:border-r">
        <h1 className="text-2xl font-bold text-blue-500 mb-6">MORENT</h1>
        <ul className="space-y-4">
          <li>
            <Link href="#">
              <li className="text-gray-600 hover:text-blue-500">Dashboard</li>
            </Link>
          </li>
          <li>
            <Link href="#">
              <li className="text-gray-600 hover:text-blue-500">Car Rent</li>
            </Link>
          </li>
          <li>
            <Link href="#">
              <li className="text-gray-600 hover:text-blue-500">Insight</li>
            </Link>
          </li>
          <li>
            <Link href="#">
              <li className="text-gray-600 hover:text-blue-500">Reimburse</li>
            </Link>
          </li>
          <li>
            <Link href="#">
              <li className="text-gray-600 hover:text-blue-500">Inbox</li>
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <h2 className="text-xl font-bold mb-4">Car Rental Details</h2>
        <div className="space-y-2">
          <p>Car: <span className="font-semibold">{rentalData.car}</span></p>
          <p>Type: <span className="font-semibold">{rentalData.carType}</span></p>
          <p>Pick-Up Location: <span className="font-semibold">{rentalData.pickUpLocation}</span></p>
          <p>Drop-Off Location: <span className="font-semibold">{rentalData.dropOffLocation}</span></p>
          <p>
            Pick-Up Date: <span className="font-semibold">{rentalData.pickUpDate}</span> at{' '}
            <span className="font-semibold">{rentalData.pickUpTime}</span>
          </p>
          <p>
            Drop-Off Date: <span className="font-semibold">{rentalData.dropOffDate}</span> at{' '}
            <span className="font-semibold">{rentalData.dropOffTime}</span>
          </p>
          <p>Total Price: <span className="font-semibold">${rentalData.totalPrice}</span></p>
        </div>

        {/* Top Cars */}
        <h3 className="text-lg font-bold mt-6 mb-4">Top Cars</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {topCars.map((car, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg bg-gray-50 shadow-sm text-center"
            >
              <p className="font-bold">{car.type}</p>
              <p>{car.count} rentals</p>
            </div>
          ))}
        </div>

        {/* Recent Transactions */}
        <h3 className="text-lg font-bold mt-6 mb-4">Recent Transactions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {recentTransactions.map((transaction, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg bg-gray-50 shadow-sm"
            >
              <p className="font-bold">{transaction.car}</p>
              <p>{transaction.carType}</p>
              <p>
                {transaction.date}: <span className="font-semibold">${transaction.price}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarRental;
