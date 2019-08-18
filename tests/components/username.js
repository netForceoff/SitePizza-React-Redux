import {mount} from 'enzyme';
import Username from "../../src/components/Userbox/Username";
import React from 'react';

const prop = {
	click: () => console.log('Click!')
};

describe(`check on click`, () => {
	it(`check click`, () => {
		const wrapper = mount(<Username click={prop.click}/>);
		wrapper.find('.privateAccount_button').simulate('click');
	})
});
