
import axios from 'axios';

/**
 * TODO: Colocar el baseUrl en las variables de entorno
 */
const axiosClient = axios.create({
    baseURL: `${process.env.API_URL}`,
});

export default axiosClient
