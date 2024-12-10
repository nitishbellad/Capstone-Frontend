import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HotelSearch from './components/HotelSearch';
import HotelList from './components/HotelList';
import HotelDetails from './components/HotelDetails';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Profile from './components/Profile';
// import AdminLogin from './components/AdminLogin';
// import AdminDashboard from './components/AdminDashboard';
// import UpdateHotel from './components/UpdateHotel';
// import AddHotel from './components/AddHotel'; // Import AddHotel component
import { fetchHotels } from './services/apiService';
import './App.css';
import BookingHistory from './components/BookingHistory';
import Display from './components/Display';


// A reusable PrivateRoute component to protect routes
const PrivateRoute = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem('user');
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const AdminRoute = ({ element }) => {
  const isAdmin = !!localStorage.getItem('admin');
  return isAdmin ? element : <Navigate to="/admin/login" />;
};

function App() {
  const [hotels, setHotels] = React.useState([]);

  const handleSearch = (searchParams) => {
    fetchHotels(searchParams)
      .then(response => setHotels(response.data))
      .catch(error => console.error('Error fetching hotels:', error));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="/search" element={<PrivateRoute element={<HotelSearch onSearch={handleSearch} />} />} />
        <Route path="/hotels" element={<PrivateRoute element={<HotelList hotels={hotels} />} />} />
        <Route path="/hotel/:id" element={<PrivateRoute element={<HotelDetails />} />} />
        <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
        {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
        {/* <Route path="/admin/dashboard" element={<AdminRoute element={<AdminDashboard />} />} /> */}
        {/* <Route path="/admin/add-hotel" element={<AdminRoute element={<AddHotel />} />} /> Added AddHotel route */}
        {/* <Route path="/admin/update-hotel/:id" element={<AdminRoute element={<UpdateHotel />} />} /> */}
        <Route path="/booking-history" element={<BookingHistory />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </Router>
  );
}

export default App;
