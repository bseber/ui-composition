const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => {
    axios.get('http://localhost:3010/render' + req.originalUrl).then(response => {
        const html = render(response.data);
        res.send(html);
    });
});

app.listen(8080, () => console.log('app listening on http://localhost:8080'));



function render({ html, initialState }) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ui composing</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.2.0/umd/react.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.2.0/umd/react-dom.development.js"></script>
    
    <script src="http://localhost:3010/container.bundle.js"></script>
</head>
<body>

<div id="root">${html}</div>

<script>
    window.myNamespace.components.container.hydrate('#root', ${JSON.stringify(initialState)});
</script>
</body>
</html>`
}
