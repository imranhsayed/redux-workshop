/**
 * Action creators
 * Multiple synchronous actions
 */

export const getUserData = () => {
	return ( dispatch ) => {
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

	}
};
