  
import { 
    COMICS_CHARACTERS, 
    COMICS_RESULTS, 
    EMAIL_SENT, 
    LOADING_COMICS,
    LOADING_CHARACTERS } from './types';
import { setTooltip } from "../../actions/tooltip";
import { axiosProxyMarvel } from '../../connections/marvel';
import { axiosLocalhost } from '../../connections/localhost';


export const getComics = (idComic?:any) => {

    return (dispatch:any) => {

        const idComicValid = !!idComic ? `/${idComic}` : ""

        dispatch({
            type: LOADING_COMICS,
            payload: true
        });

        axiosProxyMarvel().get(`/v1/public/comics${idComicValid}?limit=15`)
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

        axiosProxyMarvel().get(`${urlSplit}`)
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
            payload: {message:"", status:true}
        });

        axiosLocalhost().post(`/apiemail/send`, body)
            .then((res:any) => {

                    const {data} = res

                    dispatch(setTooltip({message:data.message, type:"success"}));

                    dispatch({
                        type: EMAIL_SENT,
                        payload: {message:data.message, status:false}
                    });

            })
            .catch((error) => {
                const {data} = error.response

                dispatch(setTooltip({message:data.message, type:"error"}));
                
                dispatch({
                    type: EMAIL_SENT,
                    payload: {message:data.message, status:false}
                });

            });
    };
};