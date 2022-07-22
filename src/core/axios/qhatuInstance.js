import axios from 'axios';

console.log(process.env.REACT_APP_QHATU_API_URL);

const qhatuInstance = axios.create({
  baseURL: process.env.REACT_APP_QHATU_API_URL,
});

export default qhatuInstance;
