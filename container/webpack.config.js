
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
        externals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
        },
    }
];
