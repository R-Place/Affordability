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
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateValues = this.updateValues.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.changeLoan = this.changeLoan.bind(this);
    this.updateMonthlyPayment = this.updateMonthlyPayment.bind(this);
    this.recalculateBasedOnInterest = this.recalculateBasedOnInterest.bind(this);
    this.updateHomePrice = this.updateHomePrice.bind(this);
    this.updateDownPayment = this.updateDownPayment.bind(this);
    this.updateInterestRate = this.updateInterestRate.bind(this);
    this.updateDownPaymentPercent = this.updateDownPaymentPercent.bind(this);
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://localhost:3003/api/affordability',
    })
    .then((response) => {
      let randomIndex = Math.trunc(Math.random() * 100);
      let homePrice = response.data[randomIndex].price;
      this.setState({
        homePrice: homePrice,
      })
      this.updateValues();
    })
    .catch((error) => {
      null;
    });
  }

  updateValues(event) {
    let homePrice;
    if (event) {
      homePrice = event.target.value;
    } else {
      homePrice = this.state.homePrice;
    }
    this.setState({
      homePrice: homePrice,
      max: this.calculateMaxDownPayment(homePrice),
    })
  }

  updateMonthlyPayment(event) {
    let downPayment;
    if (event) {
      downPayment = event.target.value;
    } else {
      downPayment = helpers.getDownPayment(this.state.homePrice, this.state.percent);
    }
    this.setState({
      percent: helpers.calculatePercentage(downPayment, this.state.homePrice),
      max: this.state.homePrice * .30
    })
  }


  calculateMaxDownPayment(homePrice) {
    var max = homePrice * .30;
    return Math.trunc(max);
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

  updateHomePrice(event) {
    event.preventDefault();
    const newValue = Number(event.target.value.replace(/[^\d.]/g, ''))
    this.setState({
      homePrice: newValue
    });
  }

  updateDownPayment(event) {
    event.preventDefault();
    const newValue = Number(event.target.value.replace(/[^\d.]/g, ''))

    this.setState({
      percent: helpers.calculatePercentage(newValue, this.state.homePrice)
    });
  }

  updateInterestRate(event) {
    event.preventDefault();
    const newValue = Number(event.target.value.replace(/[^\d.]/g, ''))

    this.setState({
      interestRate: newValue
    });
  }

  updateDownPaymentPercent(event) {
    event.preventDefault();
    const newValue = Number(event.target.value.replace(/[^\d.]/g, ''))

    this.setState({
      percent: newValue
    });
  }

  render() {
    const {homePrice, percent, interestRate, loanType} = this.state;
    const downPayment = helpers.getDownPayment(homePrice, percent);
    const principalAndInterest = helpers.getPrincipalAndInterest(homePrice, downPayment, loanType, interestRate);
    const propertyTax = helpers.getPropertyTax(homePrice);
    const mortgageETC = helpers.getMortgageInsETC(homePrice, downPayment);
    const HOME_INSURANCE = 75;
    const monthlyPayment = helpers.getMonthlyPayment(homePrice, downPayment, loanType, interestRate, HOME_INSURANCE);
    const principalAndInterestPercentage = helpers.calculatePercentage(principalAndInterest, monthlyPayment);
    const homeInsurancePercentage = helpers.calculatePercentage(HOME_INSURANCE, monthlyPayment);
    const propertyTaxPercentage = helpers.calculatePercentage(propertyTax, monthlyPayment);
    const mortgageETCPercentage = helpers.calculatePercentage(mortgageETC, monthlyPayment);

    return (
      <AffordabiltyContainer className="App">
        <Padding className="padding">
          <Header>
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
              {helpers.formatPriceStr(Math.trunc(monthlyPayment))}
              /month
            </TextContainer>
        </PaddingTwo>
        <TextContainer className="text">
          <FlexContainer className="flex">
            <GridContainer className="grid">
              <HomePrice homePrice={homePrice} updateValues={this.updateValues} changeColor={this.changeColor} updateHomePrice={this.updateHomePrice}/>
              <DownPayment  updateDownPaymentPercent={this.updateDownPaymentPercent} updateDownPayment={this.updateDownPayment} downPayment={downPayment} max={this.state.max} updateMonthlyPayment={this.updateMonthlyPayment} changeColor={this.changeColor} percent={percent} homePrice={homePrice}/>
              <InterestRate interestRate={interestRate} changeColor={this.changeColor} recalculateBasedOnInterest={this.recalculateBasedOnInterest} updateInterestRate={this.updateInterestRate} />
              <LoanType changeLoan={this.changeLoan} loanType={loanType} loanTypeString={this.state.loanTypeString} changeColor={this.changeColor} />
            </GridContainer>
          </FlexContainer>
        </TextContainer>
        <GraphContainer className="GraphContainer">
          <DonutGraph  monthlyPayment={monthlyPayment} principalAndInterestPercentage={principalAndInterestPercentage}  propertyTaxPercentage={propertyTaxPercentage} homeInsurancePercentage={homeInsurancePercentage} mortgageETCPercentage={mortgageETCPercentage}/>
          <AffordabilityTable principal={principalAndInterest} propertyTax={propertyTax} homeInsurance={HOME_INSURANCE} mortgageETC={mortgageETC} />
        </GraphContainer>
      </AffordabiltyContainer>
    );
  }
}

export default App;
