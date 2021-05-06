import { AXIOS_LOADING, LANGUAGE_HAS_BEEN_CHANGED, SET_TOOLTIP } from '../types';

const INITIAL_STATE = {
    loading: false,
    language: 'pt-BR',
    tooltip: {message: "", type: ""},
};

export default (state: any = {...INITIAL_STATE}, action: any) => {
    switch (action.type) {
        case AXIOS_LOADING:
            return { ...state, loading: action.payload };

        case LANGUAGE_HAS_BEEN_CHANGED:
            return { ...state, language: action.payload };

            
        case SET_TOOLTIP:
            return {...state, tooltip: action.payload};
            

        default:
            return state;
    }
};