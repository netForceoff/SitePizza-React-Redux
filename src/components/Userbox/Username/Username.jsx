// @flow
import React from 'react';
import styles from './Username.less';
import type {Props} from 'components/Userbox/flow';

export const Username = (props: Props) => (
	<div className={styles.account}>
		<button className="privateAccount_button" onClick={props.click}>
			Личный кабинет
		</button>
	</div>
);

export default Username;
