import { LOAD_API_DATA_STARTED, LOAD_API_DATA, ADD_IMAGE } from 'store/actions';

const initialState = {
	data: [],
	isLoading: false,
	images: {},
};

/**
 * Reducer to handle app actions
 * @param state
 * @param action
 * @returns {*}
 */
export default (state: Object = initialState, action: Object) => {
	switch (action.type) {
		case ADD_IMAGE:
			return { ...state, images: { ...state.images, ...action.payload } };
		case LOAD_API_DATA_STARTED:
			return { ...state, isLoading: true };

		case LOAD_API_DATA: {
			if (action.error) return { ...state, isLoading: false };
			return { ...state, data: action.payload, isLoading: false };
		}
		default:
			return state;
	}
};
