import React, { useState, useEffect, useRef } from 'react';

const Item = ({ item, editItem, deleteItem }) => {
	const [showInput, setShowInput] = useState(false);
	const [editedText, setEditedText] = useState(item.item);

	const inputRef = useRef(null);

	const handleSubmit = () => {
		editItem(item, editedText);
		setShowInput(false);
	};

	const toggleEdit = () => {
		setShowInput(true);
	};

	const handleDelete = () => {
		deleteItem(item.id);
	};

	useEffect(() => {
		if (showInput) {
			inputRef.current.focus();
		}
	}, [showInput]);

	return (
		<div className="item">
			{showInput ? (
				<input
					ref={inputRef}
					type="text"
					data-testid="edit-input"
					value={editedText}
					onChange={(e) => setEditedText(e.target.value)}
				/>
			) : (
				<h3 data-testid="item-title">{item.item}</h3>
			)}
			<div className="item-buttons">
				{showInput ? (
					<button
						className="item-button-submit"
						onClick={() => handleSubmit()}
					>
						Submit
					</button>
				) : (
					<button
						className="item-button-edit"
						data-testid="edit-button"
						onClick={() => toggleEdit()}
					>
						Edit
					</button>
				)}

				<button
					className="item-button-delete"
					onClick={() => handleDelete()}
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default Item;
