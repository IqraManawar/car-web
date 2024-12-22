

import { useState } from 'react';

const cars = [
  {
    type: 'Sport',
    name: 'Nissan GT-R',
    price: 80,
    capacity: '2 Person',
    fuel: '70L',
    image: './public/car2.jpg',
    review: '★★★★☆ 440+ Reviewer',
    description:
      'NISMO has become the embodiment of Nissan’s outstanding performance, inspired by the most unforgiving proving ground, the "race track".',
    reviews: [
      {
        name: 'Alex Stanton',
        role: 'CEO at Bukalapak',
        date: '21 July 2022',
        review:
          'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        stars: 5,
      },
      {
        name: 'Skylar Dias',
        role: 'CEO at Amazon',
        date: '20 July 2022',
        review:
          'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        stars: 4,
      },
    ],
  },
  {
    type: 'Sport',
    name: 'Koenigsegg',
    price: 99,
    capacity: '2 People',
    fuel: '90L',
    image: '/koenigsegg.jpg',
  },
  {
    type: 'Sport',
    name: 'Rolls-Royce',
    price: 96,
    capacity: '4 People',
    fuel: '70L',
    image: '/rolls-royce.jpg',
  },
  {
    type: 'SUV',
    name: 'All New Rush',
    price: 72,
    capacity: '6 People',
    fuel: '70L',
    image: '/all-new-rush.jpg',
    review: '★★★★☆ 300+ Reviewer',
    description:
      'The All New Rush combines style and functionality, making it the perfect choice for family adventures.',
    reviews: [
      {
        name: 'Jordan Smith',
        role: 'Product Manager at Google',
        date: '15 August 2022',
        review:
          'The All New Rush is spacious and comfortable for long trips. Highly recommend for families!',
        stars: 5,
      },
      {
        name: 'Emily Johnson',
        role: 'Marketing Director at Facebook',
        date: '10 August 2022',
        review:
          'Great car with excellent fuel efficiency. Perfect for city driving and weekend getaways.',
        stars: 4,
      },
    ],
  },
];

const CarList = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarSelect = (car: any) => {
    setSelectedCar(car);
  };

  return (
    <div>
      <h1>Car Rental Service</h1>
      <div className="car-list">
        {cars.map((car) => (
          <div key={car.name} className="car-item" onClick={() => handleCarSelect(car)}>
            <img src={car.image} alt={car.name} width={300} height={200} />
            <h2>{car.name}</h2>
            <p>Price: ${car.price} per day</p>
            <p>Capacity: {car.capacity}</p>
            <p>Fuel: {car.fuel}</p>
            <p>{car.review}</p>
          </div>
        ))}
      </div>
      {selectedCar && (
        <div className="car-details">
          <h2>name</h2>
          <p>description</p>
          <h3>Reviews:</h3>
          {/* {selectedCar.reviews.map((review:any) => (
            <div key={review.name}>
              <p>
                <strong>{review.name}</strong> ({review.role}) - {review.date}
              </p>
              <p>{review.review} - {review.stars} Stars</p>
            </div> */}
          {/* ))} */}
        </div>
      )}
    </div>
  );
};

export default CarList;
