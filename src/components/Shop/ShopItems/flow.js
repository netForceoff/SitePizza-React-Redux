// @flow
import type {ListItem} from 'types';
import type {ThunkAction} from 'types';

export type Props = {
	addItem: (id: number) => ThunkAction,
	cart: Array<number>,
	deleteCardItem: (id: number) => ThunkAction,
	items: Array<ListItem>,
	loadCards: (ids: Array<number>) =>  ThunkAction,
	removeItem: (id: number) => ThunkAction
}

