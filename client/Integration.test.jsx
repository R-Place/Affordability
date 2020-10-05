import React from 'react';
import {mount} from 'enzyme';
import DownPayment from './DownPayment.jsx';
import InterestRate from './InterestRate.jsx';
import App from './App.jsx';
import helpers from './helpers.js';
import { ThumbSlider } from './Styled.jsx'


describe('DownPayment Component', () => {

  it('should move thumb when user clicks and drags', () => {
    let wrapper = mount(<App />);
    App.prototype.componentDidMount = () => {};

    wrapper.setState({homePrice: 1000, max: 300})

    const initialPercent = wrapper.state('percent');

    const downPaymentWrapper = wrapper.find(DownPayment);
    const thumbSliderWrapper = downPaymentWrapper.find(ThumbSlider);

    thumbSliderWrapper.simulate('change', { target: { value: 40}});

    const newPercent = wrapper.state('percent');

    expect(initialPercent === newPercent).toBe(false);
  })
})

describe('InterestRate Component', () => {

  it('should update interest rate when slider moves', () => {
    let wrapper = mount(<App />);

    wrapper.setState({homePrice: 1000});

    const initialRate = wrapper.state('interestRate');

    const interestRateWrapper = wrapper.find(InterestRate);

    const interestRateSlider = interestRateWrapper.find(ThumbSlider);
    interestRateSlider.simulate('change', {target: { value: 7.489}});

    const newRate = wrapper.state('interestRate');

    expect(interestRateWrapper.html().includes(initialRate)).toBe(false);
    expect(interestRateWrapper.html().includes(newRate)).toBe(true);
  })
})