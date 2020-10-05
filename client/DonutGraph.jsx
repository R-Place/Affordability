import React from 'react';
import Styled from './Styled.jsx';
import helpers from './helpers.js';

const { DonutChartContainer, InnerChartContainer , DonutGraphContainer, SVGViewBox, DonutLabelContainer,  DonutLabel,DonutLabelAmount, DonutLabelUnit} = Styled;

const DonutGraph = ({ monthlyPayment, principalAndInterestPercentage, homeInsurancePercentage, propertyTaxPercentage, mortgageETCPercentage }) => {
  // const principalAndInterestPercentage = helpers.calculatePercentage(principalAndInterest, monthlyPayment);
  // const homeInsurancePercentage = helpers.calculatePercentage(homeInsurance, monthlyPayment);
  // const propertyTaxPercentage = helpers.calculatePercentage(propertyTax, monthlyPayment);
  // const mortgageETCPercentage = helpers.calculatePercentage(mortgageETC, monthlyPayment);
  return (
    <DonutChartContainer className="DonutChartContainer">
    <InnerChartContainer className="InnerContainer">
      <DonutGraphContainer className="DonutGraph">
      <SVGViewBox viewBox="0 0 40 40">
        <circle className="donut-ring" cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="rgb(5, 34, 134)" strokeWidth="3.8"></circle>
        <circle className="principal" cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="rgb(5, 34, 134)" strokeWidth="3.8"strokeDasharray={principalAndInterestPercentage + " " + (100 - principalAndInterestPercentage)} strokeDashoffset="25" ></circle>
        <circle className="propertyTaxes" cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="rgb(0, 173, 187)" strokeWidth="3.8" strokeDasharray={propertyTaxPercentage + " " + (100 - propertyTaxPercentage)} strokeDashoffset={100 - principalAndInterestPercentage + 25} ></circle>
        <circle className="HomeInsurance" cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="rgb(194, 213, 0)" strokeWidth="3.8" strokeDasharray={homeInsurancePercentage + " " + (100 - homeInsurancePercentage)} strokeDashoffset={100 - (principalAndInterestPercentage + propertyTaxPercentage) + 25} ></circle>
        <circle className="MortgageETC" cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="rgb(206,182,255)" strokeWidth="3.8" strokeDasharray={mortgageETCPercentage + " " + (100 - mortgageETCPercentage)} strokeDashoffset={100 - (principalAndInterestPercentage + propertyTaxPercentage + homeInsurancePercentage) + 25} ></circle>
        </SVGViewBox>
      </DonutGraphContainer>
      <DonutLabelContainer>
        <DonutLabel>
          <DonutLabelAmount>${monthlyPayment.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</DonutLabelAmount>
          <DonutLabelUnit>/month</DonutLabelUnit>
        </DonutLabel>
      </DonutLabelContainer>
    </InnerChartContainer>
  </DonutChartContainer>
)
};


export default DonutGraph;