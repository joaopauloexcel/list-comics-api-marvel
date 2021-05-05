import axios from 'axios';

export const axiosLocalhost = () => {
        
    return axios.create({
        baseURL: 'http://localhost:3001',
        timeout: 10000,
        method: 'get',
        responseType: 'json'
    });

}