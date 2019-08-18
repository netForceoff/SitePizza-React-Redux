// @flow
import pizza1 from "images/pizza/donMakaron.jpg";
import pizza2 from "images/pizza/shefOlivie.jpg";
import pizza3 from "images/pizza/chickenRench.jpg";
import pizza4 from "images/pizza/Мясное удовольствие.jpg";
import pizza5 from "images/pizza/Ветчина и грибы.jpg";
import pizza6 from "images/pizza/Пирог.jpg";
import pizza7 from "images/pizza/Вегетарианская азия.jpg";
import pizza8 from 'images/pizza/Белорусская традиция.jpg';
import pizza9 from 'images/pizza/С курицей.jpg';
import pizza10 from 'images/pizza/С ветчиной.jpg';
import pizza11 from 'images/pizza/По-баварски.jpg';
import pizza12 from 'images/pizza/Цыпленок пармезан.jpg';
import pizza13 from 'images/pizza/Прошутто.jpg';
import pizza14 from 'images/pizza/Пеперони с курочкой.jpg';
import pizza15 from 'images/pizza/Двойная пеперони.jpg';
import pizza16 from 'images/pizza/Мексиканская.jpg';
import pizza17 from 'images/pizza/Домашняя.jpg';
import pizza18 from 'images/pizza/Гавайская с курицей.jpg';
import pizza19 from 'images/pizza/Гавайская с ветчиной.jpg';
import pizza20 from 'images/pizza/Четыре сыра.jpg';
import pizza21 from 'images/pizza/Цыпленок барбекю.jpg';

export const items = [
	{
		action: {
			url: '/'
		},
		img: {
			src: pizza1,
			alt: 'Пицца с зеленью, томатами, колбасой и сыром'
		},
		text: {
			type: 'Пицца',
			title: 'Дон-Макарон',
			ingredients: 'сыр моцарелла, пармезан, курица, бекон, томаты, шампиньоны, соус рэнч',
			badges: {
				red: true,
				new: true
			},
			props: '1305 г / 40 см',
			price: 22.90,
			quickOrder: 'Быстрый заказ',
			count: 1,
			priceDelete: 'Удалить из заказа',
			filtered: {
				pineapple: true,
				bacon: true,
				ham: true
			}
		},
		id: 1
	},
	{
		action: {
			url: '/'
		},
		img: {
			src: pizza2,
			alt: 'Пицца с зеленью, томатами, колбасой и сыром'
		},
		text : {
			type: 'Пицца',
			title: 'Мясное удовольствие',
			ingredients: 'сыр, курица, буженина, говядина, бекон, ветчина, томаты, перец сладкий',
			badges: {
				red: true,
				new: true
			},
			props: '1305 г / 40 см',
			price: 22.90,
			quickOrder: 'Быстрый заказ',
			count: 1,
			priceDelete: 'Удалить из заказа',
			filtered: {
				boiledPork: true,
				ham: true
			}
		},
		id: 2
	},
	{
		action: {
			url: '/'
		},
		img: {
			src: pizza3,
			alt: 'Пицца с зеленью, томатами, колбасой и сыром'
		},
		text : {
			type: 'Пицца',
			title: 'Домашняя',
			ingredients: ' сыр, буженина, грибы, огурчики, лук фри, соус датский и чесночный',
			badges: {
				best: true
			},
			props: '1305 г / 40 см',
			price: 22.90,
			quickOrder: 'Быстрый заказ',
			count: 1,
			priceDelete: 'Удалить из заказа',
			filtered: {
				ham: true,
				beef: true
			}
		},
		id: 3
	},
	{
		action: {
			url: '/'
		},
		img: {
			src: pizza4,
			alt: 'Пицца с зеленью, томатами, колбасой и сыром'
		},
		text : {
			type: 'Пицца',
			title: 'Мексиканская',
			ingredients: 'сыр моцарелла, пармезан, курица, бекон, томаты, шампиньоны, соус рэнч',
			badges: {
				best: true
			},
			props: '1305 г / 40 см',
			price: 22.90,
			quickOrder: 'Быстрый заказ',
			count: 1,
			priceDelete: 'Удалить из заказа',
			filtered: {
				beef: true,
				mushrooms: true
			}
		},
		id: 4
	},
	{
		action: {
			url: '/'
		},
		img: {
			src: pizza5,
			alt: 'Пицца с зеленью, томатами, колбасой и сыром'
		},
		text : {
			type: 'Пицца',
			title: 'Прошутто',
			ingredients: 'сыр моцарелла, ветчина, томаты, чесночно сливочный соус',
			badges: {
				best: true,
				forKids: true
			},
			props: '1305 г / 40 см',
			price: 22.90,
			quickOrder: 'Быстрый заказ',
			count: 1,
			priceDelete: 'Удалить из заказа',
			filtered: {
				chicken: true,
				mushrooms: true
			}
		},
		id: 5
	},
	{
		action: {
			url: '/'
		},
		img: {
			src: pizza6,
			alt: 'Пицца с зеленью, томатами, колбасой и сыром'
		},
		text : {
			type: 'Пицца',
			title: 'Чикен-Рэнч',
			ingredients: 'сыр моцарелла, пармезан, курица, бекон, томаты, шампиньоны, соус рэнч',
			badges: {
				pepper: true
			},
			props: '1305 г / 40 см',
			price: 22.90,
			quickOrder: 'Быстрый заказ',
			count: 1,
			priceDelete: 'Удалить из заказа',
			filtered: {
				mushrooms: true,
				pickledCucumber: true
			}
		},
		id: 6

	},
	{
		action: {
			url: '/'
		},
		img: {
			src: pizza7,
			alt: 'Пицца с зеленью, томатами, колбасой и сыром'
		},
		text : {
			type: 'Пицца',
			title: 'Чикен-Рэнч',
			ingredients: 'сыр моцарелла, пармезан, курица, бекон, томаты, шампиньоны, соус рэнч',
			badges: {
				best: true,
				pepper: true
			},
			props: '1305 г / 40 см',
			price: 22.90,
			quickOrder: 'Быстрый заказ',
			count: 1,
			priceDelete: 'Удалить из заказа',
			filtered: {
				pepperoni: true,
				pickledCucumber: true
			}
		},
		id: 7
	},
	{
		action: {
			url: '/'
		},
		img: {
			src: pizza8,
			alt: 'Пицца с зеленью, томатами, колбасой и сыром'
		},
		text : {
			type: 'Пицца',
			title: 'Чикен-Рэнч',
			ingredients: 'сыр моцарелла, пармезан, курица, бекон, томаты, шампиньоны, соус рэнч',
			badges: {
				best: true
			},
			props: '1305 г / 40 см',
			price: 22.90,
			quickOrder: 'Быстрый заказ',
			count: 1,
			priceDelete: 'Удалить из заказа',
			filtered: {
				pepperFilter: true,
				sous: true
			}
		},
		id: 8
	},
	{
		action: {
			url: '/'
		},
		img: {
			src: pizza9,
			alt: 'Пицца с зеленью, томатами, колбасой и сыром'
		},
		text : {
			type: 'Пицца',
			title: 'Чикен-Рэнч',
			ingredients: 'сыр моцарелла, пармезан, курица, бекон, томаты, шампиньоны, соус рэнч',
			badges: {
				best: true
			},
			props: '1305 г / 40 см',
			price: 22.90,
			quickOrder: 'Быстрый заказ',
			count: 1,
			priceDelete: 'Удалить из заказа',
			filtered: {
				sous: true,
				cheeseDorBlue: true
			}
		},
		id: 9
	},
	{
		action: {
			url: '/'
		},
		img: {
			src: pizza10,
			alt: 'Пицца с зеленью, томатами, колбасой и сыром'
		},
		text : {
			type: 'Пицца',
			title: 'Чикен-Рэнч',
			ingredients: 'сыр моцарелла, пармезан, курица, бекон, томаты, шампиньоны, соус рэнч',
			badges: {
				best: true
			},
			props: '1305 г / 40 см',
			price: 22.90,
			quickOrder: 'Быстрый заказ',
			count: 1,
			priceDelete: 'Удалить из заказа',
			filtered: {
				cheeseDorBlue: true,
				cheeseMocarella: true
			}
		},
		id: 10
	},
	{
		action: {
			url: '/'
		},
		img: {
			src: pizza11,
			alt: 'Пицца с зеленью, томатами, колбасой и сыром'
		},
		text : {
			type: 'Пицца',
			title: 'Чикен-Рэнч',
			ingredients: 'сыр моцарелла, пармезан, курица, бекон, томаты, шампиньоны, соус рэнч',
			badges: {
				best: true
			},
			props: '1305 г / 40 см',
			price: 22.90,
			quickOrder: 'Быстрый заказ',
			count: 1,
			priceDelete: 'Удалить из заказа',
			filtered: {
				cheeseMocarella: true,
				cheeseParmesan: true,

			}
		},
		id: 11
	},
	{
		action: {
			url: '/'
		},
		img: {
			src: pizza12,
			alt: 'Пицца с зеленью, томатами, колбасой и сыром'
		},
		text : {
			type: 'Пицца',
			title: 'Чикен-Рэнч',
			ingredients: 'сыр моцарелла, пармезан, курица, бекон, томаты, шампиньоны, соус рэнч',
			badges: {
				best: true
			},
			props: '1305 г / 40 см',
			price: 22.90,
			quickOrder: 'Быстрый заказ',
			count: 1,
			priceDelete: 'Удалить из заказа',
			filtered: {
				cheeseMocarella: true,
				cheeseParmesan: true,

			}
		},
		id: 12
	},
	{
		action: {
			url: '/'
		},
		img: {
			src: pizza13,
			alt: 'Пицца с зеленью, томатами, колбасой и сыром'
		},
		text : {
			type: 'Пицца',
			title: 'Чикен-Рэнч',
			ingredients: 'сыр моцарелла, пармезан, курица, бекон, томаты, шампиньоны, соус рэнч',
			badges: {
				best: true
			},
			props: '1305 г / 40 см',
			price: 22.90,
			quickOrder: 'Быстрый заказ',
			count: 1,
			priceDelete: 'Удалить из заказа',
			filtered: {
				cheeseChedder: true,
				tomats: true
			}
		},
		id: 13
	},
	{
		action: {
			url: '/'
		},
		img: {
			src: pizza14,
			alt: 'Пицца с зеленью, томатами, колбасой и сыром'
		},
		text : {
			type: 'Пицца',
			title: 'Чикен-Рэнч',
			ingredients: 'сыр моцарелла, пармезан, курица, бекон, томаты, шампиньоны, соус рэнч',
			badges: {
				best: true
			},
			props: '1305 г / 40 см',
			price: 22.90,
			quickOrder: 'Быстрый заказ',
			count: 1,
			priceDelete: 'Удалить из заказа',
			filtered: {
				tomats: true,
				duck: true
			}
		},
		id: 14
	},
	{
		action: {
			url: '/'
		},
		img: {
			src: pizza15,
			alt: 'Пицца с зеленью, томатами, колбасой и сыром'
		},
		text : {
			type: 'Пицца',
			title: 'Чикен-Рэнч',
			ingredients: 'сыр моцарелла, пармезан, курица, бекон, томаты, шампиньоны, соус рэнч',
			badges: {
				best: true
			},
			props: '1305 г / 40 см',
			price: 22.90,
			quickOrder: 'Быстрый заказ',
			count: 1,
			priceDelete: 'Удалить из заказа',
			filtered: {
				duck: true,
				champignons: true
			}
		},
		id: 15
	},
	{
		action: {
			url: '/'
		},
		img: {
			src: pizza16,
			alt: 'Пицца с зеленью, томатами, колбасой и сыром'
		},
		text : {
			type: 'Пицца',
			title: 'Чикен-Рэнч',
			ingredients: 'сыр моцарелла, пармезан, курица, бекон, томаты, шампиньоны, соус рэнч',
			badges: {
				best: true
			},
			props: '1305 г / 40 см',
			price: 22.90,
			quickOrder: 'Быстрый заказ',
			count: 1,
			priceDelete: 'Удалить из заказа',
			filtered: {
				duck: true,
				champignons: true
			}
		},
		id: 16
	},
	{
		action: {
			url: '/'
		},
		img: {
			src: pizza17,
			alt: 'Пицца с зеленью, томатами, колбасой и сыром'
		},
		text : {
			type: 'Пицца',
			title: 'Чикен-Рэнч',
			ingredients: 'сыр моцарелла, пармезан, курица, бекон, томаты, шампиньоны, соус рэнч',
			badges: {
				best: true
			},
			props: '1305 г / 40 см',
			price: 22.90,
			quickOrder: 'Быстрый заказ',
			count: 1,
			priceDelete: 'Удалить из заказа',
			filtered: {
				duck: true,
				champignons: true
			}
		},
		id: 17
	},
	{
		action: {
			url: '/'
		},
		img: {
			src: pizza18,
			alt: 'Пицца с зеленью, томатами, колбасой и сыром'
		},
		text : {
			type: 'Пицца',
			title: 'Чикен-Рэнч',
			ingredients: 'сыр моцарелла, пармезан, курица, бекон, томаты, шампиньоны, соус рэнч',
			badges: {
				best: true
			},
			props: '1305 г / 40 см',
			price: 22.90,
			quickOrder: 'Быстрый заказ',
			count: 1,
			priceDelete: 'Удалить из заказа',
			filtered: {
				duck: true,
				champignons: true
			}
		},
		id: 18
	},
	{
		action: {
			url: '/'
		},
		img: {
			src: pizza19,
			alt: 'Пицца с зеленью, томатами, колбасой и сыром'
		},
		text : {
			type: 'Пицца',
			title: 'Чикен-Рэнч',
			ingredients: 'сыр моцарелла, пармезан, курица, бекон, томаты, шампиньоны, соус рэнч',
			badges: {
				best: true
			},
			props: '1305 г / 40 см',
			price: 22.90,
			quickOrder: 'Быстрый заказ',
			count: 1,
			priceDelete: 'Удалить из заказа',
			filtered: {
				duck: true,
				champignons: true
			}
		},
		id: 19
	},
	{
		action: {
			url: '/'
		},
		img: {
			src: pizza20,
			alt: 'Пицца с зеленью, томатами, колбасой и сыром'
		},
		text : {
			type: 'Пицца',
			title: 'Чикен-Рэнч',
			ingredients: 'сыр моцарелла, пармезан, курица, бекон, томаты, шампиньоны, соус рэнч',
			badges: {
				best: true
			},
			props: '1305 г / 40 см',
			price: 22.90,
			quickOrder: 'Быстрый заказ',
			count: 1,
			priceDelete: 'Удалить из заказа',
			filtered: {
				duck: true,
				champignons: true
			}
		},
		id: 20
	},
	{
		action: {
			url: '/'
		},
		img: {
			src: pizza21,
			alt: 'Пицца с зеленью, томатами, колбасой и сыром'
		},
		text : {
			type: 'Пицца',
			title: 'Чикен-Рэнч',
			ingredients: 'сыр моцарелла, пармезан, курица, бекон, томаты, шампиньоны, соус рэнч',
			badges: {
				best: true
			},
			props: '1305 г / 40 см',
			price: 22.90,
			quickOrder: 'Быстрый заказ',
			count: 1,
			priceDelete: 'Удалить из заказа',
			filtered: {
				duck: true,
				champignons: true
			}
		},
		id: 21
	}
];
