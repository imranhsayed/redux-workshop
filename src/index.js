import { createStore } from "redux";

/**
 * ReducerUser
 *
 * It takes a state and an action and returns a new state for the store.
 * @param state
 * @param action
 */
const reducerUser = function ( state = {}, action ) {
	switch ( action.type ) {
		case "USER_NAME": {
			state = { ...state, name: action.payload };
			break;
		}
		case "USER_AGE": {
			state = { ...state, age: action.payload };
			break;
		}
		default: state = {...state};
	}
	return  state;
};

/**
 * Create store using the reducer function added above
 * and pass an initial state.
 */
const store = createStore( reducerUser );

/**
 * Listen to the store using subscribe
 * When Anything changes to the store. the function inside of it will be called.
 * store.getState() return the current state value.
 */
store.subscribe( () => {
	console.warn( 'My store has changed: State value =', store.getState() );
} );

/**
 * Action Creator: Synchronous Actions
 * Returns an Action Object
 *
 * @return {{payload: string, type: string}}
 */
function getUserName() {
	return {
		type: 'USER_NAME',
		payload: 'Imran'
	}
}

function getUserAge() {
	return {
		type: 'USER_AGE',
		payload: 28
	}
}

/**
 * Dispatch actions.
 * When the below actions are dispatched store.subscribe will call the method inside of it, for each dispatched action
 */
store.dispatch( getUserName() );
store.dispatch( getUserAge() );
