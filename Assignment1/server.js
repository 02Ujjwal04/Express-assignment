const express = require('express');
const app = express();
const PORT = 3000; 

const menProducts = [
  { id: 1, name: 'Men Product 1' },
  { id: 2, name: 'Men Product 2' },
  // Add more men products here
];

const womenProducts = [
  { id: 1, name: 'Women Product 1' },
  { id: 2, name: 'Women Product 2' },
  // Add more women products here
];

app.get('/', (req, res) => {
  res.send('Welcome to Men & Women Dummy Data');
});

app.get('/men', (req, res) => {
  res.json(menProducts);
});

app.get('/women', (req, res) => {
  res.json(womenProducts);
});

app.get('/other', (req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
