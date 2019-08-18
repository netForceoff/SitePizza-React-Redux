// @flow
import {BrowserRouter} from 'react-router-dom'
import configureStore from '../store/configureStore';
import Layout from 'components/Layout';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

const root = document.getElementById('root');

if (root) {
	const initialState = {
		cart: {
			ids: [],
			items: [],
			total: 0
		},
		filter: {
			arraySearch: [],
			count: 0,
			ingredients: [],
			stickers: []
		},
		items: []
	};

	const store = configureStore(initialState);

	render(
		<Provider store={store}>
		<BrowserRouter>
			<Layout />
		</BrowserRouter>
		</Provider>,
		root
	);
}
