import React from 'react';
import { connect } from 'react-redux';
import { getUserData } from "../actions/postActions";

class Home extends React.Component {

	handleOnclick = () => {
		this.props.dispatch( getUserData() );
	};

	renderPosts = () => {
		const postData = this.props.posts;
		if ( postData.length ) {
			return postData.map( post => (
				<ul key={ post.id }>
					<li>{ post.title }</li>
				</ul>
			) )
		}
	};

	render() {
		return(
		<div>
			<button onClick={this.handleOnclick}>Get Posts</button>
			{ this.renderPosts() }
		</div>
		);
	}
}


export default connect( ( store ) => {
	return {
		posts: store.posts
	}
}  )( Home );
