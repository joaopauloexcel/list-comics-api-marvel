import axios from 'axios';

export const axiosProxyMarvel = () => {
        
    return axios.create({
        baseURL: 'https://gateway.marvel.com',
        params: {
            "apikey": "00d252df98c4be9d04ae78b392bde51f",
            "limit": "100"
        },
        timeout: 10000,
        method: 'get',
        responseType: 'json'
    });

}