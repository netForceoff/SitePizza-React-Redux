// @flow
import React from 'react';
import styles from './FormOrder.less';
import type {Props} from './flow';

export const FormOrder = (props: Props) => (
	<div className={styles.form__phoneOrder}>
		<div className={styles.form__closeForm}>
			<button className={styles.form__closeForm_button} onClick={props.click}>&times;</button>
		</div>
		<h4>Заказать звонок</h4>
		<span>Имя </span> <span className={styles.form__importantField}>*</span>
		<input type="text"/>
		<span>Телефон <span className={styles.form__importantField}>*</span></span>
		<input type="text" />
			<button className={styles.confirm__button}>Подтвердить</button>
			<button className={styles.cancel__button} onClick={props.click}>Отменить</button>
	</div>
);
export default FormOrder;
