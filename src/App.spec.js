import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

it('Renders <App /> component correctly', () => {
	render(<App />);
	const titleApp = screen.getByText(/things to be done/i);
	expect(titleApp).toBeInTheDocument();
});
