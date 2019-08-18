// @flow
import type {ThunkAction} from 'types';

export type State = {
	hidden: boolean
}

export type Props = {
	handleClickFilterItemsIngredients: (id: string, checked: boolean) => ThunkAction,
	handleCLickFilterItemsStickers: (id: string, checked: boolean) => ThunkAction,
	handleCLickFilterRemoveItems: () => ThunkAction,

	ingredients: Array<string>,
	stickers: Array<string>
}
