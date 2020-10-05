const express = require('express');

const app = express();

const port = 3003;
const { Homes } = require('../database/index.js');

app.use(express.static('public'));

app.get('/api/affordability', (req, res) => {
  Homes.getPrices((error, prices) => {
    if (error) {
      console.log(error);
      res.sendStatus(404);
    } else {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(200).send(prices);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
