const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => {
    axios.get('http://localhost:3010/render').then(response => {
        const html = render(response.data);
        res.send(html);
    });
});

app.listen(8080, () => console.log('app listening on http://localhost:8080'));



function render(container) {
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

<div id="root">${container}</div>

<script>
  ReactDOM.render(
      React.createElement(window.myNamespace.components.container),
      document.getElementById('root')
  );
</script>
</body>
</html>`
}
