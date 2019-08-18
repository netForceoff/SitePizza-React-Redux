// @flow
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";
import React, {Component} from 'react';
import styles from './Shop.less';
import type {Props} from 'components/Shop/ShopOrder/flow';

export class  Shop extends Component<Props>{
	props: Props;

	render() {
		const {total} = this.props;
		return (
			<div className={styles.shop}>
				<NavLink to="/shop" exact={true}>{total <= 0 ? 'Корзина пуста' : 'Сумма ' + total.toFixed(2) + 'руб.'}</NavLink>
				<NavLink to="/shop" exact={true}><span className={styles.orangeText}>0 </span> бонусных баллов</NavLink>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	total: state.cart.total
});

export default connect(mapStateToProps, null)(Shop);
