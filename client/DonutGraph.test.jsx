import React from 'react';
import { shallow } from 'enzyme';
import DonutGraph from './DonutGraph.jsx';

describe('DonutGraph', () => {

  it('should render the monthly payment', () => {
    let wrapper = shallow(<DonutGraph monthlyPayment={100}/>);
    expect(wrapper.text().includes('$100/month')).toBe(true);

    wrapper = shallow(<DonutGraph monthlyPayment={1234567}/>);
    expect(wrapper.text().includes('$1,234,567/month')).toBe(true);
  });

  it('should render correct portions of graph', () => {
    const inputs = {principalAndInterest: 15, homeInsurance: 20, propertyTax: 25, mortgageETC: 40}
    let wrapper = shallow(<DonutGraph
      monthlyPayment={200}
      principalAndInterestPercentage={inputs.principalAndInterest}
      homeInsurancePercentage={inputs.homeInsurance}
      propertyTaxPercentage={inputs.propertyTax}
      mortgageETCPercentage={inputs.mortgageETC}
    />);
    expect(wrapper.html().includes('stroke-dasharray="15 85"')).toBe(true);
    expect(wrapper.html().includes('stroke-dasharray="20 80"')).toBe(true);
    expect(wrapper.html().includes('stroke-dasharray="25 75"')).toBe(true);
    expect(wrapper.html().includes('stroke-dasharray="40 60"')).toBe(true);
  })

})