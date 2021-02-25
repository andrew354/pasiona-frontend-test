import React, { useState } from 'react';

const AddItem = ({ addItem }) => {
	const [text, setText] = useState('');

	const handleSubmit = (e) => {
		if (text) {
			e.preventDefault();
			addItem(text);
			setText('');
		} else {
			e.preventDefault();
			return '';
		}
	};
	return (
		<div className="add-item-container">
			<form>
				<input
					className="add-item-input"
					placeholder="Type something.."
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<button
					className="add-item-button"
					onClick={(e) => handleSubmit(e)}
					data-testid="form-button"
				>
					Add Item
				</button>
			</form>
		</div>
	);
};

export default AddItem;
