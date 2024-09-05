import axios from 'axios';

const API = axios.create({
  baseURL: 'https://portfolio-npib.onrender.com/api', // Adjust the baseURL to your backend
  // baseURL : 'http://localhost:4000/api',
});

export default API;
