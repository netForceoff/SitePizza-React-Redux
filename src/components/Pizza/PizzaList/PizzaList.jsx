// @flow
import Badges from 'components/Main/Content/Badges';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import styles from "../../Main/Content/ContentList/ContentList.less";

import {addToCart} from 'actions/shop'
import {loadItems} from 'actions/items';
import type {Props} from './flow';
import type {ListItem} from 'types';

export class PizzaList extends Component<Props> {
	props: Props;

	static defaultProps = {
		items: []
	};

	componentDidMount() {
		const {loadItems} = this.props;
		loadItems && loadItems();
	}

	getFilteredItems (): Array<ListItem> {
		const {filters, items} = this.props;

		return items.filter((item: ListItem) => {
			let flag1, flag2, flag3 = false;
			if (filters.stickers.every(filter => !!item.text.badges[filter])) {
				flag1 = true;
			}

			if (
				filters.ingredients.every(filter => {
					return !!item.text.filtered[filter]
				})) {
				flag2 = true;
			}

			// debugger;
			// items: [
			// 	{
			// 		propA: 'abc',
			// 		propB: 'bcd'
			// 	},
			// 	{
			// 		propA: 'def',
			// 		propB: 'bca'
			// 	}
			// ];
			//
			// const search = 'bc';
			// items.filter(item => {
			// 	return item.propA.indexOf(search) >= 0 || item.propB.indexOf(search) >= 0;
			// });

			if (filters.arraySearch.every(filter => {
					return item.text.title.indexOf(filter) >= 0
				}
			)) {
				 flag3 = true
			}

			return flag1 && flag2 && flag3;
		});
	}

	handleClick = (id: number, price: number) => () => {
		const {addToCart} = this.props;
		addToCart && addToCart({id, price});
	};

	renderItems (): Array<any> {
		const items = this.getFilteredItems();

		return items.map((item, index) => {
			const {action, id, img, text} = item;
			return (
				<li key={index} className={styles.product}>
					<a href={action.url} className={styles.product__link}>
						<img src={img.src} alt={img.alt}/>
						<span className={styles.product__type}>{text.type}</span> <span
						className={styles.product__title}>{text.title}</span>
					</a>
					<span className={styles.product__ingredients}>
						{text.ingredients}
          </span>
					<Badges badges={text.badges}/>
					<span className={styles.product__props}>{text.props}</span>
					<button className={styles.product__add}  onClick={this.handleClick(id, parseFloat(text.price))} data-test-id="add1">
						{text.price}{` руб.`}
					</button>
					<br className="br"/>
					<button className={styles.product__quickOrder}>{text.quickOrder}</button>
				</li>
			)
		});
	}

	render() {
		return (
			<ul className={styles.products}>
				{this.renderItems()}
			</ul>
		);
	}
}

const mapStateToProps = state => ({
	filters: state.filter,
	items: state.items
});

const mapDispatchToProps = dispatch => bindActionCreators({
	loadItems,
	addToCart
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PizzaList);
