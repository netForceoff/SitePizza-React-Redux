import {ITEMS_FILTER_EVENTS} from 'constants/items';
import {filter} from 'reducers/filter'

describe(`filter reducer types`, () => {
	it(`ITEMS_FILTER_STICKERS`, () => {

		const action = {
			type: ITEMS_FILTER_EVENTS.ITEMS_FILTER_STICKERS,
			data: {
				id: 'new',
				checked: false
			}
		};

		const stateBefore = {
			stickers: [],
			ingredients: [],
			arraySearch: []
		};

		let stickers = stateBefore.stickers.slice();

		if (action.data.checked) {
			// установили флажок
			if (stickers.indexOf(action.data.id) < 0) {
				stickers.push(action.data.id);
			}
		} else {
			// сняли флажок
			let index = stickers.indexOf(action.data.id);
			if (index >= 0) {
				stickers = [
					...stickers.slice(0, index),
					...stickers.slice(index + 1)
				];
			}
		}

		expect(filter(stateBefore, action)).toEqual({
			...stateBefore,
			stickers
		})
	});

	it(`ITEMS_FILTER_REMOVE`, () => {
		const action = {
			type: ITEMS_FILTER_EVENTS.ITEMS_FILTER_REMOVE
		};

		const stateBefore = {
			stickers: ['14', '12312'],
			ingredients: ['123', '1412'],
			arraySearch: []
		};

		expect(filter(stateBefore, action)).toEqual({
			...stateBefore,
			stickers: [],
			ingredients: []
		})
	});

	it(`ITEMS_SEARCH`, () => {

		const action = {
			type: ITEMS_FILTER_EVENTS.ITEMS_SEARCH,
			data: '12312'
		};

		const stateBefore = {
			stickers: [],
			ingredients: [],
			arraySearch: []
		};

		let array = [];
		array.push(action.data);
		if (action.data ==='') {
			expect(filter(stateBefore, action)).toEqual({
				...stateBefore,
				arraySearch: []
			});
		} else {
			expect(filter(stateBefore, action)).toEqual({
				...stateBefore,
				arraySearch: array
			});
		}
	})
});
