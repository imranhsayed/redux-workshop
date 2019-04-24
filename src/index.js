import { createStore } from "redux";


/**
 * Create a reducer function.
 * It takes a state and an action and returns a new state for the store.
 * @param state
 * @param action
 */
const reducer = function ( state = ' Sayed', action ) {
	if ( 'USER_NAME' === action.type ) {
		return action.payload + state;
	}
	if ( 'USER_AGE' === action.type ) {
		return action.payload + state;
	}
	return  state;
};

/**
 * Create store using the reducer function added above
 * and pass an initial state.
 */
const store = createStore( reducer );

/**
 * Listen to the store using subscribe
 * When Anything changes to the store. the function inside of it will be called.
 * store.getState() return the current state value.
 */
store.subscribe( () => {
	console.warn( 'My store has changed: State value =', store.getState() );
} );

/**
 * Action Creator
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

/**
 * Lets dispatch an action.
 * When the below action is dispatched store.subscribe will call the method inside of it.
 */
store.dispatch( getUserName() );

store.dispatch({
	type: 'USER_AGE',
	payload: 28
});

