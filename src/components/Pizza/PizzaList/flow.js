// @flow
import type {ListItem} from 'types';
import type {ThunkAction} from 'types';

export type Filter = {
	arraySearch: Array<string>,
	count: number,
	ingredients: Array<string>,
	stickers: Array<string>,
}


export type Props = {
	addToCart: (data: {id: number, price: number}) =>  ThunkAction,
	filters: Filter,
	items: Array<ListItem>,
	loadItems: () => ThunkAction,

}
