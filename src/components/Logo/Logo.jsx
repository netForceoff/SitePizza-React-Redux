// @flow
import logo from "../../images/logo.png";
import React from 'react';
import type {Props} from './flow'

export const Logo  = (props: Props) => (
			<a href={'/'} className={props.logo}>
				<img src={logo} alt="Наша пицца" />
			</a>
		);

export default Logo;
