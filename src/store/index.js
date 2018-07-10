import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import AppReducer from 'store/reducers';

const reducers = combineReducers({
	app: AppReducer,
});
const store = createStore(
	reducers,
	{}, // initial state
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

export default store;
