import axios from 'axios';

export const connection = () => {
        
    return axios.create({
        baseURL: 'https://gateway.marvel.com',
        params: {
            "apikey": "yourKeyMarvel",
            "limit": "100"
        },
        timeout: 10000,
        method: 'get',
        responseType: 'json'
    });

}