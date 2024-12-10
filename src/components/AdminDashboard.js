// src/components/AdminDashboard.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style/AdminDashboard.css'; // Import CSS file for styling

function AdminDashboard() {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:9999/hotel/show')
      .then(response => {
        setHotels(response.data);
        setFilteredHotels(response.data);
      })
      .catch(error => console.error('Error fetching hotels:', error));
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredHotels(hotels);
    } else {
      setFilteredHotels(hotels.filter(hotel => hotel.place.toLowerCase().includes(searchTerm.toLowerCase())));
    }
  }, [searchTerm, hotels]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:9999hotel/delete/${id}`)
      .then(() => {
        setHotels(hotels.filter(hotel => hotel.id !== id));
        setFilteredHotels(filteredHotels.filter(hotel => hotel.id !== id));
      })
      .catch(error => console.error('Error deleting hotel:', error));
  };

  const handleUpdate = (id) => {
    navigate(`/admin/update-hotel/${id}`);
  };

  return (
    <div className="admin-dashboard-container">
      <h2>Admin Dashboard</h2>
      <div className="dashboard-summary">
        <p><strong>Total Hotels:</strong> {filteredHotels.length}</p>
        
      </div>
      <br></br>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by place..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      
      </div>
      <ul className="hotel-list">
        {filteredHotels.map(hotel => (
          <li key={hotel.id} className="hotel-list-item">
            <div className="hotel-list-content">
              {hotel.image && <img src={hotel.image} alt={hotel.name} className="hotel-image" />}
              <div className="hotel-info">
                <h3>{hotel.name}</h3>
                <p><strong>Place:</strong> {hotel.place}</p>
                <p><strong>Description:</strong> {hotel.description}</p>
                <p><strong>Price:</strong> Rs.{hotel.price}/-</p>
                <p><strong>Rating:</strong> {hotel.rating}</p>
                <p><strong>Additional Info:</strong> {hotel.additional}</p>
                <p><strong>Taxes:</strong> {hotel.taxes}</p>
              </div>
            </div>
            <div className="hotel-actions">
              <button onClick={() => handleUpdate(hotel.id)} className="update-button">Update</button>
              <button onClick={() => handleDelete(hotel.id)} className="delete-button">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
