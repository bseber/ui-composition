const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
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

<div id="root"></div>

<script>
  ReactDOM.render(
      React.createElement(window.myNamespace.components.Container),
      document.getElementById('root')
  );
</script>
</body>
</html>`);
});

app.listen(8080, () => console.log('app listening on http://localhost:8080'));
