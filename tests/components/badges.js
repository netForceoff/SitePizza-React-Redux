import {mount} from 'enzyme';
import Badges from "../../src/components/Main/Content/Badges/Badges";
import React from 'react';

const props = {
	badges: {
		best: true,
		forKids: true,
		new: true,
		red: true,
		pepper: true
	},

	labels: {
		best: 'Хит',
		forKids: 'Детская',
		new: 'Новое',
		pepper: 'Перец',
		red: 'Акция'
	}
};

describe(`check on classes`, () => {
	it(`check class`, () => {
		const wrapper = mount(<Badges badges={props.badges}/>);
		expect(wrapper.find('.badge_best')).toHaveLength(1);
		expect(wrapper.find('.badge_forKids')).toHaveLength(1);
		expect(wrapper.find('.badge_new')).toHaveLength(1);
		expect(wrapper.find('.badge_red')).toHaveLength(1);
		expect(wrapper.find('.badge_pepper')).toHaveLength(1);

		expect(wrapper.find('li.badge_best').text()).toEqual(props.labels.best);
		expect(wrapper.find('li.badge_forKids').text()).toEqual(props.labels.forKids);
		expect(wrapper.find('li.badge_new').text()).toEqual(props.labels.new);
		expect(wrapper.find('li.badge_red').text()).toEqual(props.labels.red);
		expect(wrapper.find('li.badge_pepper').text()).toEqual(props.labels.pepper);

		expect(wrapper.find('ul').childAt(0).type()).toEqual('li');
	})
});
