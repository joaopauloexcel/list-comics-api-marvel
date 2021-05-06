import { SET_TOOLTIP } from '../types';

export const setTooltip = ({message, type}:any) : any => {

    return (dispatch: Function) => {

		dispatch({
			type: SET_TOOLTIP,
			payload: {message, type},
		}); 
	};

};