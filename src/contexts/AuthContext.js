import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('user'));
  const [isAdmin, setIsAdmin] = useState(!!localStorage.getItem('admin'));

  // Login function
  const login = (user, admin = false) => {
    if (admin) {
      localStorage.setItem('admin', JSON.stringify(user));
      setIsAdmin(true);
    } else {
      localStorage.setItem('user', JSON.stringify(user));
      setIsAuthenticated(true);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('admin');
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  // Sync state with localStorage on mount
  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem('user'));
    setIsAdmin(!!localStorage.getItem('admin'));
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);
