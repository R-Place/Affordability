const express = require('express');

const app = express();

const port = 3000;
const { Homes } = require('../database/index.js');

app.use(express.static('public'));

app.get('/api/affordability', (req, res) => {
  Homes.getPrices((error, prices) => {
    if (error) {
      console.log(error);
      res.sendStatus(404);
    } else {
      res.send(prices);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
