import React from 'react';
import Styles from './Styled.jsx';

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
    const { value } = this.state;
    return (
      <Styles.GridCellBox width="1,1,1,0.33" className="homePrice">
        <Styles.ControlsContainer  className="homePriceController">
          <Styles.ControlInput className="ControlInput">
            <Styles.TextContainerBold className="text">
              <label htmlFor="price"> Home Price </label>
            </Styles.TextContainerBold>
            <Styles.Input className="price" width="112px" type="number" id="price" placeholder={this.props.homePrice} name="price" min="0" max="3000000" value={`${value}`} onChange={this.onChange} onClick={this.handleClick} />
          </Styles.ControlInput>
          <Styles.SlideContainer className="slider">
            <Styles.slider defaultValue={this.props.homePrice} type="range" min="0" max="3000000" onChange={this.onChange} />
          </Styles.SlideContainer>
        </Styles.ControlsContainer>
      </Styles.GridCellBox>
    );
  }
}

export default HomePrice;
