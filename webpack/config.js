'use strict';

const define = require('./define');
const loaders = require('./loaders');
const localIp = require('my-local-ip');
const optimization = require('./optimization');
const plugins = require('./plugins');
const resolve = require('./resolve');


const outputFilename = ext => `${define.development ? `` : `[hash].`}[name].${ext}`;

let entries = {
	'10_global': ['babel-polyfill', './src/global.js']
};

define.pages.forEach(page => {
	entries[`30_${page}`] = [`./src/pages/${page}.js`];
});

module.exports = {
	devtool: define.development ? 'inline-source-map' : false,
	devServer: {
		host: localIp(),
		historyApiFallback: true
	},
	entry: entries,
	mode: define.mode,
	module: loaders,
	optimization,
	output: {
		filename: outputFilename('js'),
		path: define.dist
	},
	plugins,
	resolve
};
