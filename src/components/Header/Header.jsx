// @flow
import FormAccount from 'components/Form/FormAccount';
import FormOrder from 'components/Form/FormOrder';
import Logo from 'components/Logo';
import PhoneTime from 'components/PhoneTime';
import React, {Component} from 'react';
import styles from './Header.less';
import UserBox from 'components/Userbox';
import type {State} from './flow';

export class Header extends Component<{}, State> {

	state: State = {
		hiddenAccount: true,
		hiddenOrder: true
	};

	handleClickCloseAccount = () => {
		this.setState({
			hiddenAccount: true
		})
	};

	handleClickCloseOrder = () => {
		this.setState({
			hiddenOrder: true
		})
	};

	handleClickOpenAccount = () => {
		this.setState({
			hiddenAccount: false
		})
	};

	handleClickOpenOrder = () => {
		this.setState({
			hiddenOrder: false
		})
	};

	renderAccountWindow() {
		return this.state.hiddenAccount ? null : <div className={styles.popUp__window} >
			<FormAccount click={this.handleClickCloseAccount} />
		</div>
	}

	renderOrderWindow() {
		return this.state.hiddenOrder ? null : <div className={styles.popUp__window} >
				<FormOrder click={this.handleClickCloseOrder} />
			</div>
	}

	render () {
		return (
			<header>
				{this.renderOrderWindow()}
				{this.renderAccountWindow()}
				<div className={styles.content}>
					<Logo logo={styles.logo} />
					<PhoneTime click={this.handleClickOpenOrder} />
					<UserBox click = {this.handleClickOpenAccount} />
				</div>
			</header>
		);
	}
}

export default Header;

