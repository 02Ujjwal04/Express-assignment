const express = require('express');
const app = express();
const PORT = 3003;

app.get('/random', (req, res) => {
  const randomNum = Math.floor(Math.random() * 100); 
  res.json({ random: randomNum });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
