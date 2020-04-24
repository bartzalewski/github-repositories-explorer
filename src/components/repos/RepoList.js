import React from 'react';
import styled from 'styled-components';
import RepoSummary from './RepoSummary';
import { v4 as uuidv4 } from 'uuid';

const StyledContainer = styled.ul`
	list-style: none;
	padding: 0;
	width: 100%;
	margin-top: -5px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

export default function RepoList({ repos }) {
	return (
		<StyledContainer>
			{repos &&
				repos.map((repo) => {
					return <RepoSummary repo={repo} key={uuidv4()} />;
				})}
		</StyledContainer>
	);
}
