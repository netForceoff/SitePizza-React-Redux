import {addToCart, addItem, deleteCardItem, loadCards, removeItem} from 'actions/shop'
import {CART_EVENTS} from 'constants/cart';
import configureMockStore from 'redux-mock-store';
import {items} from 'mock-data/items';
import thunk from 'redux-thunk';

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe(`shop actions types`, () => {

	it(`ADD_ITEM`, async () => {
		const store = mockStore({});

		await store.dispatch(addToCart({id: 1, price: 1}));
		expect(store.getActions()[0]).toEqual({
			data: {
				id: 1,
				price: 1
			},
			type: CART_EVENTS.ADD_ITEM
		})
	});

	it(`ADD_AMOUNT`, async () => {
		const store = mockStore({});

		await store.dispatch(addItem(1));
		expect(store.getActions()[0]).toEqual({
			data: {
				id: 1
			},
			type: CART_EVENTS.ADD_AMOUNT
		})
	});

	it(`DELETE_ITEM`, async () => {
		const store = mockStore({});

		await store.dispatch(deleteCardItem(1));
		expect(store.getActions()[0]).toEqual({
			data: {
				id: 1
			},
			type: CART_EVENTS.DELETE_ITEM
		})
	});

	it(`RECEIVED_ITEM`, async () => {
		const store = mockStore({});

		const ids = [1, 2, 3];
		const filteredItems = items.filter(item =>ids.includes(item.id));

		let mappedItems = filteredItems.map(item => {
			return {
				...item,
				action: {
					...item.action
				},
				img: {
					...item.img
				},
				text: {
					...item.text,
					count: ids.filter(id => id === item.id).length,
					badges: {
						...item.text.badges
					}
				}
			};
		});

		 await store.dispatch(loadCards([1, 2, 3]));
				expect(store.getActions()).toEqual([{
					data: {
						items: mappedItems
					},
					type: CART_EVENTS.RECEIVED_ITEM
				}]);
	});

	it(`removeItem`, async () => {
		const store = mockStore({});

		await store.dispatch(removeItem(1));
		expect(store.getActions()[0]).toEqual({
			data: {
				id: 1
			},
			type: CART_EVENTS.REMOVE_AMOUNT
		})
	});
});


