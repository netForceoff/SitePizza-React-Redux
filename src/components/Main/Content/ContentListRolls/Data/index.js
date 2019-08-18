// @flow
import rol1 from 'images/rolls/rol1.jpeg';
import rol2 from 'images/rolls/rol2.jpeg';
import rol3 from 'images/rolls/rol3.jpeg';

export const state = [
	{
		action: {
			url: '/'
		},
		img: {
			alt: 'рис, лосось слабосоленый, огурец, сыр филадельфия',
			src: rol1
		},
		text : {
			add: '8.20 руб.',
			badges: {
				best: true
			},
			ingredients: 'рис, лосось слабосоленый, огурец, сыр филадельфия',
			props: '200г',
			quickOrder: 'Быстрый заказ',
			title: 'Каой',
			type: 'Роллы'
		},
	},
	{
		action: {
			url: '/'
		},
		img: {
			alt: 'рис, лосось слабосоленый, огурец свежий',
			src: rol2
		},
		text : {
			add: '12.50 руб.',
			badges: {
				best: true
			},
			ingredients: 'рис, лосось слабосоленый, огурец свежий',
			props: '270 г',
			quickOrder: 'Быстрый заказ',
			title: 'Филадельфия',
			type: 'Роллы'
		},
	},
	{
		action: {
			url: '/'
		},
		img: {
			alt: 'рис, угорь копченый, томат, сыр филадельфия, сухари, лист нори',
			src: rol3
		},
		text : {
			add: '8.40 руб.',
			badges: {
				best: true
			},
			ingredients: 'рис, угорь копченый, томат, сыр филадельфия, сухари, лист нори',
			props: '250 г.',
			quickOrder: 'Быстрый заказ',
			title: 'Хот',
			type: 'Роллы'
		},
	}
];
