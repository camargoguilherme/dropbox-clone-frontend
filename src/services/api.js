import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omnistack-week-backend.herokuapp.com'
});

export default api;