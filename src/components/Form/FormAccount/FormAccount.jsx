// @flow
import React, {Component} from 'react';
import styles from '../FormOrder/FormOrder.less';
import type {Props, State} from './flow';

export class FormAccount extends Component<Props, State> {
	props: Props;
	state: State;

	constructor(){
		super();
			this.state = {
				switchName: false
			}
	}

	handleClickSwitchText = () => {
		this.setState({
			switchName: !this.state.switchName
		})
	};

	renderBlockHeader() {
		return <div className={styles.form__closeForm}>
			<button className={styles.form__signIn} onClick={this.handleClickSwitchText}>{this.state.switchName ? 'Вход' : 'Регистрация'}</button>
			<button className={styles.form__closeForm_button} onClick={this.props.click}>&times;</button>
		</div>
	}

	render() {
		return (
			<div className={styles.form__registration}>
				{this.renderBlockHeader()}
				<h4>{this.state.switchName ? 'Регистрация': 'Вход'}</h4>
				{this.state.switchName ? <div className={styles.form__registrationText}>
					Для регистрации введите номер телефона и нажмите на надпись «получить код в СМС». После этого введите код, и
					нажмите кнопку «Регистрация».
				</div>: null}
				<span>Номер телефона</span><span className={styles.form__importantField}>*</span>
				<input type="text"/>
				<button className={styles.form__gettingSMS}>Получить код в СМС</button>
				<span>Пароль или код из смс</span><span className={styles.form__importantField}>*</span>
				<div className={styles.form__passwordBock}>
					<input type="password" className={styles.form__inputPassword} />
					<span className={styles.passCN} alt="Показать пароль" />
				</div>
				<button className={styles.form__success}>Войти</button>
			</div>
		)
	}
}

export default FormAccount;
