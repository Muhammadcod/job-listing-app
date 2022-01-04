import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, Navigate } from 'react-router-dom';

function RequireAuth({ children, token }) {
  const location = useLocation();

  return token ? (
    children
  ) : (
    <Navigate to='/login' replace state={{ path: location.pathname }} />
  );
}

export default RequireAuth;
RequireAuth.propTypes = {
  children: PropTypes.object,
  token: PropTypes.string,
};
