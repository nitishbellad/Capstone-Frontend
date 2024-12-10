import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style/AddHotel.css'; // Import CSS file for styling

function AddHotel() {
  const [hotel, setHotel] = useState({
    name: '',
    place: '',
    description: '',
    image: '',
    img1: '',
    img2: '',
    img3: '',
    img4: '',
    rating: '',
    ratingtext: '',
    additional: '',
    taxes: '',
    price: '',
    additional1: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setHotel({ ...hotel, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting hotel data:', hotel); // Log the hotel data for debugging

    // Validate data before sending
    if (!hotel.name || !hotel.place) {
      alert('Please fill out the required fields: Name and Place.');
      return;
    }

    axios.post('http://localhost:9999/hotel/add', hotel)
      .then(response => {
        console.log('Response:', response); // Log the response for debugging
        alert('Hotel added successfully!');
        navigate('/admin/dashboard');
      })
      .catch(error => {
        console.error('Error adding hotel:', error); // Log the error for debugging
        alert('Error adding hotel. Please check the console for details.');
      });
  };

  return (
    <div className="add-hotel-container">
      <h2>Add New Hotel</h2>
      <form onSubmit={handleSubmit} className="add-hotel-form">
        <div className="form-group">
          <label htmlFor="name">Hotel Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={hotel.name}
            onChange={handleChange}
            placeholder="Hotel Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="place">Place:</label>
          <input
            type="text"
            id="place"
            name="place"
            value={hotel.place}
            onChange={handleChange}
            placeholder="Place"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={hotel.description}
            onChange={handleChange}
            placeholder="Description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Main Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={hotel.image}
            onChange={handleChange}
            placeholder="Main Image URL"
          />
        </div>
        <div className="form-group">
          <label htmlFor="img1">Image 1 URL:</label>
          <input
            type="text"
            id="img1"
            name="img1"
            value={hotel.img1}
            onChange={handleChange}
            placeholder="Image 1 URL"
          />
        </div>
        <div className="form-group">
          <label htmlFor="img2">Image 2 URL:</label>
          <input
            type="text"
            id="img2"
            name="img2"
            value={hotel.img2}
            onChange={handleChange}
            placeholder="Image 2 URL"
          />
        </div>
        <div className="form-group">
          <label htmlFor="img3">Image 3 URL:</label>
          <input
            type="text"
            id="img3"
            name="img3"
            value={hotel.img3}
            onChange={handleChange}
            placeholder="Image 3 URL"
          />
        </div>
        <div className="form-group">
          <label htmlFor="img4">Image 4 URL:</label>
          <input
            type="text"
            id="img4"
            name="img4"
            value={hotel.img4}
            onChange={handleChange}
            placeholder="Image 4 URL"
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={hotel.rating}
            onChange={handleChange}
            placeholder="Rating"
          />
        </div>
        <div className="form-group">
          <label htmlFor="ratingtext">Rating Text:</label>
          <textarea
            id="ratingtext"
            name="ratingtext"
            value={hotel.ratingtext}
            onChange={handleChange}
            placeholder="Rating Text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="additional">Additional Info:</label>
          <textarea
            id="additional"
            name="additional"
            value={hotel.additional}
            onChange={handleChange}
            placeholder="Additional Info"
          />
        </div>
        <div className="form-group">
          <label htmlFor="taxes">Taxes:</label>
          <input
            type="text"
            id="taxes"
            name="taxes"
            value={hotel.taxes}
            onChange={handleChange}
            placeholder="Taxes"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={hotel.price}
            onChange={handleChange}
            placeholder="Price"
          />
        </div>
        <div className="form-group">
          <label htmlFor="additional1">Additional Info 1:</label>
          <textarea
            id="additional1"
            name="additional1"
            value={hotel.additional1}
            onChange={handleChange}
            placeholder="Additional Info 1"
          />
        </div>
        <button type="submit" className="submit-button">Add Hotel</button>
      </form>
    </div>
  );
}

export default AddHotel;
