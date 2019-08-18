// @flow

export type ListItem = {
	action: {
		url: string
	},
	img: {
		alt: string,
		src: string
	},
	text: {
		add: string,

		type: string,
		title: string,
		ingredients: string,
		badges: {
			best?: boolean,
			forKids?: boolean,
			new?: boolean,
			red?: boolean,
			pepper?: boolean
		},
		props: string,
		quickOrder: string,

	},
}

