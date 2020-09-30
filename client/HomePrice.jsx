import React from 'react';
import Styled from './Styled.jsx';
import formatPriceStr from './helpers.js';

const { GridCellBox, ControlsContainer, ControlInput, TextContainerBold, Input, SlideContainer, Slider } = Styled;

class HomePrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onChange(event) {
    this.setState({
      value: event.target.value,
    });
    this.props.updateValues(event.target.value);
  }

  handleClick(event) {
    var target = event.target;
    this.props.changeColor(target);
  }

  render() {
    const { homePrice } = this.props;
    return (
      <GridCellBox width="1,1,1,0.33" className="homePrice">
        <ControlsContainer  className="homePriceController">
          <ControlInput className="ControlInput">
            <TextContainerBold className="text">
              <label htmlFor="price"> Home Price </label>
            </TextContainerBold>
            <Input className="price" width="112px" id="price" placeholder={homePrice} name="price" min="0" max="3000000" value={`$${formatPriceStr(homePrice)}`} onChange={this.onChange} onClick={this.handleClick} />
          </ControlInput>
          <SlideContainer className="Slider">
            <Slider defaultValue={homePrice} type="range" min="0" max="3000000" onChange={this.onChange} />
          </SlideContainer>
        </ControlsContainer>
      </GridCellBox>
    );
  }
}

export default HomePrice;
