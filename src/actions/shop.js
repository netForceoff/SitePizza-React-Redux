// @flow
import {CART_EVENTS} from 'constants/cart';
import {Dispatch} from 'redux';
import {items} from '../mock-data/items';
import type {Card} from 'types/cart';

export const addToCart = (data: Card) => (dispatch: Dispatch) => {
	dispatch({
		data,
		type: CART_EVENTS.ADD_ITEM
	})
};

export const addItem = (id: number) => (dispatch: Dispatch) => {
	dispatch({
		data: {id},
		type: CART_EVENTS.ADD_AMOUNT
	});
};

export const deleteCardItem = (id: number) => (dispatch: Dispatch) => {
	dispatch({
		data: {id},
		type: CART_EVENTS.DELETE_ITEM
	})
};

export const loadCards = (ids: Array<number>) => (dispatch: Dispatch) => {

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

	return dispatch({
		data: {items: mappedItems},
		type: CART_EVENTS.RECEIVED_ITEM
	})
};

export const removeItem = (id: number) => (dispatch: Dispatch) => {
	dispatch({
		data: {id},
		type: CART_EVENTS.REMOVE_AMOUNT
	})
};
