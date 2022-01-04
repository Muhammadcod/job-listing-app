import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import Axios from './Axios';

const authContext = createContext();

export function useAuth() {
  const [authed, setAuthed] = useState(false);

  return {
    authed,
    login(value, setToken, callback) {
      Axios.post('/login', value)
        .then((result) => {
          if (result.status === 200) {
            setToken(result.data);
            setAuthed(true);
            callback();
          }
        })
        .catch(() => {
          // set Error
        });
    },
    logout(callback) {
      Axios.post('/logout')
        .then((result) => {
          if (result.status === 200) {
            callback();
          }
        })
        .catch(() => {
          // set Error
        });
    },
  };
}

export function AuthProvider({ children }) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return React.useContext(authContext);
}

AuthProvider.propTypes = {
  children: PropTypes.object,
};
