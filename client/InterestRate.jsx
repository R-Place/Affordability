import React from 'react';
import Styles from './Styled.jsx';

class InterestRate extends React.Component {
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
  }

  handleClick(event) {
    var target = event.target;
    this.props.changeColor(target);
  }

  render() {
    const { value } = this.state;
    return (
      <Styles.GridCellBox width="1,1,1,0.33" className="interestRate">
        <Styles.ControlsContainer  className="interestRateController">
          <Styles.ControlInput className="ControlInput">
            <Styles.TextContainerBold className="text">
              <label htmlFor="price"> Interest Rate </label>
            </Styles.TextContainerBold>
            < Styles.InterestRateInput className="price" width="112px" type="number" id="price" placeholder={this.props.interestRate} name="price" min="0" max="3000000" value={`${value}`} onChange={this.onChange} onClick={this.handleClick}/>
          </Styles.ControlInput>
          <Styles.SlideContainer className="Slider">
            <Styles.Slider type="range" min="0" max="300000" value={value} onChange={this.onChange} />
          </Styles.SlideContainer>
        </Styles.ControlsContainer>
      </Styles.GridCellBox>
    );
  }
}

export default InterestRate;


