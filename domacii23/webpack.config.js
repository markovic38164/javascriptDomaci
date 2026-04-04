const path = require('path');
const Dontenv = require('dotenv-webpack');
module.exports = {
	mode: 'production',
	entry: ['./src/script.js'],
	output: {
		filename: 'script.min.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [new Dontenv()], //kad se uradi build ili watch onda ucita ovo
};
