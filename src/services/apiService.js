// src/services/apiService.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:9999'; // Update to your actual backend URL

// Hotel Services
export const fetchHotels = (searchParams) => {
  return axios.get(`${API_BASE_URL}/hotel/show`, { params: searchParams });
};

export const fetchHotelById = (id) => {
  return axios.get(`${API_BASE_URL}/hotel/readone/${id}`);
};

export const createHotel = (hotelData) => {
  return axios.post(`${API_BASE_URL}/hotel/add`, hotelData);
};

export const updateHotel = (id, hotelData) => {
  return axios.put(`${API_BASE_URL}/hotel/update/${id}`, hotelData);
};

export const deleteHotel = (id) => {
  return axios.delete(`${API_BASE_URL}/hotel/delete/${id}`);
};

// Booking Services
export const fetchBookings = () => {
  return axios.get(`${API_BASE_URL}/booking/show`);
};

export const fetchBookingById = (id) => {
  return axios.get(`${API_BASE_URL}/booking/readone/${id}`);
};



export const updateBooking = (id, bookingData) => {
  return axios.put(`${API_BASE_URL}/booking/update/${id}`, bookingData);
};

export const deleteBooking = (id) => {
  return axios.delete(`${API_BASE_URL}/booking/delete/${id}`);
};


export const registerUser = (userData) => {
    return axios.post(`${API_BASE_URL}/user/add`, userData);
  };
  
  export const loginUser = (credentials) => {
    return axios.post(`${API_BASE_URL}/user/login`, credentials);
  };



export const getUserProfile = (userId) => {
    return axios.get(`${API_BASE_URL}/user/readone/${userId}`);
  };
  
  export const createBooking = (bookingData) => {
    return axios.post(`${API_BASE_URL}/booking/add`, bookingData);
};

// New function to get booking history for a specific user
export const getUserBookings = (userId) => {
    return axios.get(`${API_BASE_URL}/booking/user/${userId}`);
};
// export const createBooking = (bookingData) => {
//     return axios.post(`${API_BASE_URL}/booking`, bookingData);
//   };
  
//   export const getUserProfile = (userId) => {
//     return axios.get(`${API_BASE_URL}/users/${userId}`);
//   };
  
//   export const getUserBookings = (userId) => {
//     return axios.get(`${API_BASE_URL}/users/${userId}/booking`);
//   };
export const updateUserProfile = (userId, profileData) => {
  return axios.put(`${API_BASE_URL}/user/update/${userId}`, profileData);
};