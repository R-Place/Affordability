const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(express.static('client'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req,res) => {
  console.log('GOTTEN')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})