import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character/',  
});


export default axiosClient;