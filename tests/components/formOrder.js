import Header from "../../src/components/Header/Header";
import FormOrder from "../../src/components/Form/FormOrder/FormOrder";
import {mount} from 'enzyme';
import React from 'react';

const props = {
	onClick: () => console.log('Click!')
};

describe(`Close window`, () => {
	it(`Click`, () => {
		const wrapper = mount(<FormOrder click={props.onClick}/>);
		wrapper.find('.form__closeForm_button').simulate('click');
		wrapper.find('.cancel__button').simulate('click');
	})
});
