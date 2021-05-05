import { LANGUAGE_HAS_BEEN_CHANGED } from '../types';

export function setLocale(newLanguage: 'pt-BR' | 'es-ES' | 'en-US'): any {
	return (dispatch: Function) => {
		dispatch({
			type: LANGUAGE_HAS_BEEN_CHANGED,
			payload: newLanguage,
		});
	};
}
