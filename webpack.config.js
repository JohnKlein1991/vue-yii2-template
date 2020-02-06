const path = require('path');
const webpack = require( 'webpack' );

const PATHS = {
    source: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'web')
};

const { VueLoaderPlugin } = require('vue-loader');

module.exports = (env, argv) => {
    let config = {
        production: argv.mode === 'production'
    };

    return {
        devServer: {
            contentBase: path.join(__dirname, 'app'),
            compress: true,
            port: 9000
        },
        resolve: {
            extensions: ['.vue', '.wasm', '.mjs', '.js', '.json']
        },
        mode: 'development',
        entry: [
            './src/app.js'
        ],
        output: {
            path: PATHS.build,
            filename: config.production ? 'app.min.js' : 'app.js'
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: 'vue-loader'
                },
                {
                    test: /\.css$/,
                    loader: ['style-loader', 'css-loader']
                }
            ],
        },
        plugins: [
            new VueLoaderPlugin()
        ]
    };
};