import React from 'react';
import axios from 'axios';
import HomePrice from './HomePrice.jsx';
import DownPayment from './DownPayment.jsx';
import InterestRate from './InterestRate.jsx';
import LoanType from './LoanType.jsx';
import DonutGraph from './DonutGraph.jsx';
import AffordabilityTable from './AffordabilityTable.jsx';
import Styled from './Styled.jsx';
import helpers from './helpers.js';

const { AffordabiltyContainer, Padding, Header, AffordabilityText, PaddingTwo, TextContainerBold, TextContainer, FlexContainer, GridContainer, GraphContainer, TrackSlider, ThumbSlider } = Styled;
    // AffordabiltyContainer, Padding, Header, AffordabilityText, PaddingTwo, TextContainerBold, TextContainer, FlexContainer, GridContainer

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homePrice: 0,
      percent: 20,
      loanType: 30,
      interestRate: 2.99,
      max: null,
      previouslyClicked: null,
      loanTypeString: '30-year fixed'
    };
    this.getHomePrice = this.getHomePrice.bind(this);
    this.updateValues = this.updateValues.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.changeLoan = this.changeLoan.bind(this);
    this.updateMonthlyPayment = this.updateMonthlyPayment.bind(this);
    this.recalculateBasedOnInterest = this.recalculateBasedOnInterest.bind(this);
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
    })
  }

  updateMonthlyPayment(event) {
    let downPayment;
    if (event) {
      downPayment = event.target.value;
      this.setState({
        downPayment: downPayment,
      })
    } else {
      downPayment = this.state.downPayment;
    }

    this.setState({
      percent: helpers.calculatePercentage(downPayment, this.state.homePrice),
      max: this.state.homePrice * .30
    })
  }


  calculateMaxDownPayment(homePrice) {
    var max = homePrice * .30;
    return max;
  }

  recalculateBasedOnInterest(event) {
    const interestRate = event.target.value;
    this.setState({
      interestRate: Number(interestRate),
    })
    this.updateMonthlyPayment();
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


  changeLoan(event) {
    const loan = event.target.value;
    const newState = {}

    newState.loanTypeString = loan;

    let loanType;
    if (loan.includes("30")) {
      loanType = 30;
    } else if (loan.includes("20")) {
      loanType = 20;
    } else if (loan.includes("15")) {
      loanType = 15;
    } else if (loan.includes("10")) {
      loanType = 10;
    }
    newState.loanType= loanType;

    if (loan.includes("FHA")) {
      newState.downPayment = this.state.homePrice * (3.50 / 100);
    } else if (loan.includes("VA")) {
      newState.downPayment = 0;
    }
    this.setState(newState, this.updateMonthlyPayment)
  }

  render() {
    const {homePrice, percent, interestRate, loanType} = this.state;
    const downPayment = helpers.getDownPayment(homePrice, percent);
    const principalAndInterest = helpers.getPrincipalAndInterest(homePrice, downPayment, loanType, interestRate);
    const propertyTax = helpers.getPropertyTax(homePrice);
    const mortgageETC = helpers.getMortgageInsETC(homePrice, downPayment);
    const HOME_INSURANCE = 75;
    const monthlyPayment = helpers.getMonthlyPayment(homePrice, downPayment, loanType, interestRate, HOME_INSURANCE);
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
              {helpers.formatPriceStr(Math.floor(monthlyPayment))}
              /month
            </TextContainer>
        </PaddingTwo>
        <TextContainer className="text">
          <FlexContainer className="flex">
            <GridContainer className="grid">
              <HomePrice homePrice={homePrice} updateValues={this.updateValues} changeColor={this.changeColor} />
              <DownPayment  downPayment={downPayment} max={this.state.max} updateMonthlyPayment={this.updateMonthlyPayment} changeColor={this.changeColor} percent={percent} homePrice={homePrice}/>
              <InterestRate interestRate={interestRate} changeColor={this.changeColor} recalculateBasedOnInterest={this.recalculateBasedOnInterest}/>
              <LoanType changeLoan={this.changeLoan} loanType={loanType} loanTypeString={this.state.loanTypeString}/>
            </GridContainer>
          </FlexContainer>
        </TextContainer>
        <GraphContainer className="GraphContainer">
          <DonutGraph  monthlyPayment={monthlyPayment} principalAndInterest={principalAndInterest}  propertyTax={propertyTax} homeInsurance={HOME_INSURANCE} mortgageETC={mortgageETC}/>
          <AffordabilityTable principal={principalAndInterest} propertyTax={propertyTax} homeInsurance={HOME_INSURANCE} mortgageETC={mortgageETC} />
        </GraphContainer>
      </AffordabiltyContainer>
    );
  }
}

export default App;
