const formatPriceStr = (price) => {
  return Math.floor(price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export default formatPriceStr;

