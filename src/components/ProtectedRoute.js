// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; 
 

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth(); // Get authentication status from context

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
