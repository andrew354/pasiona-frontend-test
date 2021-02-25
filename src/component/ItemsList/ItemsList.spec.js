import React from 'react';
import { render } from '@testing-library/react';
import ItemsList from './ItemsList';
import { mockItems } from './mockItems';

it('should render list of items', () => {
	const mockEditItem = jest.fn();
	const mockDeleteItem = jest.fn();

	const ItemsRendered = render(
		<ItemsList
			items={mockItems} // to mock the array of items
			editItem={mockEditItem}
			deleteItem={mockDeleteItem}
		/>
	);

	expect(ItemsRendered).toMatchInlineSnapshot(`
    Object {
      "asFragment": [Function],
      "baseElement": <body>
        <div>
          <ul>
            <li
              data-testid="item-mock"
            >
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
            </li>
            <li
              data-testid="item-mock"
            >
              <div
                class="item"
              >
                <h3
                  data-testid="item-title"
                >
                  test item two
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
            </li>
            <li
              data-testid="item-mock"
            >
              <div
                class="item"
              >
                <h3
                  data-testid="item-title"
                >
                  test item three
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
            </li>
          </ul>
        </div>
      </body>,
      "container": <div>
        <ul>
          <li
            data-testid="item-mock"
          >
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
          </li>
          <li
            data-testid="item-mock"
          >
            <div
              class="item"
            >
              <h3
                data-testid="item-title"
              >
                test item two
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
          </li>
          <li
            data-testid="item-mock"
          >
            <div
              class="item"
            >
              <h3
                data-testid="item-title"
              >
                test item three
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
          </li>
        </ul>
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
