const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const HOST = "0.0.0.0";

app.use(express.static(path.join(__dirname, 'public')));

app.get('/toss', (req, res) => {
  const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
  res.json({ result });
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
