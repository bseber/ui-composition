const path = require('path');
const express = require('express');
const app = express();

app.get('/child3-dynamic.bundle.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/child3-dynamic.bundle.js'))
});

app.listen(3011, () => console.log('child3-dynamic app listening on port 3011'));
