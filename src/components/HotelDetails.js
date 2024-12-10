// src/components/HotelDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchHotelById } from '../services/apiService';
import BookingForm from './BookingForm';
import '../style/HotelDetails.css'; // Add styling for the component

function HotelDetails() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    fetchHotelById(id)
      .then(response => setHotel(response.data))
      .catch(error => console.error('Error fetching hotel details:', error));
  }, [id]);

  if (!hotel) return <p>Loading...</p>;

  return (
    <div className="hotel-details">
      <h1>{hotel.name}</h1>
      <div className="hotel-images">
        <img src={hotel.image} alt={hotel.name} className="main-image" />
        <div className="gallery">
          {hotel.img1 && <img src={hotel.img1} alt="Hotel View 1" />}
          {/* {hotel.img2 && <img src={hotel.img2} alt="Hotel View 2" />}
          {hotel.img3 && <img src={hotel.img3} alt="Hotel View 3" />}
          {hotel.img4 && <img src={hotel.img4} alt="Hotel View 4" />} */}
        </div>
      </div>
      <div className="hotel-info">
      <p><strong>Name:</strong> {hotel.name}</p>
        <p><strong>Description:</strong> {hotel.description}</p>
        <p><strong>Rating:</strong> {hotel.rating} Stars</p>
        <p><strong>Ratingtext:</strong> {hotel.ratingtext} </p>
        <p><strong>Price:</strong> ₹{hotel.price} per night</p>
        <p><strong>Location:</strong> {hotel.place}</p>
        <p><strong>Amenities:</strong> {hotel.additional}</p>
        <p><strong>Taxes:</strong> {hotel.taxes}</p>
        {/* Add any other details you want to display */}
      </div>
      <BookingForm hotelId={hotel.id} />
    </div>
  );
}

export default HotelDetails;
