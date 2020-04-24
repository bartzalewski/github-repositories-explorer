import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import UserList from './components/users/UserList';
import { connect } from 'react-redux';
import * as reactStore from './store/actions/actions';
import ShowUser from './components/ShowUser';
import Button from './components/Button';

const StyledContainer = styled.main`
	overflow-y: scroll;
	scrollbar-width: none;
	-ms-overflow-style: none;
	width: 320px;
	height: 524px;
	background: #fff;

	&::-webkit-scrollbar {
		width: 0;
		height: 0;
	}

	@media screen and (max-width: 340px) {
		width: 100%;
	}
`;
const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	padding: 15px;
`;
const StyledInput = styled.input`
	background: #f1f1f1;
	border: 2px solid #e3e3e3;
	padding: 15px;
`;
const StyledResult = styled.div``;

function App(props) {
	const handleSubmitForm = (e) => {
		e.preventDefault();
		props.submitForm(e, props.username);
	};

	const handleChange = (e) => {
		e.preventDefault();
		props.handleUsername(e);
	};

	return (
		<StyledContainer>
			<GlobalStyle />
			<StyledForm onSubmit={handleSubmitForm}>
				<label>
					<StyledInput
						onChange={handleChange}
						type="text"
						placeholder="Enter username"
						name="search"
						id="search"
					/>
				</label>
				<Button />
				{props.grabbedData ? (
					<StyledResult>
						<ShowUser />
						<UserList users={props.users} />
					</StyledResult>
				) : null}
			</StyledForm>
		</StyledContainer>
	);
}

const mapStateToProps = (state) => {
	return {
		username: state.username,
		grabbedData: state.grabbedData,
		users: state.users,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleUsername: (e) => dispatch(reactStore.handleUsername(e)),
		submitForm: (e, username) => dispatch(reactStore.submitForm(e, username)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
