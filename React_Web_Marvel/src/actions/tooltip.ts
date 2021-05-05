import { SET_TOOLTIP } from '../types';

export const setTooltip = ({message, type}:any) : any => {
    console.log("Chamou action", message, type)
    return (dispatch: Function) => {
        console.log("Chamou return")
		dispatch({
			type: SET_TOOLTIP,
			payload: {message, type},
		});
	};

};