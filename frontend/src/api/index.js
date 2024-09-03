import axios from 'axios';

const API = axios.create({
  baseURL: 'https://portfolio-npib.onrender.com/api', // Adjust the baseURL to your backend
});

export default API;
