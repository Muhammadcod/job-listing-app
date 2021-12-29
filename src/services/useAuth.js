import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const authContext = createContext();

export function useAuth() {
  const [authed, setAuthed] = useState(false);

  return {
    authed,
    login(value, setToken, callback) {
      axios
        .post('/login', value)
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
    logout() {
      return new Promise((res) => {
        setAuthed(false);
        res();
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
