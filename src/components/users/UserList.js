import React from 'react';
import styled from 'styled-components';
import UserSummary from './UserSummary';

const StyledContainer = styled.ul`
	list-style: none;
	padding: 0;
	width: 100%;
`;

export default function UserList({ users }) {
	return (
		<StyledContainer>
			{users &&
				users.map((user) => {
					return <UserSummary user={user} key={user} />;
				})}
		</StyledContainer>
	);
}
