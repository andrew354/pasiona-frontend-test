import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import AddItem from './AddItem';

it('renders correctly', () => {
	const mockAddItem = jest.fn();
	const { queryByTestId, queryByPlaceholderText } = render(
		<AddItem addItem={mockAddItem} />
	);

	expect(queryByPlaceholderText(/type something../i)).toBeTruthy;
	expect(queryByTestId(/add-item/i)).toBeTruthy;
});

it('should updates value on change', () => {
	const { queryByPlaceholderText } = render(<AddItem />);
	const Input = queryByPlaceholderText(/type something../i);
	fireEvent.change(Input, { target: { value: 'test' } });

	expect(Input.value).toBe('test');
});

it('should fire addItem', () => {
	const mockAddItem = jest.fn();

	const { getByTestId, getByPlaceholderText } = render(
		<AddItem addItem={mockAddItem} />
	);
	const Input = getByPlaceholderText('Type something..');
	fireEvent.change(Input, { target: { value: 'test' } });
	expect(Input).not.toBe('');

	const FormButton = getByTestId('form-button');
	fireEvent.click(FormButton);

	expect(mockAddItem).toHaveBeenCalled();
	expect(mockAddItem).toHaveBeenCalledTimes(1);
});
