const formatPriceStr = (price) => {
  return Math.floor(price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

const getDownPayment = (homePrice, downPaymentPercentage) => {
  return homePrice * (downPaymentPercentage / 100);
};


const getPrincipalAndInterest = (homePrice, downPayment, loanType, interestRate) => {
  const paymentsPerYear = 12;
  const principal = (homePrice - downPayment) / (loanType * paymentsPerYear);
  const interest = ((interestRate / 100) / paymentsPerYear) * (homePrice - downPayment);
  return principal + interest;
};

const getPropertyTax = (homePrice) => {
  const SFTaxRate = 1.1801;
  return ((SFTaxRate / 100) * homePrice) / 21;  //why 21? next time store with clear variable name
};

const getMortgageInsETC = (homePrice, downPayment) => {
  const mortgageInsuranceRate = .0002;
  return (homePrice - downPayment) * mortgageInsuranceRate;
};

const getMonthlyPayment = (homePrice, downPayment, loanType, interestRate, homeInsurance) => {
  const propertyTax = getPropertyTax(homePrice);
  const principalAndInterest = getPrincipalAndInterest(homePrice, downPayment, loanType, interestRate);
  return  propertyTax + principalAndInterest + homeInsurance;
};

const calculatePercentage = (payment, mainAmount) => {
  let percentage = (payment / mainAmount) * 100;
  if (percentage < 0) {
    return 0;
  }
  return percentage;
}


export default { calculatePercentage, formatPriceStr, getDownPayment, getMonthlyPayment, getMortgageInsETC, getPrincipalAndInterest, getPropertyTax };

