import axios from 'axios';

export const LOAD_API_DATA_STARTED = '@@vodworks/main/LOAD_API_DATA_STARTED';
export const LOAD_API_DATA = '@@vodworks/main/LOAD_API_DATA';

export const ADD_IMAGE = '@@vodworks/images/ADD_IMAGE';
export const GET_IMAGE = '@@vodworks/images/GET_IMAGE';

/**
 * This function will load api data
 */
export const loadApiData = () => (dispatch: Function) => {
	dispatch({ type: LOAD_API_DATA_STARTED });
	axios
		.get('http://s3.amazonaws.com/vodassets/showcase.json')
		.then((response: Object) => {
			dispatch({
				type: LOAD_API_DATA,
				payload: response.data || [],
			});
		})
		.catch((error: Error) => {
			dispatch({ type: LOAD_API_DATA, payload: error, error: true });
		});
};
/**
 * This function will add Image to store
 */
export const addImage = (key: string, data: string) => (dispatch: Function) => {
	dispatch({ type: ADD_IMAGE, payload: { [key]: data } });
};
/**
 * This function will be used to get the Image
 */
export const getImage = (key: string) => (
	dispatch: Function,
	getState: Function
) => getState().app.images[key];
