
module.exports = {
    entry: './client/index.js',
    output: {
        filename: 'dist/child3-dynamic.bundle.js',
        libraryTarget: 'window',
        library: ['myNamespace', 'components', 'child3-dynamic'],
    },
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
