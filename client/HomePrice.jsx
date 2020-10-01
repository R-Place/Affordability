import React from 'react';
import Styled from './Styled.jsx';
import helpers from './helpers.js';

const { GridCellBox, ControlsContainer, ControlInput, TextContainerBold, Input, SlideContainer, Slider } = Styled;

const HomePrice = ({ colorSliderTrack, homePrice, changeColor, updateValues }) => (
  <GridCellBox width="1,1,1,0.33" className="homePrice">
    <ControlsContainer  className="homePriceController">
      <ControlInput className="ControlInput">
        <TextContainerBold className="text">
          <label htmlFor="price"> Home Price </label>
        </TextContainerBold>
        <Input className="price" width="112px" id="price" placeholder={homePrice} name="price" min="0" max="3000000" value={`$${helpers.formatPriceStr(homePrice)}`} onChange={updateValues} onClick={changeColor} />
      </ControlInput>
      <SlideContainer className="Slider">
        <Slider value={homePrice} type="range" min="0" max="3000000" onChange={updateValues} />
      </SlideContainer>
    </ControlsContainer>
  </GridCellBox>
);

export default HomePrice;
