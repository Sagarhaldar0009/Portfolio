import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api', // Adjust the baseURL to your backend
});

export default API;
