const prices = [];

let count = 0;
while (count < 100) {
  const price = Math.floor(Math.random() * (3000000 - 800000) + 800000);
  prices.push(price);
  count += 1;
}

module.exports = prices;
