import axios from 'axios';

const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {'Accept': 'application/json'},
    withCredentials: true
});

export default client;
