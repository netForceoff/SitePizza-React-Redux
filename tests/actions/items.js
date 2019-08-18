import configureMockStore from 'redux-mock-store';

import {handleClickFilterItemsIngredients,
				handleCLickFilterItemsStickers,
				handleCLickFilterRemoveItems,
				loadItems,
				searchItems
} from 'actions/items'

import {items} from 'mock-data/items'
import {ITEMS_EVENTS, ITEMS_FILTER_EVENTS} from 'constants/items';

import fetchMok from 'fetch-mock'; // Библиотека - которая позводяет сделать заглушку на асинхронный запрос в сети
//Она нужна для того чтобы тест не переходил по андресу за получением данных, т.к. это может занимать время, и может быть удача или неудача из за подключения,
//и ничего с этим поделать не сможем, мы сами создадим фейковый запрос, чтобы не тратить время, чтобы проверить сам принцип работы кода
//https://maxpfrontend.ru/vebinary/unit-testirovanie-redux-ekshenov-i-redyuserov/ - тестирование redux экшенов и редьюсеров
import thunk from 'redux-thunk';

const middleWares = [thunk]; //
const mockStore = configureMockStore(middleWares); // mock - заглушка, принцип работы такой же, как при использовании async dispatch,
// нужно создать такие же условия для работы как у action, при подключении redux в проект

describe(`items actions types`, () => {
	it(`ITEMS_FILTER_INGREDIENTS`, async () => {

		const store = mockStore({ //создаем фейковый store
		}); // В store лежит объект с функциями

		console.log(store);

		await store.dispatch(handleClickFilterItemsIngredients('bacon', true)); // и с помощью фейкового store вызываем функцию из action
		// с нужными переданными параметрами
		expect(store.getActions()[0]).toEqual({ //getActions()[0] - вызывает первую функцию getState
			data: {id: 'bacon', checked: true},
			type: ITEMS_FILTER_EVENTS.ITEMS_FILTER_INGREDIENTS
		});
	});

	it(`ITEMS_FILTER_STICKERS`, async () => {
		const store = mockStore({});

		await store.dispatch(handleCLickFilterItemsStickers('new', true));
		expect(store.getActions()[0]).toEqual({
			data: {id: 'new', checked: true},
			type: ITEMS_FILTER_EVENTS.ITEMS_FILTER_STICKERS
		})
	});

	it(`ITEMS_FILTER_REMOVE`, async () => {
		const store = mockStore({});
		await store.dispatch(handleCLickFilterRemoveItems());
		expect(store.getActions()[0]).toEqual({
			type: ITEMS_FILTER_EVENTS.ITEMS_FILTER_REMOVE
		})
	});

	it(`ITEMS_RECEIVED`, async () => {
		const store = mockStore({});

		await store.dispatch(loadItems());
		expect(store.getActions()[0]).toEqual({
			data: items,
			type: ITEMS_EVENTS.ITEMS_RECEIVED
		})
	});

	it(`ITEMS_SEARCH`, async () => {
		const store = mockStore({});

		await store.dispatch(searchItems('text'));
		expect(store.getActions()[0]).toEqual({
			data: 'text',
			type: ITEMS_FILTER_EVENTS.ITEMS_SEARCH
		})
	})
});


