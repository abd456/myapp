const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from pixelvoid.me!');
});

app.get('/about', (req, res) => {
  res.send('This is my server!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});