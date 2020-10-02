import React from 'react';
import Styles from './Styled.jsx';

const InterestRate = ({interestRate, changeColor, recalculateBasedOnInterest, updateInterestRate}) => (
  <Styles.GridCellBox width="1,1,1,0.33" className="interestRate">
    <Styles.ControlsContainer  className="interestRateController">
      <Styles.ControlInput className="ControlInput">
        <Styles.TextContainerBold className="text">
          <label htmlFor="price"> Interest Rate </label>
        </Styles.TextContainerBold>
        < Styles.InterestRateInput className="price" width="112px" id="interest" name="price" min="0.00" max="6.50" value={`${Number(interestRate).toFixed(2)}%`} onChange={updateInterestRate} onClick={changeColor}/>
      </Styles.ControlInput>
      <Styles.SlideContainer className="Slider">
          <Styles.TrackSlider  type="range" min="0"  max="6.50"  step="0.10"value={interestRate} onChange={recalculateBasedOnInterest} />
          <Styles.ThumbSlider type="range" min="0"  max="6.50"  step="0.10"value={interestRate} onChange={recalculateBasedOnInterest} />
        </Styles.SlideContainer>
    </Styles.ControlsContainer>
  </Styles.GridCellBox>
);

export default InterestRate;


