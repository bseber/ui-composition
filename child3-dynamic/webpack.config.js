const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';

module.exports = {
    entry: './client/index.js',
    output: {
        filename: 'dist/child3-dynamic.bundle.js',
        libraryTarget: 'window',
        library: ['myNamespace', 'components', 'child3-dynamic'],
    },
    plugins: [
        isProd && new UglifyJsPlugin({
            cache: true,
        }),
    ].filter(Boolean),
    module: {
        rules: [
            {test: /\.js$/, use: 'babel-loader'}
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
};
