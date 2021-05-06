import { 
  COMICS_RESULTS, 
  EMAIL_SENT, 
  COMICS_CHARACTERS, 
  LOADING_COMICS, 
  LOADING_CHARACTERS } from './types';

const INITIAL_STATE = {
  comics: null,
  characters: null,
  loadingEmail:{message:"",status:false},
  loadingComics:false,
  loadingCharacters:false,
};

export default (state:any = {...INITIAL_STATE}, action:any) => {
  switch (action.type) {
    case COMICS_RESULTS:
      return {
        ...state,
        comics: action.payload
      };

    case COMICS_CHARACTERS:
      return {
        ...state,
        characters: action.payload
      };

    case EMAIL_SENT:
      return {
        ...state,
        loadingEmail: action.payload,
      };

    case LOADING_COMICS:
      return {
        ...state,
        loadingComics: action.payload,
      };

    case LOADING_CHARACTERS: 
      return {
        ...state,
        loadingCharacters: action.payload,
      };
      
    default:
      return state;
  }
};