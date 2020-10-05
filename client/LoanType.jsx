import React from 'react';
import Styles from './Styled.jsx';

const LoanType = ({ loanType, loanTypeString, changeLoan, changeColor }) => (
  <Styles.GridCellBox width="1,1,1,0.33" className="homePrice">
    <Styles.ControlsContainer  className="homePriceController">
      <Styles.ControlInput className="ControlInput">
        <Styles.TextContainerBold className="text">
          Loan Type
        <Styles.SelectContainer className="selectContainer">
          <Styles.Selection className="select" value={loanTypeString} onChange={changeLoan} onClick={changeColor}>
            <option data-id="0" value="30-year fixed" >30-year fixed</option>
            <option data-id="1" value="20-year fixed">20-year fixed</option>
            <option data-id="2" value="15-year fixed">15-year fixed</option>
            <option data-id="3" value="10-year fixed">10-year fixed</option>
            <option data-id="4" value="FHA 30-year fixed">FHA 30-year fixed</option>
            <option data-id="5" value="FHA 15-year fixed">FHA 15-year fixed</option>
            <option data-id="6" value="VA 30-year fixed">VA 30-year fixed</option>
            <option data-id="7" value="VA 15-year fixed">VA 15-year fixed</option>
          </Styles.Selection>
        </Styles.SelectContainer>
        </Styles.TextContainerBold>
      </Styles.ControlInput>
    </Styles.ControlsContainer>
  </Styles.GridCellBox>
);

export default LoanType;