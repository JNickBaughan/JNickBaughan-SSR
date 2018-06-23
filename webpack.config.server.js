const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common')
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // Inform webpack that we're building a bundle for server side
    target: 'node',
    // root file
    entry: './src/server/server.js',
    // output bundle
    output: {
        filename: 'bundle.server.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [webpackNodeExternals()]
}

module.exports = merge(config, commonConfig);