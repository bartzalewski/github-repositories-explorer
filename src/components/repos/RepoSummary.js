import React from 'react';
import styled from 'styled-components';
import IconStar from '../icons/IconStar';

const StyledLink = styled.a`
	text-decoration: none;
	color: #000;
	width: 92.5%;
	margin: 5px 0;
`;
const StyledContainer = styled.div`
	background: #e0e0e0;
	padding: 10px 5px 40px;
`;
const StyledStars = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	font-size: 15px;
`;
const StyledStarsText = styled.p`
	margin: 0 0.4rem 0 0;
	font-family: 'Roboto Bold';
`;
const StyledFlex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const StyledDescription = styled.p`
	margin: 0;
`;
const StyledTitle = styled.span`
	font-family: 'Roboto Bold';
	font-size: 16px;
`;

export default function RepoSummary({ repo }) {
	return (
		<StyledLink href={repo.html_url} target="_blank" rel="noopener noreferrer">
			<StyledContainer>
				<StyledFlex>
					<StyledTitle>{repo.name}</StyledTitle>
					<StyledStars>
						<StyledStarsText>{repo.stargazers_count}</StyledStarsText>
						<IconStar />
					</StyledStars>
				</StyledFlex>
				<StyledDescription>{repo.description}</StyledDescription>
			</StyledContainer>
		</StyledLink>
	);
}
