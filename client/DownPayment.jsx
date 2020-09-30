import React from 'react';
import Styles from './Styled.jsx';

class DownPayment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      percent: 20,
    };
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onChange(event) {
    this.setState({
      value: event.target.value,
      percent: Math.floor((event.target.value / this.props.homePrice) * 100)
    });
    event.target.max = this.props.max
    this.props.updateMonthlyPayment(event.target.value);
  }

  handleClick(event) {
    var target = event.target;
    this.props.changeColor(target);
  }

  render() {
    const { value, percent } = this.state;
    return (
      <Styles.GridCellBox width="1,1,1,0.33" className="downPayment">
        <Styles.ControlsContainer className="downPaymentController">
          <Styles.ControlInput className="controlInput">
            <Styles.TextContainerBold className="text">
              <label htmlFor="downPayment">Down Payment </label>
            </Styles.TextContainerBold>
              <Styles.DownPaymentWrapper>
                <Styles.DownPayment className="price" width="112px" type="number" placeholder={this.props.downPayment} id="downPayment" name="price" min="0" max={this.props.max} value={value} onChange={this.onChange} onClick={this.handleClick}/>
                <Styles.Percentage className="price" type="number" id="downPaymentPercentage" placeholder="20%" max="30" value={percent} onChange={this.onChange} onClick={this.handleClick}/>
              </Styles.DownPaymentWrapper>
          </Styles.ControlInput>
            <Styles.SlideContainer className="slider">
              <Styles.slider  type="range" min="0" className="price" max="3000000" value={value} onChange={this.onChange} />
            </Styles.SlideContainer>
        </Styles.ControlsContainer>
      </Styles.GridCellBox>
    );
  }
}

export default DownPayment;
