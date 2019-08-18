// @flow
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {searchItems} from 'actions/items';
import styles from './MenuSearch.less';
import type {Props} from '../flow';


export class MenuSearch extends Component<Props> {
	props: Props;

	handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
		const target = event.currentTarget;
		const {value} = target;
		const {searchItems} = this.props;
		searchItems && searchItems(value);
	};

	render() {
		return (
			<div className={styles.mainMenu__search}>
				<input type="text" onChange={this.handleChange} data-set-change="search"/>
				<button className={styles.mainMenu__searchButton}>Искать</button>
			</div>
		);

	}
}


const mapDispatchToProps = dispatch => bindActionCreators({
	searchItems
}, dispatch);

export default connect(null, mapDispatchToProps)(MenuSearch);
