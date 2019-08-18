// @flow
import {CART_EVENTS} from 'constants/cart';
import type {CartAction} from 'types/cart';
import type {CartState} from 'types';

export const initialState: CartState = {
	ids: [],
	items: [],
	total: 0
};

/*
{
				url: '/',
				img: {
					src: 'text',
					alt: 'Роллы с вкусняшкой'
				},
				text: {
					type: 'Роллы',
					title: 'Каой',
					ingredients: 'рис, лосось слабосоленый, огурец, сыр филадельфия',
					badges: {
						best: true
					},
					props: '200 г.',
					price: 17.9,
					count: 1,
					priceDelete: 'Удалить из заказа'
				},
			}
 */

export const cart = (state: CartState = initialState, action: CartAction): CartState => {
	switch(action.type) {
		case CART_EVENTS.ADD_ITEM: {
			if (action.data.id && action.data.price) {
				const {id, price} = action.data;

				return {
					...state,
					ids: [...state.ids, id],
					total: Math.round(parseFloat(state.total + price) * 100) / 100
				};
			}
			break;
		}

		case CART_EVENTS.RECEIVED_ITEM:
			return {
				...state,
				items: action.data.items || []
			};
		case CART_EVENTS.ADD_AMOUNT: {
			// $FlowFixMe
			const index = state.items.findIndex(item => item.id === action.data.id);
			if (index >= 0) {
				const newItems = [
					...state.items.slice(0, index),
					{
						...state.items[index],
						text: {
							...state.items[index].text,
							count: state.items[index].text.count + 1
						}
					},
					...state.items.slice(index + 1)
				];
				const newTotal = state.total + state.items[index].text.price;

				return {
					...state,
					items: newItems, total: Math.round(parseFloat(newTotal) * 100) / 100
				}
			}
			break;
		}

		case CART_EVENTS.REMOVE_AMOUNT: {
				// $FlowFixMe
				const index = state.items.findIndex(item => item.id === action.data.id);
				if (index >= 0) {
					let newCount = state.items[index].text.count - 1;
					newCount = newCount < 1 ? 1 : newCount;

					const newItems = [
						...state.items.slice(0, index),
						{
							...state.items[index],
							text: {
								...state.items[index].text,
								count: newCount,
							}
						},
						...state.items.slice(index + 1)
					];

					const newTotal = state.total - state.items[index].text.price;

					return {
						...state,
						items: newItems, total: Math.round(parseFloat(newTotal) * 100) / 100
					}
				}
			break;
		}

		case CART_EVENTS.DELETE_ITEM: {
			// $FlowFixMe
			const index = state.items.findIndex(item => item.id === action.data.id);

			if (index >= 0) {
				const newItems = [
					...state.items.slice(0, index),
					...state.items.slice(index + 1)
				];

				const newTotal = state.total - state.items[index].text.price * state.items[index].text.count;
				const newIds = [];
				state.ids.map(id => {
					if (state.items[index].id !== id) {
						newIds.push(id)
					}
				});

				return {
					...state,
					items: newItems,
					total: Math.round(parseFloat(newTotal) * 100) / 100,
					ids: newIds
				}
			}
			break;
		}
	}
	return state;
};
