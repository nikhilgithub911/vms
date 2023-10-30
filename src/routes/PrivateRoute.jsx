import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
// import AuthContext from './AuthContext';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ component: Component, allowedRoles, ...rest }) => {
  const { authenticated, userRole } = useContext(useAuth);

  if (!authenticated) {
    return <Navigate to="/" />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="*" />;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
