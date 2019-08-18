// @flow
import {Dispatch} from "redux";

export type ListItem = {
	url: string,
	action: {
		url: string
	},
	img: {
		alt: string,
		src: string
	},
	text: {
		type: string,
		title: string,
		ingredients: string,
		badges: {
			best?: boolean,
			forKids?: boolean,
			pepper?: boolean,
			new?: boolean,
			red?: boolean
		},
		props: string,
		price: number,
		quickOrder: string,
		count: number,
		priceDelete: string,
		filtered: {
			pineapple?: boolean,
			bacon?: boolean,
			ham?: boolean,
			boiledPork?: boolean,
			beef?: boolean,
			mushrooms?: boolean,
			chicken?: boolean,
			pickledCucumber?: boolean,
			pepperoni?: boolean,
			pepperFilter?: boolean,
			sous?: boolean,
			cheeseDorBlue?: boolean,
			cheeseMocarella?: boolean,
			cheeseParmesan?: boolean,
			cheeseChedder?: boolean,
			tomats?: boolean,
			duck?: boolean,
			champignons?: boolean,
		}
	},
	id: number
}

export type CartState = {
	ids: Array<number>,
	items: Array<ListItem>,
	total: number
}

export type FilterState = {
	stickers: Array<string>,
	ingredients: Array<string>,
}

export type State = {
	cart?: CartState,
	filter?: FilterState,
	items: Array<ListItem>
}




export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type GetState = () => State;
