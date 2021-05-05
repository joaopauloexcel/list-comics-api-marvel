  
import { combineReducers } from 'redux';
import reducer from '../redux';
import Comics from '../templates/comics/reducer';

export default combineReducers({
  global: reducer,
  comics: Comics,
});