import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Adjust the path if needed
import '../style/Navbar.css'; // Ensure correct path to your CSS file

function Navbar() {
  const { isAuthenticated, isAdmin, logout } = useAuth(); // Use the context
  const navigate = useNavigate(); // Hook for navigation

  // Handle logout and navigation
  const handleLogout = (e) => {
    e.preventDefault();
    logout(); // Call logout from context
    navigate('/login'); // Redirect to login
  };

  // Handle admin logout and navigation
  const handleAdminLogout = (e) => {
    e.preventDefault();
    logout(); // Call logout from context
    navigate('/admin/login'); // Redirect to admin login
  };

  return (
    <nav className="navbar">
      <h1>Hotel Booking App</h1>
      <ul>
        {isAuthenticated ? (
          <>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/search">Search Hotels</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li>
              <Link to="/login" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </>
        ) : isAdmin ? (
          <>
            <li><Link to="/admin/dashboard">Dashboard</Link></li>
            <li><Link to="/admin/add-hotel">Add Hotel</Link></li>
            <li>
              <Link to="/admin/login" onClick={handleAdminLogout}>
                Admin Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login">User Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            {/* <li><Link to="/admin/login">Admin Login</Link></li> */}
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
