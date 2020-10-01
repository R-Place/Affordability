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

const { AffordabiltyContainer, Padding, Header, AffordabilityText, PaddingTwo, TextContainerBold, TextContainer, FlexContainer, GridContainer, GraphContainer } = Styled;
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
    this.calculateMonthlyPayment = this.calculateMonthlyPayment.bind(this);
    this.updateValues = this.updateValues.bind(this);
    this.updateMonthlyPayment = this.updateMonthlyPayment.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.calculatePropertyTax = this.calculatePropertyTax.bind(this);
    this.calculatePrincipal = this.calculatePrincipal.bind(this);
    this.calculateETC = this.calculateETC.bind(this);
    this.recalculateBasedOnInterest = this.recalculateBasedOnInterest.bind(this);
    this.calculateMonthlyInterest = this.calculateMonthlyInterest.bind(this);
    this.changeLoan = this.changeLoan.bind(this);
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
      principalAndInterest: this.calculateMonthlyInterest() + this.calculatePrincipal()
    })

    this.setState({
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
    // this.setState({
    //   loanTypeString: loan
    // })

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

    // this.setState({
    //   loanType: loanType,
    // })

    if (loan.includes("FHA")) {
      newState.downPayment = this.state.homePrice * (3.50 / 100);
      // this.setState({
      //   downPayment: this.state.homePrice * (3.50 / 100)
      // })

    } else if (loan.includes("VA")) {
      newState.downPayment = 0;
      // this.setState({
      //   downPayment: 0
      // })
    }
    this.setState(newState, this.updateMonthlyPayment)
    // this.updateMonthlyPayment();
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
