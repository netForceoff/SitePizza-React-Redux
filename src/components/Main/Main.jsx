// @flow
import Content from "./Content/Content";
import React, {Component, Fragment} from 'react';
import Slider from './Slider/Slider';

export class Main extends Component<{}>{
	render() {
		return (
		<Fragment>
			<Slider />
			<Content/>
		</Fragment>
		)
	}
}

export default Main;
