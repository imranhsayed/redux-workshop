import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Home from "./components/Home";

class App extends React.Component {
	render() {
		return (
			<Provider store={ store }>
				<div>
					<Home/>
				</div>
			</Provider>
		);
	}
}

export default App
