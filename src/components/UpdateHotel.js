import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../style/UpdateHotel.css'; // Import CSS file for styling

function UpdateHotel() {
  const { id } = useParams();
  const navigate = useNavigate();
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

  useEffect(() => {
    axios.get(`http://localhost:9999/hotel/readone/${id}`)
      .then(response => setHotel(response.data))
      .catch(error => console.error('Error fetching hotel:', error));
  }, [id]);

  const handleChange = (e) => {
    setHotel({ ...hotel, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct the update object with only changed fields
    const updateData = {};
    for (const key in hotel) {
      if (hotel[key]) { // Only include fields with non-empty values
        updateData[key] = hotel[key];
      }
    }
    axios.put(`http://localhost:9999/hotel/update/${id}`, updateData)
      .then(() => {
        alert('Hotel updated successfully!');
        navigate('/admin/dashboard');
      })
      .catch(error => console.error('Error updating hotel:', error));
  };

  return (
    <div className="update-hotel-container">
      <h2>Update Hotel</h2>
      <form onSubmit={handleSubmit} className="update-hotel-form">
        <div className="form-group">
          <label htmlFor="name">Hotel Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={hotel.name}
            onChange={handleChange}
            placeholder="Hotel Name"
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
        <button type="submit" className="submit-button">Update Hotel</button>
      </form>
    </div>
  );
}

export default UpdateHotel;
