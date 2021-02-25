import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Item from './Item';

describe('<Item />', () => {
	it('should render the Item component', () => {
		const mockItem = { id: 1, item: 'test item one' };
		const mockEditItem = jest.fn();
		const mockDeleteItem = jest.fn();

		const ItemRendered = render(
			<Item
				item={mockItem}
				editItem={mockEditItem}
				deleteItem={mockDeleteItem}
			/>
		);
		expect(ItemRendered).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div
              class="item"
            >
              <h3
                data-testid="item-title"
              >
                test item one
              </h3>
              <div
                class="item-buttons"
              >
                <button
                  class="item-button-edit"
                  data-testid="edit-button"
                >
                  Edit
                </button>
                <button
                  class="item-button-delete"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </body>,
        "container": <div>
          <div
            class="item"
          >
            <h3
              data-testid="item-title"
            >
              test item one
            </h3>
            <div
              class="item-buttons"
            >
              <button
                class="item-button-edit"
                data-testid="edit-button"
              >
                Edit
              </button>
              <button
                class="item-button-delete"
              >
                Delete
              </button>
            </div>
          </div>
        </div>,
        "debug": [Function],
        "findAllByAltText": [Function],
        "findAllByDisplayValue": [Function],
        "findAllByLabelText": [Function],
        "findAllByPlaceholderText": [Function],
        "findAllByRole": [Function],
        "findAllByTestId": [Function],
        "findAllByText": [Function],
        "findAllByTitle": [Function],
        "findByAltText": [Function],
        "findByDisplayValue": [Function],
        "findByLabelText": [Function],
        "findByPlaceholderText": [Function],
        "findByRole": [Function],
        "findByTestId": [Function],
        "findByText": [Function],
        "findByTitle": [Function],
        "getAllByAltText": [Function],
        "getAllByDisplayValue": [Function],
        "getAllByLabelText": [Function],
        "getAllByPlaceholderText": [Function],
        "getAllByRole": [Function],
        "getAllByTestId": [Function],
        "getAllByText": [Function],
        "getAllByTitle": [Function],
        "getByAltText": [Function],
        "getByDisplayValue": [Function],
        "getByLabelText": [Function],
        "getByPlaceholderText": [Function],
        "getByRole": [Function],
        "getByTestId": [Function],
        "getByText": [Function],
        "getByTitle": [Function],
        "queryAllByAltText": [Function],
        "queryAllByDisplayValue": [Function],
        "queryAllByLabelText": [Function],
        "queryAllByPlaceholderText": [Function],
        "queryAllByRole": [Function],
        "queryAllByTestId": [Function],
        "queryAllByText": [Function],
        "queryAllByTitle": [Function],
        "queryByAltText": [Function],
        "queryByDisplayValue": [Function],
        "queryByLabelText": [Function],
        "queryByPlaceholderText": [Function],
        "queryByRole": [Function],
        "queryByTestId": [Function],
        "queryByText": [Function],
        "queryByTitle": [Function],
        "rerender": [Function],
        "unmount": [Function],
      }
    `);
	});

	it('should render the item text', () => {
		const mockItem = { id: 1, item: 'test item one' };

		const { getByTestId } = render(<Item item={mockItem} />);
		const ItemTitle = getByTestId('item-title');
		expect(ItemTitle).toHaveTextContent(mockItem.item);
	});

	it('should display the edit input', () => {
		const mockItem = { id: 1, item: 'test item one' };

		const { getByTestId } = render(<Item item={mockItem} />);
		const EditButton = getByTestId('edit-button');
		fireEvent.click(EditButton);
		const UpdateInput = getByTestId('edit-input');
		expect(UpdateInput).toBeInTheDocument();
	});
});
