import Logo from 'components/Logo';
import {mount} from 'enzyme';
import React from 'react';

describe('Logo component', () => {
	describe(`logo`, () => {
		it(`is added to className`, () => {
			const wrapper = mount(<Logo logo="logo" />);
			expect(wrapper.find('.logo')).toHaveLength(1);
		});
	})
});
