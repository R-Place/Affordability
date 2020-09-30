import React from 'react';
import axios from 'axios';
import HomePrice from './HomePrice.jsx';
import DownPayment from './DownPayment.jsx';
import InterestRate from './InterestRate.jsx';
import LoanType from './LoanType.jsx';
import DonutGraph from './DonutGraph.jsx';
import AffordabilityTable from './AffordabilityTable.jsx';
import Styles from './Styled.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homePrice: 0,
      downPayment: 0,
      monthlyPayment: 0,
      loanType: 30,
      interestRate: 2.99,
      max: null,
      previouslyClicked: null,
      principal: 0,
      homeInsurance: 75,
      propertyTax: 0,
      mortgageETC: 0,
      mortgageETCPercentage: 0,
      percent: 20,
      principalPercentage: 0,
      homeInsurancePercentage: 0,
      propertyTaxPercentage: 0
    };
    this.getHomePrice = this.getHomePrice.bind(this);
    this.calculateMonthlyPayment = this.calculateMonthlyPayment.bind(this);
    this.updateValues = this.updateValues.bind(this);
    this.updateMonthlyPayment = this.updateMonthlyPayment.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.calculatePropertyTax = this.calculatePropertyTax.bind(this);
    this.calculatePrincipal = this.calculatePrincipal.bind(this);
    this.calculateETC = this.calculateETC.bind(this);
  }



  getHomePrice() {
    axios({
      method: 'get',
      url: '/api/affordability'
    })
    .then((response) => {
      let randomIndex = Math.floor(Math.random() * 100);
      let homePrice = response.data[randomIndex].price;
      this.setState({
        homePrice: homePrice,
        downPayment: Math.floor((homePrice * 20) / 100),
        monthlyPayment: this.calculateMonthlyPayment(homePrice),
        max: this.calculateMaxDownPayment(homePrice),
        propertyTax: this.calculatePropertyTax(homePrice),
      })
      this.setState({
        principal: this.calculatePrincipal(),
        propertyTaxPercentage: this.calculatePercentage(this.state.propertyTax, this.state.monthlyPayment),
        homeInsurancePercentage: this.calculatePercentage(this.state.homeInsurance, this.state.monthlyPayment)
      })
      this.setState({
        principalPercentage: this.calculatePercentage(this.state.principal, this.state.monthlyPayment),
        mortgageETC: this.calculateETC()
      })
      this.setState({
        mortgageETCPercentage: this.calculatePercentage(this.state.mortgageETC, this.state.monthlyPayment)
      })
    })
  }



  updateValues(homePrice) {
    let downPayment = (homePrice * 20) / 100;

    this.setState({
      homePrice: homePrice,
      downPayment: downPayment,
      monthlyPayment: this.calculateMonthlyPayment(homePrice),
      percentage: this.calculatePercentage(downPayment, homePrice),
      propertyTax: this.calculatePropertyTax(homePrice),
      principal: this.calculatePrincipal(),
      principal: this.calculatePrincipal(),
      propertyTaxPercentage: this.calculatePercentage(this.state.propertyTax, this.state.monthlyPayment),
      homeInsurancePercentage: this.calculatePercentage(this.state.homeInsurance, this.state.monthlyPayment),
      principalPercentage: this.calculatePercentage(this.state.principal, this.state.monthlyPayment),
      mortgageETCPercentage: this.calculatePercentage(this.state.mortgageETC, this.state.monthlyPayment)
    })
  }

  updateMonthlyPayment(downPayment) {
    this.setState({
      downPayment: downPayment,
      monthlyPayment: this.calculateMonthlyPayment(this.state.homePrice),
      percentage: this.calculatePercentage(downPayment, this.state.homePrice),
      principal: this.calculatePrincipal(),
      principalPercentage: this.calculatePercentage(this.state.principal, this.state.monthlyPayment),
      propertyTaxPercentage: this.calculatePercentage(this.state.propertyTax, this.state.monthlyPayment),
      homeInsurancePercentage: this.calculatePercentage(this.state.homeInsurance, this.state.monthlyPayment),
      mortgageETC: this.calculateETC()
    })
    this.setState({
      mortgageETCPercentage: this.calculatePercentage(this.state.mortgageETC, this.state.monthlyPayment)
    })
  }

  calculateMonthlyPayment(homePrice) {
    let principalLoan = homePrice - this.state.downPayment;
    let monthlyInterest = this.state.interestRate / 100;
    let loanType = this.state.loanType;
    let monthlyPayment = (principalLoan * (monthlyInterest / 12) * Math.pow(1 + (monthlyInterest / 12), (12 * loanType)) / Math.pow(1 + (monthlyInterest / 12), (12 * loanType)) - 1) * 2;
    monthlyPayment = monthlyPayment;
    if (monthlyPayment < 0) {
      return 75;
    }
    return monthlyPayment;
  }

  calculatePrincipal() {
    let insurancePlusTax = this.state.homeInsurance + this.state.propertyTax;
    let principal = this.state.monthlyPayment - insurancePlusTax;
    if (principal < 0) {
      return 0;
    }
    return principal;
  }

  calculatePropertyTax(homePrice) {
    let propertyTax = ((1.1801 / 100) * homePrice) / 21;
    if (propertyTax < 0) {
      return 0;
    }
    return propertyTax;
  }

  calculateMaxDownPayment(homePrice) {
    var max = homePrice * .30;
    return max;
  }

  calculatePercentage(payment, mainAmount) {
    let percentage = (payment / mainAmount) * 100;
    if (percentage < 0) {
      return 0;
    }
    return percentage;
  }

  calculateETC() {
    let unaccounted = this.state.monthlyPayment - this.state.principal - this.state.propertyTax - this.state.homeInsurance;
    if (unaccounted < 0) {
      return 0;
    }
    return unaccounted;
  }

  changeColor(target) {
    if (this.state.previouslyClicked !== null) {
      this.state.previouslyClicked.style.border = "1px solid rgb(205,209,212)";
    }
    target.style.border = "3px solid #007882"
    this.setState({
      previouslyClicked: target
    })
  }

  render() {
    {this.state.max === null
     ? this.getHomePrice()
     : null;
    }
    return (
      <Styles.AffordabiltyContainer className="App">
        <Styles.Padding className="padding">
          <Styles.Header className="header">
            <Styles.AffordabilityText className="text">
              Affordability
            </Styles.AffordabilityText>
          </Styles.Header>
        </Styles.Padding>
        <Styles.PaddingTwo className="padding">
            <Styles.TextContainerBold className="text">
              Calculate your monthly mortgage payments
            </Styles.TextContainerBold>
            <Styles.TextContainer className="text">
                Your est. payments: $
              {Math.floor(this.state.monthlyPayment).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
              /month
            </Styles.TextContainer>
        </Styles.PaddingTwo>
        <Styles.TextContainer className="text">
          <Styles.FlexContainer className="flex">
            <Styles.GridContainer className="grid">
              <HomePrice homePrice={this.state.homePrice} updateValues={this.updateValues} changeColor={this.changeColor} />
              <DownPayment  downPayment={this.state.downPayment} homePrice={this.state.homePrice} max={this.state.max} updateMonthlyPayment={this.updateMonthlyPayment} changeColor={this.changeColor}/>
              <InterestRate interestRate={this.state.interestRate} changeColor={this.changeColor}/>
              <LoanType />
            </Styles.GridContainer>
          </Styles.FlexContainer>
        </Styles.TextContainer>
        <Styles.GraphContainer className="GraphContainer">
          <DonutGraph  monthlyPayment={this.state.monthlyPayment} principalPercentage={this.state.principalPercentage}  propertyTaxPercentage={this.state.propertyTaxPercentage} homeInsurancePercentage={this.state.homeInsurancePercentage} mortgageETCPercentage={this.state.mortgageETCPercentage}/>
          <AffordabilityTable principal={this.state.principal} propertyTax={this.state.propertyTax} homeInsurance={this.state.homeInsurance} mortgageETC={this.state.mortgageETC} />
        </Styles.GraphContainer>
      </Styles.AffordabiltyContainer>
    );
  }
}

export default App;
