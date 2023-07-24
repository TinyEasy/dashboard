import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from 'context/AuthContext';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 500 milliseconds (adjust as needed)
    const delay = 1000;

    // If the user is already available, no need to set a delay
    if (user !== null) {
      setLoading(false);
      return;
    }

    // If the user is not available, set a timeout to finish loading after the delay
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, delay);

    // Clean up the timeout if the component unmounts before the delay finishes
    return () => clearTimeout(timeoutId);
  }, [user]);

  if (loading) {
    // You can show a loading spinner or placeholder here while waiting for the user data
    return <div></div>;
  }

  if (user === null) {
    // Redirect to the signin page only if the user is completely logged out
    return <Navigate to="/signin" />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
