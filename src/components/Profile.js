// // src/components/Profile.jsx

// import React, { useState, useEffect } from 'react';
// import { getUserProfile, getUserBookings } from '../services/apiService'; // Ensure these functions are defined
// import { useNavigate } from 'react-router-dom';
// import '../style/Profile.css';

// function Profile() {
//   const [user, setUser] = useState(null);
//   const [booking, setBookings] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userId = JSON.parse(localStorage.getItem('user'))?.id;
//     if (!userId) {
//       navigate('/login');
//       return;
//     }
    
//     getUserProfile(userId)
//       .then((response) => setUser(response.data))
//       .catch((error) => console.error('Error fetching user profile:', error));

//     getUserBookings(userId)
//       .then((response) => setBookings(response.data))
//       .catch((error) => console.error('Error fetching user bookings:', error));
//   }, [navigate]);

//   if (!user) {
//     return <div className="loading">Loading...</div>;
//   }

//   return (
//     <div className="profile-container">
//       <div className="dashboard">
//         <h2>Dashboard</h2>
//         <div className="user-details">
//           <h3>User Details</h3>
//           <p><strong>Name:</strong> {user.user_name}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Date of Birth:</strong> {user.dob}</p>
//           <p><strong>Gender:</strong> {user.gender}</p>
//         </div>
//         </div>
//         </div>
       
//   );
// }

// export default Profile;

// src/components/Profile.jsx

import React, { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile, getUserBookings } from '../services/apiService'; // Ensure these functions are defined
import { useNavigate } from 'react-router-dom';
import '../style/Profile.css';

function Profile() {
  const [user, setUser] = useState(null);
  const [booking, setBookings] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem('user'))?.id;
    if (!userId) {
      navigate('/login');
      return;
    }
    
    getUserProfile(userId)
      .then((response) => {
        setUser(response.data);
        setFormData(response.data); // Initialize formData with user data
      })
      .catch((error) => console.error('Error fetching user profile:', error));

    getUserBookings(userId)
      .then((response) => setBookings(response.data))
      .catch((error) => console.error('Error fetching user bookings:', error));
  }, [navigate]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveClick = () => {
    const userId = JSON.parse(localStorage.getItem('user'))?.id;
    if (userId) {
      updateUserProfile(userId, formData)
        .then(() => {
          setUser(formData);
          setIsEditing(false);
        })
        .catch((error) => console.error('Error updating user profile:', error));
    }
  };

  if (!user) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="profile-container">
      <div className="dashboard">
        <h2>Dashboard</h2>
        <div className="user-details">
          <h3>User Details</h3>
          {isEditing ? (
            <div className="edit-form">
              <label>
                Name:
                <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} />
              </label>
              <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </label>
              <label>
                Date of Birth:
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
              </label>
              <label>
                Gender:
                <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
              </label>
              <button onClick={handleSaveClick}>Save</button>
            </div>
          ) : (
            <div>
              <p><strong>Name:</strong> {user.user_name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Date of Birth:</strong> {user.dob}</p>
              <p><strong>Gender:</strong> {user.gender}</p>
              <button onClick={handleEditClick}>Edit</button>
            </div>
          )}
        </div>
      </div>
      </div>
    );
}

export default Profile;