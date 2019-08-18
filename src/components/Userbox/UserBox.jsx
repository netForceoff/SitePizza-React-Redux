// @flow
import React from 'react';
import Shop from './Shop/Shop';
import styles from './Userbox.less';
import Username from './Username';
import type {Props} from './flow';

export const UserBox = (props: Props) => (
	<div className={styles.shop}>
		<Shop />
		<Username click={props.click}/>
	</div>
);

export default UserBox;
