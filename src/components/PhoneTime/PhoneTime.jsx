// @flow
import cn from "classnames";
import React from 'react';
import styles from "./PhoneTime.less";
import type {Props} from './flow';


const orangeTextCn = cn([styles.header__orangeText, styles.text__bolder]);
const phoneTimeCN = cn([styles.phoneTime, styles.text__bolder]);

export const PhoneTime = (props: Props) => (
	<div className={styles.phoneTime}>
		<div className={styles.phone}>
			<div className={phoneTimeCN}>
				<a href="tel:(8029)222-22-14">(8029) 222-22-14 </a>
			</div>
			<button className={styles.callUs} onClick={props.click}>Заказать звонок</button>
		</div>
		<div className={styles.time}>
			<span className={styles.workForYou}>Работаем для Вас</span> с <span
			className={orangeTextCn}>10:00</span> до <span
			className={orangeTextCn}>23:00</span>
		</div>
	</div>
);

export default PhoneTime;
