import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const initialState = {
	loading: false,
	loaded: false,
	posts: [],
	error: null
};

const reducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case "LOADING": {
			return { ...state, loading: true };
			break;
		}
		case "LOADED": {
			return { ...state, loading: false, loaded: true, posts: action.payload };
			break;
		}
		case "ERROR": {
			return { ...state, loading: false, error: action.payload }
			break;
		}
	}

	return  state;
};


const middleware = applyMiddleware( thunk, logger );

/**
 * Create store using the reducer function added above
 * and pass an initial state.
 */
const store = createStore( reducer, middleware );

/**
 * Action creators
 * Lets dispatch an action.
 * Multiple synchronous actions
 * Instead of passing an object containing type and payload as store.dispatch parameter, we can pass a multiple dispatch functions
 */
store.dispatch( ( dispatch ) => {
	// First Action Dispatch
	dispatch( {type: 'LOADING'} );

	fetch('https://jsonplaceholder.typicode.com/posts')
		.then(response => response.json())
		.then(jsonData => {

			// Second Action Dispatch
			dispatch( { type: 'LOADED', payload: jsonData } );
		})
		.catch( err => {

			// Third Action Dispatch
			dispatch( { type: 'ERROR', payload: err } );
		} )

} );
