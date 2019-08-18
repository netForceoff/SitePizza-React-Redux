// @flow
import Header from 'components/Header';
import Main from 'components/Main';
import Menu from 'components/Menu';
import Footer from "components/Footer";
import React, {Component, Fragment} from 'react';

export class App extends Component<{}> {
	render () {
		return (
			<Fragment>
				<Header />
				<Menu />
				<Main />
				<Footer />
			</Fragment>
		);
	}
}

export default App;
