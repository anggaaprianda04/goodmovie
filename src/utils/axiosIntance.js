import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_IMDB_API_URL;
const API_KEY = import.meta.env.VITE_IMDB_API_KEY;

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10 * 6000,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("Axios Error:", error.message);
        return Promise.reject(error);
    }
);

export default axiosInstance;