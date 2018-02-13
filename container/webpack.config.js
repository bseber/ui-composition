const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';

const plugins = [
    isProd && new UglifyJsPlugin({
        cache: true,
    }),
].filter(Boolean);

module.exports = [
    // bundle used by the server (SSR)
    {
        entry: './client/index.server.js',
        output: {
            filename: 'dist/server.bundle.js',
            libraryTarget: 'commonjs2',
        },
        module: {
            rules: [
                { test: /\.js$/, use: 'babel-loader' }
            ]
        },
        plugins
    },
    // bundle used by the browser
    {
        entry: './client/index.browser.js',
        output: {
            filename: 'dist/client.bundle.js',
            libraryTarget: 'window',
            library: ['myNamespace', 'components', 'container'],
        },
        module: {
            rules: [
                { test: /\.js$/, use: 'babel-loader' }
            ]
        },
        plugins,
        externals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
        },
    }
];
