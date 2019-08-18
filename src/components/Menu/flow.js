// @flow

import type {ThunkAction} from "types";

export type Props = {
	searchItems: (text: string) => ThunkAction
}

export type State = {
	hidden: boolean
}
