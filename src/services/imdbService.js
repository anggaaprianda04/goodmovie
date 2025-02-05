import axiosInstance from "../utils/axiosIntance";

const imdbService = {
    getCategory: () => axiosInstance.get('/genre/movie/list?language=en'),
    getPopularMovie: () => axiosInstance.get('/movie/popular?language=en-US&page=1'),
    getTopMovie: () => axiosInstance.get('/movie/top_rated?language=en-US&page=1'),
    getDetailMovie: (id) => axiosInstance.get(`/movie/${id}?language=en-US`),
    getMovieRecommendation: (idMovie) => axiosInstance.get(`/movie/${idMovie}/recommendations?language=en-US&page=1`),
    getCastMovieById: (idMovie) => axiosInstance.get(`/movie/${idMovie}/credits?language=en-US`),
}

export default imdbService;