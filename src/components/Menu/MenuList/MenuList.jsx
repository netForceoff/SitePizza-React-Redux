// @flow
import {links} from "./Data";
import type {MenuItem} from './flow';
import {NavLink} from "react-router-dom";
import React, {Component} from 'react';
import styles from './MenuList.less';

class MenuList extends Component<{}>{

	 renderLinks(links: Array<MenuItem>): Array<any> {
		return links.map((link, index) => {
			return (
				<li key={index}>
					<NavLink
						activeClassName={"active"}
						data-test-id={link.testId || ''}
						className={link.className}
						exact={link.exact}
						to={link.to}
					>
						{link.label}
					</NavLink>
				</li>
			)
		});
	}

	render() {
		return(
			<ul className={styles.mainMenu}>
				{this.renderLinks(links)}
			</ul>
		)
	}
}

export default MenuList;
