
module.exports = {
    entry: './client/index.js',
    output: {
        filename: 'dist/client.bundle.js',
        libraryTarget: 'window',
        library: ['myNamespace', 'components', 'container'],
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
};
