import React from 'react';
import { connect } from 'react-redux';

const ShowUser = (props) => {
	return (
		<p>
			Showing users for: <q>{props.username}</q>
		</p>
	);
};

const mapStateToProps = (state) => {
	return {
		username: state.username,
	};
};

export default connect(mapStateToProps, null)(ShowUser);
