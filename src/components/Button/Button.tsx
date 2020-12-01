import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background: #2b9bda;
  color: #fff;
  margin-top: 15px;
  cursor: pointer;
  font-weight: 300;
`;

const Button = () => {
  return <Btn>Search</Btn>;
};

export default Button;
