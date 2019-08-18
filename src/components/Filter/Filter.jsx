// @flow
import {arrayListIngredients, arrayListStickers} from "../Pizza/Data";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {handleCLickFilterItemsStickers, handleClickFilterItemsIngredients, handleCLickFilterRemoveItems} from 'actions/items';
import React, {Component} from 'react';
import styles from './Filter.less';
import type {Props, State} from './flow';
import type {FilterItem} from 'types/filter';

export class Filter extends Component<Props, State> {
	props: Props;
	state: State;

	constructor (props: Props) {
		super(props);

		this.state = {
			hidden: true,
		};
	}

	handleChangeIngredients = (id: string) => (event: SyntheticEvent<HTMLInputElement>) => {
		const target = event.currentTarget;
		const {checked} = target;
		const {handleClickFilterItemsIngredients} = this.props;
		handleClickFilterItemsIngredients && handleClickFilterItemsIngredients(id, checked);
	};

	handleChangeStickers = (id: string) => (event: SyntheticEvent<HTMLInputElement>) => {
		const target =  event.currentTarget;
		const {checked} = target;
		const {handleCLickFilterItemsStickers} = this.props;
		handleCLickFilterItemsStickers && handleCLickFilterItemsStickers(id, checked);
	};

	handleClickCloseWindow = () => {
		this.setState({
			hidden: true
		});
	};

	handleClickForm = (event: Event) => {
		event.preventDefault()
	};

	handleClickToggleWindow = () => {
		this.setState({
			hidden: !this.state.hidden
		})
	};

	removeItemsFilter = () => {
		const {handleCLickFilterRemoveItems} = this.props;
		handleCLickFilterRemoveItems && handleCLickFilterRemoveItems();
		this.setState({
			hidden: true
		})
	};

	renderFilterBox () {
		return (
			<div className={styles.filter_box}>
				<form onSubmit={this.handleClickForm}>
					<div className={styles.form__closeForm}>
						<button className={styles.form__closeForm_filter} onClick={this.handleClickCloseWindow}>&times;</button>
					</div>
					<h4>Стикер</h4>
					{this.renderListStickers()}
					<h4>Ингридиенты</h4>
					{this.renderListIngredients()}
					<div className={styles.reset_block}>
						<button onClick={this.removeItemsFilter}>Сбросить фильтры</button>
					</div>
				</form>
			</div>
		);
	}

	renderListIngredients () {
		return	<ul>
			{arrayListIngredients.map((item: FilterItem, index) => {
				const {id, text} = item;
				const {ingredients} = this.props;
				const checked = ingredients.indexOf(id) >= 0;
				return <li key={index} className={styles.filter_item}>
					<input type="checkbox" id={id} className={styles.checkbox_f} onChange={this.handleChangeIngredients(id)} defaultChecked={checked}/>
					<label htmlFor={id} >{text}</label>
				</li>
			})}
		</ul>
	}

	renderListStickers () {
		return (
			<ul>
				{arrayListStickers.map(this.renderSticker)}
			</ul>
		);
	}

	renderSticker = (item: FilterItem, index: number) => {
		const {stickers} = this.props;
		const {id, text} = item;
		const checked = stickers.indexOf(id) >= 0;

		return (
			<li key={index} className={styles.filter_item}>
				<input type="checkbox" id={id} className={styles.checkbox_f} onChange={this.handleChangeStickers(id)} defaultChecked={checked}/>
				<label htmlFor={id}>{text}</label>
			</li>
		);
	};

	render () {
		return (
			<div className={styles.filter} style={!this.state.hidden ? {height: '628px'} : {height: '83px'}}>
				<div className={styles.filter_button_box}>
					<button className={styles.filter_button} onClick={this.handleClickToggleWindow}>Фильтры</button>
				</div>
				{!this.state.hidden ? this.renderFilterBox() : null}
			</div>
		);
	}
}

const props = state => ({
	ingredients: state.filter.ingredients,
	stickers: state.filter.stickers
});

const functions = dispatch => bindActionCreators({
	handleClickFilterItemsIngredients,
	handleCLickFilterItemsStickers,
	handleCLickFilterRemoveItems
}, dispatch);

export default connect(props, functions)(Filter);
