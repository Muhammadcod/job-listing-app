import axios from 'axios';
import { environment } from '../config';

const {
  api: { uri },
} = environment;

const Axios = axios.create({
  baseURL: uri,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default Axios;
