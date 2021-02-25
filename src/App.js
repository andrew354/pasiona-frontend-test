import React, { useState, useEffect } from 'react';
import './App.css';
import AddItem from './component/AddItem/AddItem';
import ItemsList from './component/ItemsList/ItemsList';
import Reset from './component/Reset/Reset';

const LOCAL_STORAGE_KEY = 'items-list';

const App = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const items = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (items !== null) {
			setItems(JSON.parse(items));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
	}, [items]);

	const reset = () => {
		setItems([]);
	};

	const deleteItem = (id) => {
		const newItemsList = items.filter((item) => item.id !== id);
		setItems(newItemsList);
	};

	const addItem = (item) => {
		let newItem = { id: Date.now(), item: item };
		setItems((prevItems) => [...prevItems, newItem]);
	};

	const editItem = (oldItem, editedItem) => {
		console.log(oldItem);
		console.log(editedItem);
		if (editedItem !== '') {
			const editedItems = items.map((item) => {
				if (item.id === oldItem.id) {
					return { ...oldItem, item: editedItem };
				}
				return item;
			});
			setItems(editedItems);
		}
	};

	return (
		<div className="app">
			<h1>Things to be done</h1>
			<AddItem addItem={addItem} />
			{items.length > 0 && (
				<div>
					<Reset reset={reset} />
					<ItemsList
						items={items}
						editItem={editItem}
						deleteItem={deleteItem}
					/>
				</div>
			)}
		</div>
	);
};

export default App;
