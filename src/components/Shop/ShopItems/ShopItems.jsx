// @flow
import {addItem, deleteCardItem, loadCards, removeItem} from "actions/shop";
import {Badges} from 'components/Main/Content/Badges/Badges';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import styles from './ShopItems.less';
import type {Props} from './flow';

export class ShopItems extends Component<Props> {
	props: Props;

  componentDidMount() {
      const {cart, loadCards} = this.props;
		loadCards && loadCards(cart);
  }

// fetch(url, params)
	// .then(result => result.json())
	// .then(json => {
	// 	// ...
	// 	// создаем объект data из json-а
	// 	dispatch({type: '', data});
	// });

	add = (id: number) => () => {
		const {addItem} = this.props;
		addItem && addItem(id);
	};

	deleteCard = (id: number) => () => {
		const {deleteCardItem} = this.props;
		deleteCardItem && deleteCardItem(id)
	};

	remove = (id: number) => () => {
		const {removeItem} = this.props;
		removeItem && removeItem(id);
	};


	renderListProduct = () => {
		return <ul className={styles.products_shop}>
			{this.props.items.map((item, index) => {
				const {action, img, text, id} = item;

				return (
					<li key = {index} className={styles.product_shop}>
						<a href={action.url} className={styles.product_shop__link}>
							<img src={img.src} alt={img.alt}/>
							<span className={styles.product__title_1}><span className={styles.product_shop__type}>{text.type}</span> <span className={styles.product_shop__title}>{text.title}</span></span>
						</a>
						<span className={styles.product_shop__ingredients}>
						{text.ingredients}
          </span>
						<Badges badges={text.badges}/>
						<span className={styles.props__shop}>{text.props}</span>
						<div className={styles.product__price_block}>
							<span className={styles.product__price_price}>{(text.count * text.price).toFixed(2)} руб.</span>
							<span className={styles.product__price_minus} onClick={this.remove(id)}>-</span>
							<span className={styles.product__price_count}>{text.count}</span>
							<span className={styles.product__price_plus} onClick={this.add(id)}>+</span>
						</div>
						<br className="br"/>
						<button className={styles.product__price_delete} onClick={this.deleteCard(id)}>{text.priceDelete}</button>
					</li>
				)
			})}
		</ul>
	};

	render() {
		return(
			<section>
				<h2>Моя корзина</h2>
				{this.props.items.length === 0 ? <h2 className={styles.shop__empty}>Ваша корзина пуста</h2>: this.renderListProduct()}
			</section>
		)
	}
}

const mapStateToProps = state => ({
	cart: state.cart.ids,
	items: state.cart.items
});

const mapDispatchToProps = dispatch => bindActionCreators({
	addItem,
	loadCards,
	removeItem,
	deleteCardItem
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ShopItems);

