// @flow
import {ITEMS_FILTER_EVENTS} from 'constants/items'
import {FilterAction} from 'types/filter'
import type {FilterState} from "types";

const initialState = {
	arraySearch: [],
	ingredients: [],
	stickers: []
};

export const filter = (state: FilterState = initialState, action: FilterAction): FilterState => {
	switch (action.type) {
		case ITEMS_FILTER_EVENTS.ITEMS_FILTER_STICKERS:
			let stickers = state.stickers.slice();

			if (action.data.checked) {
				// установили флажок
				if (stickers.indexOf(action.data.id) < 0) {
					stickers.push(action.data.id);
				}
			} else {
				// сняли флажок
				let index = stickers.indexOf(action.data.id);
				if (index >= 0) {
					stickers = [
						...stickers.slice(0, index),
						...stickers.slice(index + 1)
					];
				}
			}
			return {
				...state,
				stickers
			};

		case ITEMS_FILTER_EVENTS.ITEMS_FILTER_INGREDIENTS:
			let ingredients = state.ingredients.slice();

			if (action.data.checked) {
				// установили флажок
				if (ingredients.indexOf(action.data.id) < 0) {
					ingredients.push(action.data.id);
				}
			} else {
				// сняли флажок
				let index = ingredients.indexOf(action.data.id);
				if (index >= 0) {
					ingredients = [
						...ingredients.slice(0, index),
						...ingredients.slice(index + 1)
					];
				}
			}

			return {
				...state,
				ingredients
			};

		case ITEMS_FILTER_EVENTS.ITEMS_FILTER_REMOVE: {
			return {
				...state,
				stickers: [],
				ingredients: []
			};
		}

		case ITEMS_FILTER_EVENTS.ITEMS_SEARCH:
				let array = [];
				array.push(action.data);
				if (action.data ==='') {
					return {
						...state,
						arraySearch: []
					}
				} else {
					return {
						...state,
						arraySearch: array
					}
				}
	}
	return state;
};
