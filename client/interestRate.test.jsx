import React from 'react';
import { shallow, mount } from 'enzyme';
import InterestRate from './InterestRate.jsx';


describe('InterestRate Component', () => {

  it('should render the interest rate', () => {
    const inputs = {interestRate: 3.24232}
    let wrapper = shallow(<InterestRate interestRate={inputs.interestRate} recalculateBasedOnInterest={() => {}} updateInterestRate={() => {}} />);
    expect(wrapper.html().includes('3.24')).toBe(true);
  })

})