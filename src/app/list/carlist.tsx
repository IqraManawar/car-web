

"use client"

import React from 'react';



export default function CarList  () {
  const cars = [
    {
      name: 'Koenigsegg',
      type: 'Sport',
    //   image: './public/car1.png',
      price: '99.00',
      capacity: '2',
      fuel: '90L',
      transmission: 'Manual',
    },
    {
      name: 'Nissan GT-R',
      type: 'Sport',
      image: '/public/car2.png',
      price: '80.00',
      capacity: '2',
      fuel: '80L',
      transmission: 'Manual',
    },
    {
      name: 'Rolls-Royce',
      type: 'Sedan',
      image: '/public/car3.png',
      price: '96.00',
      capacity: '4',
      fuel: '70L',
      transmission: 'Manual',
    },
    {
      name: 'Nissan GT-R',
      type: 'Sport',
      image: '/public/car4.png',
      price: '80.00',
      capacity: '2',
      fuel: '80L',
      transmission: 'Manual',
    },
    {
      name: 'All New Rush',
      type: 'SUV',
      image: '/public/car5.png',
      price: '72.00',
      capacity: '6',
      fuel: '70L',
      transmission: 'Manual',
    },
    {
      name: 'CR-V',
      type: 'SUV',
      image: '/public/car6.png',
      price: '80.00',
      capacity: '6',
      fuel: '80L',
      transmission: 'Manual',
    },
    {
      name: 'All New Terios',
      type: 'SUV',
      image: '/public/car7.png',
      price: '74.00',
      capacity: '6',
      fuel: '70L',
      transmission: 'Manual',
    },
  ];

  return (
    <div>
      <h1>Available Cars</h1>
      <div className="car-list">
        {cars.map((car, index) => (
          <div key={index} className="car-card">
            {/* <img src={car.image} alt={car.name} width={300} height={200} /> */}
            <h2>{car.name}</h2>
            <p>Type: {car.type}</p>
            <p>Price: ${car.price} per day</p>
            <p>Capacity: {car.capacity} persons</p>
            <p>Fuel Capacity: {car.fuel}</p>
            <p>Transmission: {car.transmission}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .car-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
          padding: 20px;
        }
        .car-card {
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 16px;
          text-align: center;
          background-color: #fff;
          transition: transform 0.3s ease-in-out;
        }
        .car-card:hover {
          transform: scale(1.05);
        }
        .car-card h2 {
          font-size: 1.2rem;
          margin: 10px 0;
        }
        .car-card p {
          font-size: 0.9rem;
          margin: 5px 0;
        }

        /* Media Queries for responsiveness */
        @media (max-width: 768px) {
          .car-card {
            padding: 14px;
          }
          .car-card h2 {
            font-size: 1.1rem;
          }
          .car-card p {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .car-list {
            grid-template-columns: 1fr;
          }
          .car-card {
            padding: 12px;
          }
          .car-card h2 {
            font-size: 1rem;
          }
          .car-card p {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

