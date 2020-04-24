import React, { useState } from 'react';
import styled from 'styled-components';
import IconTickUp from '../icons/IconTickUp';
import IconTickDown from '../icons/IconTickDown';
import RepoList from '../repos/RepoList';
import * as reactStore from '../../store/actions/actions';
import { connect } from 'react-redux';

const StyledContainer = styled.li`
	background: #f2f2f2;
	padding: 10px;
	width: 100%;
	margin-bottom: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;

	span,
	svg,
	rect {
		pointer-events: none;
	}
`;

function UserSummary(props) {
	const [show, setShow] = useState(false);

	const handleShow = (e) => {
		setShow(!show);
		props.chooseUsername(e, e.target.querySelector('span').textContent);
	};

	return (
		<>
			<StyledContainer onClick={handleShow}>
				<span>{props.user}</span>
				{show === false ? <IconTickDown /> : <IconTickUp />}
			</StyledContainer>
			{show === true ? <RepoList repos={props.repos} /> : null}
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		repos: state.repos,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		chooseUsername: (e, username) =>
			dispatch(reactStore.chooseUsername(e, username)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSummary);
