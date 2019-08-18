import {mount} from 'enzyme';
import PhoneTime from "../../src/components/PhoneTime/PhoneTime";
import React from 'react';

const prop = {
	click: () => console.log('Click!')
};

describe(`check on click`, () => {
	it(`check click`, () => {
		const wrapper = mount(<PhoneTime click={prop.click}/>);
		wrapper.find('.callUs').simulate('click');
	})
});
