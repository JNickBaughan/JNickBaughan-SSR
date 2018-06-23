const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

const config = {
    // root file
    entry: './src/client/client.js',
    // output bundle
    output: {
        filename: 'bundle.client.js',
        path: path.resolve(__dirname, 'build/client')
    }
}

module.exports = merge(config, commonConfig);