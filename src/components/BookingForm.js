import React, { useState } from 'react';
import { createBooking } from '../services/apiService';
import '../style/BookingForm.css';

function BookingForm({ hotelId }) {
  const [room, setRoom] = useState(1);
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');

  const userId = JSON.parse(localStorage.getItem('user'))?.id;

  const handleBooking = () => {
    if (!arrival || !departure) {
      alert('Please select both arrival and departure dates.');
      return;
    }

    if (new Date(arrival) >= new Date(departure)) {
      alert('Departure date must be after arrival date.');
      return;
    }

    const bookingData = {
      room,
      adult,
      child,
      arrival,
      departure,
      hotel: { id: hotelId },
      user: { id: userId }  // Dynamic user ID
    };

    createBooking(bookingData)
      .then(() => alert('Booking successful!'))
      .catch((error) => console.error('Error making booking:', error));
  };

  return (
    <div className="booking-form">
      <h2>Book This Hotel</h2>
      <div className="form-group">
        <label htmlFor="room">Rooms</label>
        <input
          type="number"
          id="room"
          min="1"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          placeholder="Number of Rooms"
        />
      </div>
      <div className="form-group">
        <label htmlFor="adult">Adults</label>
        <input
          type="number"
          id="adult"
          min="1"
          value={adult}
          onChange={(e) => setAdult(e.target.value)}
          placeholder="Number of Adults"
        />
      </div>
      <div className="form-group">
        <label htmlFor="child">Children</label>
        <input
          type="number"
          id="child"
          min="0"
          value={child}
          onChange={(e) => setChild(e.target.value)}
          placeholder="Number of Children"
        />
      </div>
      <div className="form-group">
        <label htmlFor="arrival">Arrival Date</label>
        <input
          type="date"
          id="arrival"
          value={arrival}
          onChange={(e) => setArrival(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="departure">Departure Date</label>
        <input
          type="date"
          id="departure"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
        />
      </div>
      <button className="booking-button" onClick={handleBooking}>Book Now</button>
    </div>
  );
}

export default BookingForm;
