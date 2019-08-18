// @flow
import Header from 'components/Header';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import React, {Component, Fragment} from 'react';
import ShopItems from './ShopItems';
import ShopOrder from './ShopOrder';


export class Shop extends Component<{}> {
	render() {
		return(
			<Fragment>
				<Header />
				<Menu />
				<ShopItems/>
				<ShopOrder />
				<Footer />
			</Fragment>
		)
	}
}


export default Shop;
