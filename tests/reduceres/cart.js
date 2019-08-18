import {cart, initialState} from 'reducers/cart';
import {CART_EVENTS} from 'constants/cart';
import pizza1 from "../../src/images/pizza/donMakaron.jpg";

describe(`Cart reducer`, () => {
	it(`returns unmodified state when action type is not recognized`, () => {
		const stateBefore = {
			ids: [1],
			items: [
				{
					action: {
						url: '/'
					},
					img: {
						src: 'pizza1',
						alt: 'Пицца с зеленью, томатами, колбасой и сыром'
					},
					text: {
						type: 'Пицца',
						title: 'Дон-Макарон',
						ingredients: 'сыр моцарелла, пармезан, курица, бекон, томаты, шампиньоны, соус рэнч',
						badges: {
							red: true,
							new: true
						},
						props: '1305 г / 40 см',
						price: 22.90,
						quickOrder: 'Быстрый заказ',
						count: 1,
						priceDelete: 'Удалить из заказа',
						filtered: {
							pineapple: true,
							bacon: true,
							ham: true
						}
					},
					id: 1
				}
			],
			total: 0
		};
		const stateAfter = {
			ids: [1],
			items: [
				{
					action: {
						url: '/'
					},
					img: {
						src: 'pizza1',
						alt: 'Пицца с зеленью, томатами, колбасой и сыром'
					},
					text: {
						type: 'Пицца',
						title: 'Дон-Макарон',
						ingredients: 'сыр моцарелла, пармезан, курица, бекон, томаты, шампиньоны, соус рэнч',
						badges: {
							red: true,
							new: true
						},
						props: '1305 г / 40 см',
						price: 22.90,
						quickOrder: 'Быстрый заказ',
						count: 1,
						priceDelete: 'Удалить из заказа',
						filtered: {
							pineapple: true,
							bacon: true,
							ham: true
						}
					},
					id: 1
				}
			],
			total: 0
		};

		const action = {
			type: 'unknown',
			data: 123
		};

		expect(cart(stateBefore, action)).toEqual(stateAfter);
	});
});

describe(`type`, () => {
	it('add_item', () => {
		const stateBefore = {
			ids: [],
			items: [],
			total: 0
		};
		const action = {
			data: {
				id: 1,
				price: 1
			},
			type: CART_EVENTS.ADD_ITEM
		};

		expect(cart(stateBefore, action)).toEqual({
			...stateBefore,
			ids: [...stateBefore.ids, action.data.id],
			total: Math.round(parseFloat(initialState.total + action.data.price) * 100) / 100,
		})
	});

	it(`RECEIVED_ITEM`, () => {
		const stateBefore = {
			ids: [],
			items: [],
			total: 0
		};

		const action = {
			type: CART_EVENTS.RECEIVED_ITEM,
			data: {
				items: [
					{
						action: {
							url: '/'
						},
						img: {
							src: pizza1,
							alt: 'Пицца с зеленью, томатами, колбасой и сыром'
						},
						text: {
							type: 'Пицца',
							title: 'Дон-Макарон',
							ingredients: 'сыр моцарелла, пармезан, курица, бекон, томаты, шампиньоны, соус рэнч',
							badges: {
								red: true,
								new: true
							},
							props: '1305 г / 40 см',
							price: 22.90,
							quickOrder: 'Быстрый заказ',
							count: 1,
							priceDelete: 'Удалить из заказа',
							filtered: {
								pineapple: true,
								bacon: true,
								ham: true
							}
						},
						id: 1
					}
				]
			}
		};
		expect(cart(stateBefore, action)).toEqual({
			...stateBefore,
			items: action.data.items || [],
		})
	});

	it(`ADD_AMOUNT`, () => {
		const stateBefore = {
			ids: [],
			items: [
				{
					action: {
						url: '/'
					},
					img: {
						src: pizza1,
						alt: 'Пицца с зеленью, томатами, колбасой и сыром'
					},
					text: {
						type: 'Пицца',
						title: 'Дон-Макарон',
						ingredients: 'сыр моцарелла, пармезан, курица, бекон, томаты, шампиньоны, соус рэнч',
						badges: {
							red: true,
							new: true
						},
						props: '1305 г / 40 см',
						price: 22.90,
						quickOrder: 'Быстрый заказ',
						count: 1,
						priceDelete: 'Удалить из заказа',
						filtered: {
							pineapple: true,
							bacon: true,
							ham: true
						}
					},
					id: 1
				}
			],
			total: 0
		};

		const action = {
			type: CART_EVENTS.ADD_AMOUNT,
			data: {
				id: 1
			}
		};

		const index = stateBefore.items.findIndex(item => item.id === action.data.id);

		let newItems = [];
		let newTotal = 0;

		if (index >= 0) {
			 newItems = [
				...stateBefore.items.slice(0, index),
				{
					...stateBefore.items[index],
					text: {
						...stateBefore.items[index].text,
						count: stateBefore.items[index].text.count + 1
					}
				},
				...stateBefore.items.slice(index + 1)
			];
			 newTotal = stateBefore.total + stateBefore.items[index].text.price;
		}

		expect(cart(stateBefore, action)).toEqual({
			...stateBefore,
			items: newItems,
			total: Math.round(parseFloat(newTotal) * 100) / 100
		})
	});

	it(`REMOVE_AMOUNT`, () => {
		const action = {
			type: CART_EVENTS.REMOVE_AMOUNT,
			data: {
				id: 1
			}
		};

		const stateBefore = {
			ids: [],
			items: [
				{
					action: {
						url: '/'
					},
					img: {
						src: pizza1,
						alt: 'Пицца с зеленью, томатами, колбасой и сыром'
					},
					text: {
						type: 'Пицца',
						title: 'Дон-Макарон',
						ingredients: 'сыр моцарелла, пармезан, курица, бекон, томаты, шампиньоны, соус рэнч',
						badges: {
							red: true,
							new: true
						},
						props: '1305 г / 40 см',
						price: 22.90,
						quickOrder: 'Быстрый заказ',
						count: 1,
						priceDelete: 'Удалить из заказа',
						filtered: {
							pineapple: true,
							bacon: true,
							ham: true
						}
					},
					id: 1
				}
			],
			total: 22.90
		};

		const index = stateBefore.items.findIndex(item => item.id === action.data.id);
		let newItems = [];
		let newTotal = 0;

		if (index >= 0) {
			let newCount = stateBefore.items[index].text.count - 1;
			newCount = newCount < 1 ? 1 : newCount;

			newItems = [
				...stateBefore.items.slice(0, index),
				{
					...stateBefore.items[index],
					text: {
						...stateBefore.items[index].text,
						count: newCount,
					}
				},
				...stateBefore.items.slice(index + 1)
			];

			newTotal = stateBefore.total - stateBefore.items[index].text.price;
		}

		expect(cart(stateBefore, action)).toEqual({
			...stateBefore,
			items: newItems, total: Math.round(parseFloat(newTotal) * 100) / 100
		})

	});

	it(`DELETE_ITEM`, () => {

		const action = {
			type: CART_EVENTS.DELETE_ITEM,
			data: {
				id: 1
			}
		};

		const stateBefore = {
			ids: [],
			items: [
				{
					action: {
						url: '/'
					},
					img: {
						src: pizza1,
						alt: 'Пицца с зеленью, томатами, колбасой и сыром'
					},
					text: {
						type: 'Пицца',
						title: 'Дон-Макарон',
						ingredients: 'сыр моцарелла, пармезан, курица, бекон, томаты, шампиньоны, соус рэнч',
						badges: {
							red: true,
							new: true
						},
						props: '1305 г / 40 см',
						price: 22.90,
						quickOrder: 'Быстрый заказ',
						count: 1,
						priceDelete: 'Удалить из заказа',
						filtered: {
							pineapple: true,
							bacon: true,
							ham: true
						}
					},
					id: 1
				}
			],
			total: 22.90
		};
		const index = stateBefore.items.findIndex(item => item.id === action.data.id);

		let newTotal;
		let newItems;
		let newIds = [];

		if (index >= 0) {
			newItems = [
				...stateBefore.items.slice(0, index),
				...stateBefore.items.slice(index + 1)
			];

			newTotal = stateBefore.total - stateBefore.items[index].text.price * stateBefore.items[index].text.count;
			stateBefore.ids.map(id => {
				if (stateBefore.items[index].id !== id) {
					newIds.push(id)
				}
			});
		}
		expect(cart(stateBefore, action)).toEqual({
			...stateBefore,
			items: newItems,
			total: Math.round(parseFloat(newTotal) * 100) / 100,
			ids: newIds
		});
	})
});
