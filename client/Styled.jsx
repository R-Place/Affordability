import styled from 'styled-components';



const AffordabiltyContainer = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
font-size: 14px;
line-height: 1.5;
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
margin: 32px 0px;
display: flex;
flex-direction: column;
position: absolute;
top: 223%;
left: 55%;
margin-right: -30%;
transform: translate(-50%, -50%);
`;

const AffordabilityText = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
font-weight: bold;
font-size: 20px;
line-height: 1.2;
`;

const TextContainer = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
font-size: 16px;
line-height: 1.5;
`;


const TextContainerBold = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
letter-spacing: -0.1px;
box-sizing: border-box;
font-weight: bold;
outline: none;
font-size: 16px;
line-height: 1.5;
`;

const DownPaymentWrapper = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
font-size: 14px;
line-height: 1.5;
letter-spacing: -0.1px;
color: rgb(59, 65, 68);
box-sizing: border-box;
outline: none;
display: flex;
-webkit-box-pack: end;
justify-content: flex-end;
`;

const ControlsContainer = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
font-size: 14px;
line-height: 1.5;
letter-spacing: -0.1px;
color: rgb(59, 65, 68);
outline: none;
box-sizing: border-box;
flex: 1 1 0%;
display: flex;
-webkit-box-align: center;
align-items: center;
flex-direction: column;
padding-bottom: 2px;
`;


const ControlInput = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
font-size: 14px;
line-height: 1.5;
letter-spacing: -0.1px;
color: rgb(205,209,212);
box-sizing: border-box;
outline: none;
flex: 1 1 0%;
width: 100%;
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;
margin-bottom: 16px;
@media (max-width: 47.9375em) {
  min-height: unset;
}
min-height: 48px;
`;


const FlexContainer = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
font-size: 14px;
line-height: 1.5;
letter-spacing: -0.1px;
color: rgb(59, 65, 68);
box-sizing: border-box;
outline: none;
display: flex;
flex-direction: column;
width: 87%;
border-radius: 8px;
overflow: hidden;
background-color: rgb(245, 246, 247);
padding: 16px;
`;

const GridContainer = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
font-size: 14px;
line-height: 1.5;
letter-spacing: -0.1px;
color: rgb(59, 65, 68);
box-sizing: border-box;
outline: none;
display: flex;
margin-left: -8px;
margin-right: -8px;
margin-top: -16px;
flex-wrap: wrap;
`;

const GridCellBox = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
font-size: 14px;
line-height: 1.5;
letter-spacing: -0.1px;
color: rgb(59, 65, 68);
box-sizing: border-box;
outline: none;
-webkit-box-flex: 0;
flex: 0 0 auto;
display: block;
border-style: solid;
border-color: transparent;
border-width: 16px 8px 0px;
@media (min-width: 376px) {
  width: 100%;
}
@media (min-width: 570px) {
  width: 100%;
}
@media (min-width: 1000px) {
  width: 33%;
}
`;


const Padding = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
font-size: 14px;
line-height: 1.5;
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
padding: 0px 0px 8px;
`;

const PaddingTwo = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
font-size: 14px;
line-height: 1.5;
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
padding: 0px 0px 16px;
`;

const Header = styled.h3`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
line-height: 1.5;
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
font-size: 20px;
margin: 0px 0px 8px;
`;

const Input = styled.input`
box-sizing: border-box;
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
border-radius: 8px;
border: 1px solid rgb(205, 209, 212);
padding: 8px;
font-size: 14px;
line-height: 1.5;
display: inline-block;
outline: none;
transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
width: 112px;
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}
`;

const InterestRateInput = styled.input`
box-sizing: border-box;
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
border-radius: 8px;
border: 1px solid rgb(205, 209, 212);
padding: 8px;
font-size: 14px;
line-height: 1.5;
display: inline-block;
outline: none;
transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
width: 75px;
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}
`;


const SlideContainer = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
font-size: 14px;
line-height: 1.5;
letter-spacing: -0.1px;
color: rgb(59, 65, 68);
box-sizing: border-box;
outline: none;
width: 100%;
height: 20px;
display: flex;
-webkit-box-align: center;
align-items: center;
position: relative;
`;

const TrackSlider = styled.input`
{
  position: absolute;
  z-index: 1;
  width: 100%;
  height:2px;
  outline:none;
  margin:0;
  padding:0;
  -webkit-appearance: none;
};
  &::-webkit-slider-runnable-track {
    width: 100%;
    background: #D0D0D0;
    border: 0.2px solid #FFFFFF;
    border-radius: 1.3px;
    height: 5px;
    overflow: hidden;
    pointer-events: none;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: transparent;
    height: 1px;
    width: 1px;
    box-shadow: -600px 0 0 600px #007882;
  }
`;

const ThumbSlider = styled.input`
{
  position: absolute;
  z-index: 2;
  width: 100%;
  height:0px;
  outline:none;
  margin:0;
  padding:0;
  -webkit-appearance: none;
};
&::-webkit-slider-runnable-track {
    background: transparent;
    cursor: pointer;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  width:12px;
  height:12px;
  border-radius:16px;
  border:4px solid #FFFFFF;
  background: #007882;
  box-shadow:0 2px 4px 0 ",";
  margin: 0px;
  box-sizing:content-box;
  }
`;

const Slider = styled.input`
{
  width: 100%;
  height:2px;
  outline:none;
  margin:0;
  padding:0;
  -webkit-appearance: none;
  };
&::-webkit-slider-thumb {
  -webkit-appearance: none;
  width:12px;
  height:12px;
  border-radius:16px;
  border:4px solid #FFFFFF;
  background: #007882;
  box-shadow:0 2px 4px 0 ",";
  margin: -8px;
  box-sizing:content-box;
};
&::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  background: #007882;
  border: 0.2px solid #FFFFFF;
  border-radius: 1.3px;
  height: 5px;
  cursor:pointer;
};
`;


const Percentage = styled.input`
box-sizing: border-box;
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
border: 1px solid rgb(205, 209, 212);
padding: 8px;
font-size: 14px;
line-height: 1.5;
display: inline-block;
outline: none;
transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
border-radius: 0px 8px 8px 0px;
width: 56px;
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}
`;

const DownPayments = styled.input`
box-sizing: border-box;
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
border-width: 1px 0px 1px 1px;
border-top-style: solid;
border-bottom-style: solid;
border-left-style: solid;
border-top-color: rgb(205, 209, 212);
border-bottom-color: rgb(205, 209, 212);
border-left-color: rgb(205, 209, 212);
border-image: initial;
padding: 8px;
font-size: 14px;
line-height: 1.5;
display: inline-block;
outline: none;
transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
border-radius: 8px 0px 0px 8px;
border-right-style: initial;
border-right-color: initial;
width: 100px;
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}
`;

const SelectContainer = styled.div`
width: 240px;
-webkit-box-align: center;
align-items: center;
position: relative;
font-weight: bold;
border: 1px solid rgb(205, 209, 212);
border-radius: 8px;
background-color: rgb(255, 255, 255);
padding: 13px;
outline: none;
`;

const Selection = styled.select`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
box-sizing: border-box;
outline: none;
position: absolute;
padding-left: 6px;
width: 100%;
height: 100%;
top: 0px;
left: 0px;
right: 0px;
bottom: 0px;
border-radius: 8px;
cursor: pointer;
appearance: none;
font-size: 14px;
line-height: 1.5;
-webkit-appearance: none;
 Option {
  cursor: pointer;
  font-size: 14px;
  line-height: 1.5;
  box-sizing: border-box;
  outline: none;
 }
`;

const GraphContainer = styled.div`
width: 87%;
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
font-size: 16px;
line-height: 1.5;
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
display: flex;
flex-wrap: wrap;
-webkit-box-pack: center;
justify-content: center;
`;

const DonutChartContainer = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(205,209,212);
font-size: 14px;
line-height: 1.5;
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
margin: 32px 32px 32px 16px;
display: block;
`;

const InnerChartContainer = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
font-size: 14px;
line-height: 1.5;
letter-spacing: -0.1px;
outline: none;
width: 280px;
position: relative;
box-sizing: border-box;
margin: auto;
flex-shrink: 0;
`;

const DonutGraphContainer = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
font-size: 14px;
line-height: 1.5;
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
width: 330px;
height: 330px;
`;

const DonutLabelContainer = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
font-size: 16px;
line-height: 1.5;
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
position: absolute;
top: 44%;
left: 3%;
transform: translateY(-50%);
margin: 0px;
width: 100%;
display: flex;
-webkit-box-pack: center;
justify-content: center;
`;

const DonutLabel = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
font-size: 16px;
line-height: 1.5;
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
flex-direction: column;
width: auto;
display: inline-block;
`;

const DonutLabelAmount = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
font-size: 38px;
font-weight: bold;
line-height: 1.05;
align-self: center;
`;

const DonutLabelUnit = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
font-size: 16px;
line-height: 1.5;
text-align: center;
`;

const SVGViewBox = styled.svg`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
font-size: 14px;
line-height: 1.5;
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
`;

const AffordabilityTableContainer = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
font-size: 16px;
line-height: 1.5;
letter-spacing: -0.1px;
outline: none;
box-sizing: border-box;
flex: 1 1 0%;
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: space-between;
flex-direction: column;
padding: 59px 0px 16px 16px;
min-width: 50%;
@media (max-width: 47.9375em) {
  padding: 0px;
}
`;


const TableGridContainer = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
font-size: 16px;
line-height: 1.5;
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
display: flex;
margin-top: -4px;
flex-wrap: wrap;
margin-left: 0px;
margin-right: 0px;
width: 100%;
@media (min-width: 376px) {
  margin-right: -2px;
}
@media (min-width: 570px) {
  margin-right: -2px;
}
@media (min-width: 376px) {
  margin-left: -2px;
}
@media (min-width: 570px) {
  margin-left: -2px;
}
`;

const TableCellBox = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
font-size: 16px;
line-height: 1.5;
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
width: 100%;
-webkit-box-flex: 0;
flex: 0 0 auto;
display: block;
border-style: solid;
border-color: transparent;
border-width: 4px 2px 0px;
`;

const TableMediaContainer = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
font-size: 16px;
line-height: 1.5;
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
flex-direction: row;
-webkit-box-align: center;
align-items: center;
display: flex;
`;


const MediaContent = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
font-size: 16px;
line-height: 1.5;
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
flex: 1 1 0px;
width: 100%;
margin: 0px 8px;
margin-left: 0px;
margin-right: 0px;
`;

const TableMediaContainerWidth = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
font-size: 16px;
line-height: 1.5;
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
flex-direction: row;
-webkit-box-align: center;
align-items: center;
display: flex;
width: 100%;
`;


const TableTitle = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
font-size: 16px;
line-height: 1.5;
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
display: flex;
-webkit-box-align: center;
align-items: center;
width: 100%;
`;

const PrincipalColor = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
background-color: rgb(5, 34, 134);
width: 16px;
height: 16px;
border-radius: 8px;
color: rgb(59, 65, 68);
font-size: 16px;
line-height: 1.5;
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
margin-right: 5px;
`;

const PropertyTaxesColor = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
font-size: 16px;
line-height: 1.5;
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
background-color: rgb(0, 173, 187);
width: 16px;
height: 16px;
border-radius: 8px;
margin-right: 5px;
`;

const HomeInsuranceColor = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
font-size: 16px;
line-height: 1.5;
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
background-color: rgb(194, 213, 0);
width: 16px;
height: 16px;
border-radius: 8px;
margin-right: 5px;
`;

const MortgageColor = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
font-size: 16px;
line-height: 1.5;
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
background-color: rgb(206, 182, 255);
width: 16px;
height: 16px;
border-radius: 8px;
margin-right: 5px;
`;

const ButtonCellBox = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
font-size: 16px;
line-height: 1.5;
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
width: 100%;
-webkit-box-flex: 0;
flex: 0 0 auto;
display: block;
border-style: solid;
border-color: transparent;
border-width: 32px 2px 0px;
`;

const Button = styled.button`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
text-decoration: none;
margin: 0px;
border-radius: 8px;
border-width: 1px;
border-style: solid;
cursor: pointer;
display: inline-block;
text-align: center;
font-weight: bold;
transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
white-space: nowrap;
font-size: 16px;
line-height: 1.5;
padding: 8px 16px;
width: 66%;
color: rgb(255, 255, 255);
background-color: rgb(0, 120, 130);
border-color: transparent;
@media (min-width: 376px) {
  width: 100%;
}
@media (min-width: 570px) {
  width: 100%;
}
@media (min-width: 768px) {
  width: 66%;
}
`;

const Centered = styled.div`
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
color: rgb(59, 65, 68);
font-size: 16px;
line-height: 1.5;
letter-spacing: -0.1px;
box-sizing: border-box;
outline: none;
-webkit-box-flex: 0;
flex: 0 0 auto;
display: block;
border-style: solid;
border-color: transparent;
border-width: 4px 2px 0px;
text-align: center;
@media (min-width: 376px) {
  width: 100%;
}
@media (min-width: 570px) {
  width: 100%;
}
@media (min-width: 768px) {
  width: 66%;
}
`;
const styles = { AffordabiltyContainer, TextContainer, ControlsContainer, FlexContainer, GridContainer, GridCellBox, Padding, Header, AffordabilityText, PaddingTwo, TextContainerBold, Input, ControlInput,  SlideContainer, Slider, Percentage, DownPayments, SelectContainer, Selection, DownPaymentWrapper, InterestRateInput, GraphContainer, DonutChartContainer, InnerChartContainer, DonutGraphContainer, SVGViewBox, DonutLabelContainer, DonutLabel, DonutLabelAmount, DonutLabelUnit, AffordabilityTableContainer, TableGridContainer, TableCellBox, TableMediaContainer, MediaContent, TableTitle, PrincipalColor, TableMediaContainerWidth, PropertyTaxesColor, HomeInsuranceColor, MortgageColor, TrackSlider, ThumbSlider , ButtonCellBox, Button, Centered };

export { styles as default, ThumbSlider};

