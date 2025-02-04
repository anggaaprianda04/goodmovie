import axiosInstance from "../utils/axiosIntance";

const imdbService = {
    getCategory: () => axiosInstance.get('/genre/movie/list?language=en'),
    getPopularMovie: () => axiosInstance.get('/movie/popular?language=en-US&page=1'),
    getTopMovie: () => axiosInstance.get('/movie/top_rated?language=en-US&page=1'),
}

export default imdbService;