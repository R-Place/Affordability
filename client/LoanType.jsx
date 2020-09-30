import React from 'react';
import Styles from './Styled.jsx';

class LoanType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: '30-year fixed',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({
      option: event.target.value
    })
  }

  render() {
    return (
      <Styles.GridCellBox width="1,1,1,0.33" className="homePrice">
        <Styles.ControlsContainer  className="homePriceController">
          <Styles.ControlInput className="ControlInput">
            <Styles.TextContainerBold className="text"> Loan Type
              {/* <label htmlFor="select"> Loan Type </label> */}

            <Styles.SelectContainer className="selectContainer">
              <Styles.Selection className="select" value={this.state.option} onChange={this.onChange}>
                <option data-id="0" value="30-year fixed" >30-year fixed</option>
                <option data-id="1" value="20-year fixed">20-year fixed</option>
                <option data-id="2" value="15-year fixed">15-year fixed</option>
                <option data-id="3" value="10-year fixed">10-year fixed</option>
                <option data-id="4" value="FHA 30-year fixed">FHA 30-year fixed</option>
                <option data-id="5" value="FHA 15-year fixed">FHA 15-year fixed</option>
                <option data-id="6" value="VA 30-year fixed">VA 30-year fixed</option>
                <option data-id="7" value="VA 15-year fixed">vA 15-year fixed</option>
              </Styles.Selection>
            </Styles.SelectContainer>
            </Styles.TextContainerBold>
          </Styles.ControlInput>
        </Styles.ControlsContainer>
      </Styles.GridCellBox>
    );
  }
}

export default LoanType;