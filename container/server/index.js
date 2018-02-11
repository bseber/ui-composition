const path = require('path');
const express = require('express');
const app = express();

app.get('/container.bundle.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/Container.js'))
});

app.listen(3010, () => console.log('product app listening on port 3010'));
