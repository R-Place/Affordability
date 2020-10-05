import React from 'react';
import Styled from './Styled.jsx';

const { GridCellBox, ControlsContainer, ControlInput, TextContainerBold, InterestRateInput, SlideContainer, TrackSlider, ThumbSlider  } = Styled;

const InterestRate = ({interestRate, changeColor, recalculateBasedOnInterest, updateInterestRate}) => (
  <GridCellBox width="1,1,1,0.33" className="interestRate">
    <ControlsContainer  className="interestRateController">
      <ControlInput className="ControlInput">
        <TextContainerBold className="text">
          <label htmlFor="price"> Interest Rate </label>
        </TextContainerBold>
        < InterestRateInput className="price" width="112px" id="interest" name="price" min="0.00" max="6.50" value={`${Number(interestRate).toFixed(2)}%`} onChange={updateInterestRate} onClick={changeColor}/>
      </ControlInput>
      <SlideContainer className="Slider">
          <TrackSlider  type="range" min="0"  max="6.50"  step="0.10"value={interestRate} onChange={recalculateBasedOnInterest} />
          <ThumbSlider type="range" min="0"  max="6.50"  step="0.10"value={interestRate} onChange={recalculateBasedOnInterest} />
        </SlideContainer>
    </ControlsContainer>
  </GridCellBox>
);

export default InterestRate;


