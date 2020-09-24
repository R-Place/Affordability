
var prices = [];

var count = 0;
while (count <= 100) {
  price =  Math.floor(Math.random() * (2999999 - 300000) + 300000);
  prices.push(price);
  count++;
}

module.exports = {
  prices
}