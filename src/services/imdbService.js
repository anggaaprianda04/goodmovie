import axiosInstance from "../utils/axiosIntance";

const imdbService = {
    getCategory: () => axiosInstance.get('/genre/movie/list?language=en'),
}

// export const categoryMovie = async () => {
//     try {
//         const response = await axios.get(`${API_BASE_URL}/genre/movie/list?language=en`, {
//             headers: {
//                 accept: 'application/json',
//                 Authorization: `Bearer ${API_KEY}`
//             }
//         });
//         if (response.status === 200) {
//             return response.data;
//         }
//     } catch (error) {
//         console.error('Error fetching movies:', error);
//     }
// }

export default imdbService;