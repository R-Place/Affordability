import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Styled from '../client/Styled.jsx';
import App from '../client/App.jsx';
import DownPayment from '../client/DownPayment.jsx';
import HomePrice from '../client/HomePrice.jsx';
import InterestRate from '../client/InterestRate.jsx';
import LoanType from '../client/LoanType.jsx';
import AffordabilityTable from '../client/AffordabilityTable.jsx';
import DonutGraph from '../client/DonutGraph.jsx';


const { AffordabiltyContainer, Padding, Header, AffordabilityText, PaddingTwo, TextContainerBold, TextContainer, FlexContainer, GridContainer, GraphContainer } = Styled;

describe('Affordability', function() {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  it('should be selectable by class "App"', function() {
    expect(shallow(<App />).is('.App')).toBe(true);
  });

  it('should render the DonutGraph Component', () => {
    expect(wrapper.containsMatchingElement(<DonutGraph />)).toEqual(true);
  });

  it('should render the AffordabilityTable Component', () => {
    expect(wrapper.containsMatchingElement(<AffordabilityTable />)).toEqual(true);
  });

  it('should render the DownPayment Component', () => {
    expect(wrapper.containsMatchingElement(<DownPayment />)).toEqual(true);
  });

  it('should render the HomePrice Component', () => {
    expect(wrapper.containsMatchingElement(<HomePrice />)).toEqual(true);
  });

  it('should render the InterestRate Component', () => {
    expect(wrapper.containsMatchingElement(<InterestRate />)).toEqual(true);
  });

  it('should render the LoanType Component', () => {
    expect(wrapper.containsMatchingElement(<LoanType/>)).toEqual(true);
  });

});