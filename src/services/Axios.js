import axios from 'axios';
import { environment } from '../config';

const {
  api: { uri },
} = environment;

const Axios = axios.create({
  baseURL: uri,
  withCredentials: true,
});
// Interceptors
Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const statusCode = error.response?.status;
    if (statusCode === 401) {
      // destroy the current user session
      Axios.deleteAuthorization();

      return;
    }

    return Promise.reject(error);
  }
);

// eslint-disable-next-line func-names
Axios.deleteAuthorization = function () {
  this.setAuthorization(null);
};

export default Axios;
