import {mount} from 'enzyme';
import FormAccount from "../../src/components/Form/FormAccount/FormAccount";
import React from 'react';

const props = {
	click: () => console.log('click')
};

describe(`Close form`, () => {
	it(`click`, () => {
		const wrapper = mount(<FormAccount click={props.click}/>);
		wrapper.find('.form__signIn').simulate('click');
		expect(wrapper.state('switchName')).toBe(true);
	})
});
