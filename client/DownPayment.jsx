import React from 'react';
import Styled from './Styled.jsx';
import helpers from './helpers.js';

const { GridCellBox, ControlsContainer, TextContainerBold, DownPaymentWrapper, DownPayments , Percentage, SlideContainer, TrackSlider, ThumbSlider, ControlInput } = Styled;

const DownPayment = ({ homePrice, updateMonthlyPayment, max, downPayment, changeColor, updateDownPayment, updateDownPaymentPercent} ) => (

  <GridCellBox width="1,1,1,0.33" className="downPayment">
    <ControlsContainer className="downPaymentController">
      <ControlInput className="controlInput">
        <TextContainerBold className="text">
          <label htmlFor="downPayment">Down Payment </label>
        </TextContainerBold>
          <DownPaymentWrapper>
            <DownPayments className="price" width="112px" id="downPayment" name="price" min="0" max={max} value={`$${helpers.formatPriceStr(downPayment)}`}  onChange={updateDownPayment} onClick={changeColor}/>
            <Percentage className="price" id="downPaymentPercentage" max="30" value={`${Math.trunc((downPayment / homePrice) * 100 )}%`} onChange={updateDownPaymentPercent} onClick={changeColor}/>
          </DownPaymentWrapper>
      </ControlInput>
        <SlideContainer className="Slider">
          <TrackSlider  className="DownPaymentSliderTrack" type="range" min="0" max={max} value={downPayment} onChange={updateMonthlyPayment} />
          <ThumbSlider  className="DownPaymentSliderThumb" type="range" min="0"  max={max} value={downPayment} onChange={updateMonthlyPayment} />
        </SlideContainer>
    </ControlsContainer>
  </GridCellBox>
);

export default DownPayment;
