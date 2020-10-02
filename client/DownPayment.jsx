import React from 'react';
import Styles from './Styled.jsx';
import helpers from './helpers.js';

const DownPayment = ({ homePrice, updateMonthlyPayment, max, downPayment, changeColor, updateDownPayment, updateDownPaymentPercent} ) => (
  <Styles.GridCellBox width="1,1,1,0.33" className="downPayment">
    <Styles.ControlsContainer className="downPaymentController">
      <Styles.ControlInput className="controlInput">
        <Styles.TextContainerBold className="text">
          <label htmlFor="downPayment">Down Payment </label>
        </Styles.TextContainerBold>
          <Styles.DownPaymentWrapper>
            <Styles.DownPayment className="price" width="112px" id="downPayment" name="price" min="0" max={max} value={`$${helpers.formatPriceStr(downPayment)}`}  onChange={updateDownPayment} onClick={changeColor}/>
            <Styles.Percentage className="price" id="downPaymentPercentage" max="30" value={`${Math.trunc((downPayment / homePrice) * 100 )}%`} onChange={updateDownPaymentPercent} onClick={changeColor}/>
          </Styles.DownPaymentWrapper>
      </Styles.ControlInput>
        <Styles.SlideContainer className="Slider">
          <Styles.TrackSlider  type="range" min="0" className="price" max={max} value={downPayment} onChange={updateMonthlyPayment} />
          <Styles.ThumbSlider type="range" min="0" className="price" max={max} value={downPayment} onChange={updateMonthlyPayment} />
        </Styles.SlideContainer>
    </Styles.ControlsContainer>
  </Styles.GridCellBox>
);

export default DownPayment;
