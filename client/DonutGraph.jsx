import React from 'react';
import Styles from './Styled.jsx';

class DonutGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { principalPercentage, homeInsurancePercentage, propertyTaxPercentage, mortgageETCPercentage } = this.props;
    return (
      <Styles.DonutChartContainer className="DonutChartContainer">
        <Styles.InnerChartContainer className="InnerContainer">
          <Styles.DonutGraphContainer className="DonutGraph">
          <Styles.SVGViewBox viewBox="0 0 40 40">
            <circle className="principal" cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="rgb(5, 34, 134)" strokeWidth="3.8"strokeDasharray={principalPercentage + " " + (100 - principalPercentage)} strokeDashoffset="25" ></circle>
            <circle className="propertyTaxes" cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="rgb(0, 173, 187)" strokeWidth="3.8" strokeDasharray={propertyTaxPercentage + " " + (100 - propertyTaxPercentage)} strokeDashoffset={100 - principalPercentage + 25} ></circle>
            <circle className="HomeInsurance" cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="rgb(194, 213, 0)" strokeWidth="3.8" strokeDasharray={homeInsurancePercentage + " " + (100 - homeInsurancePercentage)} strokeDashoffset={100 - (principalPercentage + propertyTaxPercentage) + 25} ></circle>
            <circle className="MortgageETC" cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="rgb(206,182,255)" strokeWidth="3.8" strokeDasharray={mortgageETCPercentage + " " + (100 - mortgageETCPercentage)} strokeDashoffset={100 - (principalPercentage + propertyTaxPercentage + homeInsurancePercentage) + 25} ></circle>
            </Styles.SVGViewBox>
          </Styles.DonutGraphContainer>
          <Styles.DonutLabelContainer>
            <Styles.DonutLabel>
              <Styles.DonutLabelAmount>${Math.floor(this.props.monthlyPayment).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Styles.DonutLabelAmount>
              <Styles.DonutLabelUnit>/month</Styles.DonutLabelUnit>
            </Styles.DonutLabel>
          </Styles.DonutLabelContainer>
        </Styles.InnerChartContainer>
      </Styles.DonutChartContainer>
    );
  }
}

export default DonutGraph;