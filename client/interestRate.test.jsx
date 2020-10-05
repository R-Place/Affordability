import React from 'react';
import { shallow, mount } from 'enzyme';
import InterestRate from './InterestRate.jsx';
import App from './App.jsx';
import Styled from './Styled.jsx';

const { ThumbSlider } = Styled;

describe('InterestRate Component', () => {

  it('should render the interest rate', () => {
    const inputs = {interestRate: 3.24232}
    let wrapper = shallow(<InterestRate interestRate={inputs.interestRate} recalculateBasedOnInterest={App.prototype.recalculateBasedOnInterest} updateInterestRate={App.prototype.updateInterestRate} />);
    expect(wrapper.html().includes('3.24')).toBe(true);
  })

})