const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const port = 3000;
const { Homes } = require('../database/index.js');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/affordability', (req, res) => {
  Homes.getPrices((error, results) => {
    if (error) {
      res.send(error);
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
