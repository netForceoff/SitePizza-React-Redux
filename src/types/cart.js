// @flow
import {CART_EVENTS} from 'constants/cart';
import type {ListItem} from "types";

export type Card = {|
		id: number,
		price: number
|}

type CardAddItem = {
	data: Card,
	type: typeof CART_EVENTS.ADD_ITEM
};

type CardReceivedItem = {
	data: {|
		items: Array<ListItem>
	|},
	type: typeof CART_EVENTS.RECEIVED_ITEM
};

type CardAddAmount = {
	data: {|
		id: number
	|},
	type: typeof CART_EVENTS.ADD_AMOUNT
}

type CardRemoveAmount = {
	data: {|
		id: number
	|},
	type: typeof CART_EVENTS.REMOVE_AMOUNT
}

type CardRemoveItem = {
	data: {|
		id: number
	|},
	type: typeof CART_EVENTS.DELETE_ITEM
}

export type CartAction =
	| CardAddAmount
	| CardAddItem
	| CardReceivedItem
	| CardRemoveAmount
	| CardRemoveItem
