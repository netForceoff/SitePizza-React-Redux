'use strict';

const {join} = require('path');

let browsers = {};
const definedBrowsers = [
	{
		name: 'chrome',
		height: 1080,
		width: 1920
	}
];

definedBrowsers.forEach(browser => {
	const {name, height, width} = browser;
	browsers[name] = {
		desiredCapabilities: {
			browserName: name
		},
		windowSize: {
			width,
			height
		},
		gridUrl: `http://localhost:4444/wd/hub`
	};
});

let sets = {};
const definedSets = [
	{
		active: true,
		files: 'default.js',
		name: 'addToCart'
	}
];

definedSets.filter(set => set.active).forEach(set => {
	sets[set.name] = {
		files: join(__dirname, `../tests/functional/${set.files}`)
	};
});

module.exports = {
	browsers,
	sets
};
