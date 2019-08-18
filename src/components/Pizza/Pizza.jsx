// @flow
import Header from "../Header/Header";
import Filter from 'components/Filter';
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import PizzaList from "./PizzaList/PizzaList";
import React, {Component, Fragment} from 'react';
import type {State} from './flow';

export class Pizza extends Component<{}, State>{

	state: State = {
		hidden: true
	};

	componentDidMount() {
		window.onscroll = () => {
			if (window.pageYOffset < 10) {
				this.setState({
					hidden: true
				})
			} else {
				this.setState({
					hidden: false
				})
			}
		}
	}


	renderFilter () {
		const {hidden} = this.state;

		return hidden ? null : <Filter />
	}

	render() {
		return (
			<Fragment>
				{this.renderFilter()}
				<Header />
				<Menu />
				<PizzaList/>
				<Footer/>
			</Fragment>
		)
	}
}

export default Pizza;
