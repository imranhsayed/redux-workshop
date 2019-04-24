import { createStore, applyMiddleware, compose } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

const initialState = {
	loading: false,
	loaded: false,
	posts: [],
	error: null
};

const middleware = applyMiddleware( thunk, logger );

/**
 * Create store using the reducer function added above
 * and pass an initial state.
 */
const store = createStore(
	reducer,
	initialState,
	compose(
		middleware,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
	);

export default store;
