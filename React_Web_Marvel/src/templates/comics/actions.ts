  
import { 
    COMICS_CHARACTERS, 
    COMICS_RESULTS, 
    EMAIL_SENT, 
    LOADING_COMICS,
    LOADING_CHARACTERS } from './types';
import { axiosFetcher } from "../../actions/axiosFetcher";
import Axios from 'axios';


export const getComics = (idComic?:any) => {

    return (dispatch:any) => {

        const idComicValid = !!idComic ? `/${idComic}` : ""

        dispatch({
            type: LOADING_COMICS,
            payload: true
        });

        axiosFetcher(`/v1/public/comics${idComicValid}?limit=15`)
            .then((res:any) => {
                
                const {results} = res.data.data;
                console.log("loadingComics", {results})
                if (res.status === 200 && results.length >= 1) {
                    console.log("loadingComics entrou", results)
                    dispatch({
                        type: COMICS_RESULTS,
                        payload: results
                    });
                    dispatch({
                        type: LOADING_COMICS,
                        payload: false
                    });
                }
                else dispatch({
                    type: LOADING_COMICS,
                    payload: false
                });
            })
            .catch(() => {

                dispatch({
                    type: LOADING_COMICS,
                    payload: false
                });

            });
    };
};

export const getCharacters = (url?:any) => {

    return (dispatch:any) => {

        const urlSplit = url.substr(25);
        
        dispatch({
            type: LOADING_CHARACTERS,
            payload: true
        });

        axiosFetcher(`${urlSplit}`)
            .then((res:any) => {

                const {results} = res.data.data;

                if (res.status === 200 && results.length >= 1) {
                    console.log("entrou getCharacters", results)
                    dispatch({
                        type: COMICS_CHARACTERS,
                        payload: results
                    });
                    dispatch({
                        type: LOADING_CHARACTERS,
                        payload: false
                    });
                }
                else dispatch({
                    type: LOADING_CHARACTERS,
                    payload: false
                });
            })
            .catch(() => {

                dispatch({
                    type: LOADING_CHARACTERS,
                    payload: false
                });

            });
    };
};

export const sendEmail = (body:any) => {

    return (dispatch:any) => {

        dispatch({
            type: EMAIL_SENT,
            payload: true
        });

        Axios.post(`http://localhost:3000/apiemail/send`, body)
            .then((res:any) => {

                    dispatch({
                        type: EMAIL_SENT,
                        payload: false
                    });

            })
            .catch((error) => {

                dispatch({
                    type: EMAIL_SENT,
                    payload: false
                });

            });
    };
};