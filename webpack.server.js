const path = require('path');

module.exports = {
    // Inform webpack that we're building a bundle for server side
    target: 'node',
    // root file
    entry: './src/server.js',
    // output bundle
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    // run babel on every file
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        [ 'env', { targets: { browsers : ['last 2 versions'] } } ]
                    ]
                }
                 
            }
        ]
    }
}