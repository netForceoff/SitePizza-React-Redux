// @flow
import {cart} from './cart';
import {combineReducers} from 'redux';
import {filter} from './filter';
import {items} from './items';

export default combineReducers({
	cart,
	filter,
	items
});
