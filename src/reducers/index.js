
const reducer = ( state, action ) => {
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
		default: { state = { ...state } }
	}

	return  state;
};

export default reducer;
