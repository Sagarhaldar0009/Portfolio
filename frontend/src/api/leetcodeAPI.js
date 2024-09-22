import axios from 'axios';

const LC_API = axios.create({
  baseURL: 'https://leetcode-stats-api.herokuapp.com/SAGAR_SH_987'
});

export default LC_API;