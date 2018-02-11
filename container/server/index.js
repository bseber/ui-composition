const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const express = require('express');
const app = express();

const View = require('../client/index');

app.get('/render', (req, res) => {
    res.send(
        ReactDOMServer.renderToString(
            React.createElement(View)
        )
    );
});

app.get('/container.bundle.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/client.bundle.js'))
});

app.listen(3010, () => console.log('product app listening on port 3010'));
