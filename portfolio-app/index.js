const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>My Portfolio</h1>');
});

app.listen(5000, () => console.log('Running on port 5000'));
