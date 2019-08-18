// @flow
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import root from 'reducers';


export default function configureStore (initialState: any) {
	const environment = process.env.NODE_ENV;
	const logger = createLogger();
	const middlewares = [thunk];

	if (environment === 'development') {
		middlewares.push(logger);
	}

	const store = createStore(root, initialState, applyMiddleware(...middlewares));

	if (module && module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers');
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
}
