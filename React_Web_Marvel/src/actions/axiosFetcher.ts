import store from '../store/createStore';
import { connection } from '../connections/marvel';
import { AXIOS_LOADING } from '../types';

const Connection = async (urlApi:any, param = {}) => {
    
    try {
        const get = connection().get(urlApi, param);
        store.dispatch({ type: AXIOS_LOADING, payload:true });

        const result = await get;
        store.dispatch({ type: AXIOS_LOADING, payload:false});

        return result;

    } catch (error) {
        store.dispatch({ type: AXIOS_LOADING, payload:false });
    }

}

const Get = Connection;

export const axiosFetcher = async (urlApi:any, param = {}) => {
    return await Get(urlApi, param);
};