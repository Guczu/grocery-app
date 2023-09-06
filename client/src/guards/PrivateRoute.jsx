import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isUserAuthenticated = false;
  if (!isUserAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  return children;
};

export default PrivateRoute;