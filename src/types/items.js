// @flow
import {ITEMS_EVENTS} from "../constants/items";
import type {ListItem} from 'types';


type ItemsReceived = {
	data: Array<ListItem>,
	type: typeof ITEMS_EVENTS.ITEMS_RECEIVED
}

export type ItemAction = ItemsReceived
