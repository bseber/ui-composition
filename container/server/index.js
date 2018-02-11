const path = require('path');
const express = require('express');
const app = express();

const init = require('../dist/server.bundle.js').default;

app.get('/render', (req, res) => {
    init(req).then(data => {
        res.json(data);
    });
});

app.get('/container.bundle.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/client.bundle.js'))
});

app.listen(3010, () => console.log('product app listening on port 3010'));
