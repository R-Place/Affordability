const express = require('express');

const app = express();

const port = 3003;
const { Homes } = require('../database/index.js');

app.use(express.static('public'));
app.use('/:id', express.static('public'));

app.get('/api/affordability', (req, res) => {
  Homes.getPrices((error, prices) => {
    if (error) {
      console.log(error);
      res.sendStatus(404);
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).send(prices);
    }
  });
});


app.get('/api/affordability/:id', (req, res) => {
  let id = req.params.id;
  Homes.getPriceFromID(id, (error, price) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (error) {
      console.log(error);
      res.sendStatus(404);
    } else {
      res.status(200).send(price);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
