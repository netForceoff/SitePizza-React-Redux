// @flow

import {ITEMS_EVENTS} from 'constants/items'
import type {ItemAction} from 'types/items'
import type {ListItem} from 'types';

export const items = (state: Array<ListItem> = [], action: ItemAction): Array<ListItem> => {
	switch (action.type) {
		case ITEMS_EVENTS.ITEMS_RECEIVED:
			return [
				...action.data
			];
	}

	return state;
};


