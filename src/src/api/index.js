import axios from 'axios';

const env = import.meta.env;

axios.defaults.withCredentials = true;
axios.defaults.baseURL = env.VITE_APP_API_URL || `${window.location.origin}/api/`;

// console.log(process.env)
//instead react-scripts process.env - vite use import.meta.env.VITE_ prefix
console.log(import.meta.env, 'all env');
