const { smart } = require('webpack-merge');
const base = require('./webpack.base');
module.exports = smart(base, {
    mode: 'development',
    devtool: 'inline-source-map'
});