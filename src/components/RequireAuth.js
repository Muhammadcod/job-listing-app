import React from 'react';
import PropTypes from 'prop-types';

import { useAuth } from '../services/useAuth';
import { useLocation, Navigate } from 'react-router-dom';

function RequireAuth({ children }) {
  const { authed } = useAuth();
  const location = useLocation();

  return authed === true ? (
    children
  ) : (
    <Navigate to='/login' replace state={{ path: location.pathname }} />
  );
}

export default RequireAuth;
RequireAuth.propTypes = {
  children: PropTypes.object,
};
