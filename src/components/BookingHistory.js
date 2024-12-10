// src/components/BookingHistory.jsx
import React, { useState, useEffect } from 'react';
import { getUserBookings } from '../services/apiService';
import { useNavigate } from 'react-router-dom';
import '../style/BookingHistory.css';

function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem('user'))?.id;
    if (!userId) {
      navigate('/login');
      return;
    }

    getUserBookings(userId)
      .then((response) => setBookings(response.data))
      .catch((error) => console.error('Error fetching user bookings:', error));
  }, [navigate]);

  // Function to calculate total price
  const calculateTotalPrice = () => {
    return bookings.reduce((total, item) => {
      const pricePerRoom = item.hotel.price;
      const numberOfRooms = item.room;
      return total + (pricePerRoom * numberOfRooms);
    }, 0);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div className="booking-history-container">
      <h2><strong>Booking History</strong></h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <>
          <div className="summary-box">
            <p><strong>Total Bookings:</strong> {bookings.length}</p>
            <p><strong>Total Price Paid:</strong> ₹{totalPrice}</p>
          </div>
          <div className="booking-details-container">
            {bookings.map(booking => {
              const pricePerRoom = booking.hotel.price;
              const numberOfRooms = booking.room;
              const totalPriceForBooking = pricePerRoom * numberOfRooms;

              return (
                <div key={booking.id} className="booking-card">
                  <h4>{booking.hotel.name}</h4>
                  {booking.hotel.image && <img src={booking.hotel.image} alt={booking.hotel.name} className="hotel-image" />}
                  <p><strong>Price per Room:</strong> ₹{pricePerRoom}</p>
                  <p><strong>Rooms Booked:</strong> {numberOfRooms}</p>
                  <p><strong>Total Price:</strong> ₹{totalPriceForBooking}</p>
                  <p><strong>Adults:</strong> {booking.adult}</p>
                  <p><strong>Children:</strong> {booking.child}</p>
                  <p><strong>Departure:</strong> {booking.departure}</p>
                  <p><strong>Arrival:</strong> {booking.arrival}</p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default BookingHistory;
