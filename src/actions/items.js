// @flow
import {Dispatch} from "redux";
import {items} from '../mock-data/items';
import {ITEMS_EVENTS, ITEMS_FILTER_EVENTS} from 'constants/items'

export const handleClickFilterItemsIngredients = (id: string, checked: boolean) => (dispatch: Dispatch) => {
	return  dispatch({
		data: {id, checked},
		type: ITEMS_FILTER_EVENTS.ITEMS_FILTER_INGREDIENTS
	})
};

export const handleCLickFilterItemsStickers = (id: string, checked: boolean) => (dispatch: Dispatch) => {
	return dispatch({
		data: {id, checked},
		type: ITEMS_FILTER_EVENTS.ITEMS_FILTER_STICKERS
	})
};

export const handleCLickFilterRemoveItems = () => (dispatch: Dispatch) => {
	return  dispatch({
		type: ITEMS_FILTER_EVENTS.ITEMS_FILTER_REMOVE
	})
};

export const loadItems = () => (dispatch: Dispatch) => {
	return dispatch({
		data: items,
		type: ITEMS_EVENTS.ITEMS_RECEIVED
	});
};

export const searchItems = (text: string) => (dispatch: Dispatch) => {
	return dispatch({
		data: text,
		type: ITEMS_FILTER_EVENTS.ITEMS_SEARCH
	})
};
