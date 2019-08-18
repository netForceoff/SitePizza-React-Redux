// @flow
import {connect} from 'react-redux';
import React, {Component} from 'react';
import styles from './ShopOrder.less';
import type {Props} from './flow';


export class ShopOrder extends Component<Props> {
	props: Props;

	renderDiscount = () => {
		return <div className={styles.block_discount__authorization}>
			<p>Опции скидок</p>
			<span className={styles.discount_header}>Оплатить бонусами</span>
			<div className={styles.block_discount__authorization_item}>
				<input type="text" placeholder="Доступно авторизированным" disabled={true}/>
				<button>Авторизоваться</button>
			</div>
			<span className={styles.discount_header}>Применить промокод</span>
			<div className={styles.block_discount__authorization_item}>
				<input type="text" placeholder="Введите промокод" />
				<button>Применить</button>
			</div>
		</div>
	};

	renderPriceOrder = () => {
		const {total} = this.props;
		return <div className={styles.block_discount__items}>
			{this.renderDiscount()}
			<div className={styles.discount_price}>
				<p>Стоимость заказа</p>
				<span className={styles.discount_price__header}>Стоимость блюд</span>
				<span className={styles.discount_price__price}>{total <= 0 ? '0 руб': total.toFixed(2) + ' руб.'}</span>
				<span className={styles.discount_price__header}>Стоимость доставки</span>
				<span className={styles.discount_price__delivery}>Бесплатно</span>
				<span className={styles.discount_price__header}>Скидка</span>
				<span className={styles.discount_price__discount}>0.00 руб.</span>
				<span className={styles.discount_price__total}>Итого</span>
				<span className={styles.discount_price__price}>{total <= 0 ? '0 руб': total.toFixed(2) + ' руб.'}.</span>
			</div>
		</div>
	};

	render() {
		return (
			<section>
				<div className={styles.block_discount}>
					{this.renderPriceOrder()}
					<div className={styles.discount_price__order}>
						<button>Оформить заказ</button>
						<button>Заказать еще</button>
					</div>
				</div>
			</section>
		)
	}
}

const mapStateToProps = state => ({
	total: state.cart.total
});

export default connect(mapStateToProps, null)(ShopOrder);
