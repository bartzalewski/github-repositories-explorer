import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';

it('renders button correctly', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Button />, div);
});
