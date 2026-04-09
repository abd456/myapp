const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello from pixelvoid.me!');
// });

app.get('/', (req, res) => {
  res.send('auto deployed!');
});

app.get('/about', (req, res) => {
  res.send('This is my server!');
});

app.get('/dark', (req, res) => {
  res.send('hello from the other side!');
});

app.get('/hello', (req, res) => {
  res.send('see ya later!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});