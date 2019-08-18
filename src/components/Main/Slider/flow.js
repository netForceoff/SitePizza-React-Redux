// @flow
export type State = {
	active: number,
	intervalId?: null
}

export type SliderItem = {
	action: {
		title: string,
		url: string
	},
	img: {
		alt: string,
		src: string
	},
	text: string,
	title: string
}
