import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	background: #2b9bda;
	color: #fff;
	margin-top: 15px;
	cursor: pointer;
	font-family: 'Roboto Light';
`;

const Button = () => {
	return <StyledButton>Search</StyledButton>;
};

export default Button;
