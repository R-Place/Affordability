import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Styles from '../client/Styled.jsx';
import App from '../client/App.jsx';


describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<App />).contains(<Styles.AffordabilityStyledDiv>
      Affordability
    </Styles.AffordabilityStyledDiv>)).toBe(true);
  });

  it('should be selectable by class "App"', function() {
    expect(shallow(<App />).is('.App')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<App />).find('.App').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<App />).text()).toEqual('Affordability Calculate your monthly mortgage payments Your est. payments: $/month Home Price Down Payment Interest Rate ');
  });
});