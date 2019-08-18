// @flow
import cn from "classnames";
import MenuList from './MenuList/MenuList'
import MenuSearch from './MenuSearch/MenuSearch';
import React, {Component, Fragment} from 'react';
import styles from './Menu.less';
import type {State} from './flow';

const contentCN = cn([styles.content, styles.content_bordered]);

export class Menu extends Component<{}, State> {
	state: State;

	state = {
		hidden: false
	};

	closeMenu = () => {
		this.setState({
			hidden: true
		})
	};

	openMenu = () => {
		this.setState({
			hidden: false
		})
	};

	render () {
		return (
			<nav>
				<div className={contentCN}>
					{this.state.hidden ? <button className={styles.openMenu} onClick={this.openMenu}>Меню блюд</button> : null}
					{this.state.hidden ? null : <button className={styles.closeMenu} onClick={this.closeMenu}>&times;</button>}
					{this.state.hidden ? null :
						<Fragment>
							<MenuList />
							<MenuSearch />
						</Fragment>}
				</div>
			</nav>
		)
	}
}

export default Menu;




