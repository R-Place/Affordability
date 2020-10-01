import React from 'react';
import axios from 'axios';
import HomePrice from './HomePrice.jsx';
import DownPayment from './DownPayment.jsx';
import InterestRate from './InterestRate.jsx';
import LoanType from './LoanType.jsx';
import DonutGraph from './DonutGraph.jsx';
import AffordabilityTable from './AffordabilityTable.jsx';
import Styled from './Styled.jsx';
import formatPriceStr from './helpers.js';

const { AffordabiltyContainer, Padding, Header, AffordabilityText, PaddingTwo, TextContainerBold, TextContainer, FlexContainer, GridContainer, GraphContainer } = Styled;
    // AffordabiltyContainer, Padding, Header, AffordabilityText, PaddingTwo, TextContainerBold, TextContainer, FlexContainer, GridContainer

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
      homeInsurance: 75,
      propertyTax: 0,
      mortgageETC: 0,
      mortgageETCPercentage: 0,
      percent: 20,
      principalPercentage: 0,
      homeInsurancePercentage: 0,
      propertyTaxPercentage: 0,
      principalAndInterest: 0
    };
    this.getHomePrice = this.getHomePrice.bind(this);
    this.calculateMonthlyPayment = this.calculateMonthlyPayment.bind(this);
    this.updateValues = this.updateValues.bind(this);
    this.updateMonthlyPayment = this.updateMonthlyPayment.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.calculatePropertyTax = this.calculatePropertyTax.bind(this);
    this.calculatePrincipal = this.calculatePrincipal.bind(this);
    this.calculateETC = this.calculateETC.bind(this);
    this.recalculateBasedOnInterest = this.recalculateBasedOnInterest.bind(this);
    this.calculateMonthlyInterest = this.calculateMonthlyInterest.bind(this);
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
      })
      this.updateValues();
    })
  }

  calculateMonthlyInterest() {
    const interest = ((this.state.interestRate / 100) / 12) * (this.state.homePrice - this.state.downPayment)
    return interest;
  }


  updateValues(event) {
    let homePrice;
    if (event) {
      homePrice = event.target.value;
    } else {
      homePrice = this.state.homePrice;
    }
    let downPayment = (homePrice * 20) / 100;
    this.setState({
      homePrice: homePrice,
      downPayment: Math.floor((homePrice * 20) / 100),
      max: this.calculateMaxDownPayment(homePrice),
      propertyTax: this.calculatePropertyTax(homePrice)
    })
    this.setState({
      principalAndInterest: this.calculateMonthlyInterest() + this.calculatePrincipal(),
      monthlyInterest: this.calculateMonthlyInterest(),
      principal: this.calculatePrincipal()
    })
    this.setState({
      monthlyPayment: this.calculateMonthlyPayment(),
      propertyTaxPercentage: this.calculatePercentage(this.state.propertyTax, this.state.monthlyPayment),
      homeInsurancePercentage: this.calculatePercentage(this.state.homeInsurance, this.state.monthlyPayment),
      principalPercentage: this.calculatePercentage(this.state.principalAndInterest, this.state.monthlyPayment),
      mortgageETCPercentage: this.calculatePercentage(this.state.mortgageETC, this.state.monthlyPayment)
    })

    if (Number(homePrice) === 0) {
      this.setState({
        principalAndInterest: 0,
        propertyTaxes: 0,
        mortgageETC: 0
      })
      this.setState({
        monthlyPayment: this.state.homeInsurance,
        propertyTaxPercentage: 0,
        homeInsurancePercentage: 100,
        principalPercentage: 0,
        mortgageETCPercentage: 0
      })
    }
  }


  updateMonthlyPayment(event) {
    const downPayment = event.target.value;
    this.setState({
      downPayment: downPayment,
    })
    this.setState({
      principalAndInterest: this.calculateMonthlyInterest() + this.calculatePrincipal(),
      monthlyPayment: this.calculateMonthlyPayment(this.state.homePrice),
      percent: this.calculatePercentage(downPayment, this.state.homePrice),
      principalPercentage: this.calculatePercentage(this.state.principalAndInterest, this.state.monthlyPayment),
      propertyTaxPercentage: this.calculatePercentage(this.state.propertyTax, this.state.monthlyPayment),
      homeInsurancePercentage: this.calculatePercentage(this.state.homeInsurance, this.state.monthlyPayment),
      mortgageETC: this.calculateETC(),
    })
    this.setState({
      mortgageETCPercentage: this.calculatePercentage(this.state.mortgageETC, this.state.monthlyPayment),
      max: this.state.homePrice * .30
    })
  }

  calculateMonthlyPayment(homePrice = this.state.homePrice) {
    const monthlyPayment = this.state.principalAndInterest + this.state.propertyTax + this.state.homeInsurance;
    return monthlyPayment;
  }

  calculatePrincipal() {
    const principal = (this.state.homePrice - this.state.downPayment) / (this.state.loanType * 12);
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
    let unaccounted = this.state.monthlyPayment - this.state.principalAndInterest - this.state.propertyTax - this.state.homeInsurance;
    if (unaccounted < 0) {
      return 0;
    }
    return unaccounted;
  }

  recalculateBasedOnInterest(event) {
    const interestRate = event.target.value;
    this.setState({
      interestRate: Number(interestRate),
    })
    this.updateValues();
  }

  changeColor(event) {
    const target = event.target;
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
      <AffordabiltyContainer className="App">
        <Padding className="padding">
          <Header className="header">
            <AffordabilityText className="text">
              Affordability
            </AffordabilityText>
          </Header>
        </Padding>
        <PaddingTwo className="padding">
            <TextContainerBold className="text">
              Calculate your monthly mortgage payments
            </TextContainerBold>
            <TextContainer className="text">
                Your est. payments: $
              {formatPriceStr(Math.floor(this.state.monthlyPayment))}
              /month
            </TextContainer>
        </PaddingTwo>
        <TextContainer className="text">
          <FlexContainer className="flex">
            <GridContainer className="grid">
              <HomePrice homePrice={this.state.homePrice} updateValues={this.updateValues} changeColor={this.changeColor} />
              <DownPayment  downPayment={this.state.downPayment} max={this.state.max} updateMonthlyPayment={this.updateMonthlyPayment} changeColor={this.changeColor} percent={this.state.percent}/>
              <InterestRate interestRate={this.state.interestRate} changeColor={this.changeColor} recalculateBasedOnInterest={this.recalculateBasedOnInterest}/>
              <LoanType />
            </GridContainer>
          </FlexContainer>
        </TextContainer>
        <GraphContainer className="GraphContainer">
          <DonutGraph  monthlyPayment={this.state.monthlyPayment} principalPercentage={this.state.principalPercentage}  propertyTaxPercentage={this.state.propertyTaxPercentage} homeInsurancePercentage={this.state.homeInsurancePercentage} mortgageETCPercentage={this.state.mortgageETCPercentage}/>
          <AffordabilityTable principal={this.state.principalAndInterest} propertyTax={this.state.propertyTax} homeInsurance={this.state.homeInsurance} mortgageETC={this.state.mortgageETC} />
        </GraphContainer>
      </AffordabiltyContainer>
    );
  }
}

export default App;
