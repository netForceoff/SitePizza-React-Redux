import {ITEMS_FILTER_EVENTS} from 'constants/items';

export type FilterItem = {
	id: string,
	text: string
}

type FilterCheckedItems = {
	id: number,
	checked: boolean
};

type FilterStickers = {
	data: FilterCheckedItems,
	type: typeof ITEMS_FILTER_EVENTS.ITEMS_FILTER_STICKERS
}

type FilterIngredients = {
	data: FilterCheckedItems,
	type: typeof ITEMS_FILTER_EVENTS.ITEMS_FILTER_INGREDIENTS
}

type FilterRemove = {
	type: typeof ITEMS_FILTER_EVENTS.ITEMS_FILTER_REMOVE
}

export type FilterAction = | FilterStickers | FilterIngredients | FilterRemove;
