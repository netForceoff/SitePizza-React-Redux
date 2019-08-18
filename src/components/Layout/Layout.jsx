// @flow
import App from 'components/App';
import Pizza from 'components/Pizza';
import React, {Component, Fragment} from 'react';
import Shop from 'components/Shop';
import {Switch, Route, withRouter} from 'react-router-dom';

export class Layout extends Component<{}>{
	render() {
		const routes = (
			<Switch>
				<Route path="/pizza" component={Pizza} />
				<Route path="/shop" component={Shop} />-
				<Route path="/" exact component={App} />
			</Switch>
		);

		return (
			<Fragment>
				{routes}
			</Fragment>

		)
	}
}

export default withRouter(Layout);
