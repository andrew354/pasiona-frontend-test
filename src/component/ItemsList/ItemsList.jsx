import React from 'react';
import Item from '../Item/Item';

const ItemsList = ({ items, editItem, deleteItem }) => {
	return (
		<ul>
			{items.map((item) => (
				<li data-testid="item-mock" key={item.id}>
					<Item
						item={item}
						editItem={editItem}
						deleteItem={deleteItem}
					/>
				</li>
			))}
		</ul>
	);
};

export default ItemsList;
