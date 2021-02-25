import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Reset from './Reset';

test('should fire reset onclick', () => {
	const mockReset = jest.fn();
	const { getByTestId } = render(<Reset reset={mockReset} />);

	const Button = getByTestId(/reset/i);
	fireEvent.click(Button);
	expect(mockReset).toHaveBeenCalled();
	expect(mockReset).toHaveBeenCalledTimes(1);
});
