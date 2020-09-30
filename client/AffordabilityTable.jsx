import React from 'react';
import Styles from './Styled.jsx';

class AffordabilityTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Styles.AffordabilityTableContainer>
        <Styles.TableGridContainer spacing="tighter">
          <Styles.TableCellBox className="PrincipalInterest">
            <Styles.TableMediaContainer>
              <Styles.MediaContent>
                <Styles.TableTitle>
                  <Styles.TableMediaContainerWidth>
                    <Styles.PrincipalColor className="principal" >
                    </Styles.PrincipalColor >
                      <Styles.MediaContent>
                        <Styles.TextContainer>
                          Principal & Interest
                        </Styles.TextContainer>
                      </Styles.MediaContent>
                  </Styles.TableMediaContainerWidth>
                </Styles.TableTitle>
              </Styles.MediaContent>
                  <Styles.TextContainer>
                    <b>${Math.floor(this.props.principal).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</b>
                  </Styles.TextContainer>
            </Styles.TableMediaContainer>
          </Styles.TableCellBox>
          <Styles.TableCellBox className="PropertyTaxes">
            <Styles.TableMediaContainer>
              <Styles.MediaContent>
                <Styles.TableTitle>
                  <Styles.TableMediaContainerWidth>
                    <Styles.PropertyTaxesColor>
                    </Styles.PropertyTaxesColor>
                    <Styles.MediaContent>
                      <Styles.TextContainer>
                        Property Taxes
                      </Styles.TextContainer>
                    </Styles.MediaContent>
                  </Styles.TableMediaContainerWidth>
                </Styles.TableTitle>
              </Styles.MediaContent>
              <Styles.TextContainer>
              <b>${Math.floor(this.props.propertyTax).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</b>
              </Styles.TextContainer>
            </Styles.TableMediaContainer>
          </Styles.TableCellBox>
          <Styles.TableCellBox className="HomeInsurance">
            <Styles.TableMediaContainer>
              <Styles.MediaContent>
                <Styles.TableTitle>
                  <Styles.TableMediaContainerWidth>
                    <Styles.HomeInsuranceColor>
                    </Styles.HomeInsuranceColor>
                    <Styles.MediaContent>
                      <Styles.TextContainer>
                      Home Insurance
                      </Styles.TextContainer>
                    </Styles.MediaContent>
                  </Styles.TableMediaContainerWidth>
                 </Styles.TableTitle>
              </Styles.MediaContent>
              <Styles.TextContainer>
              <b>${Math.floor(this.props.homeInsurance).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</b>
              </Styles.TextContainer>
            </Styles.TableMediaContainer>
          </Styles.TableCellBox>
          <Styles.TableCellBox className="Mortgage">
            <Styles.TableMediaContainer>
              <Styles.MediaContent>
                <Styles.TableTitle>
                  <Styles.TableMediaContainerWidth>
                    <Styles.MortgageColor>
                    </Styles.MortgageColor>
                    <Styles.MediaContent>
                      <Styles.TextContainer>
                        Mortgage ins. & other
                      </Styles.TextContainer>
                    </Styles.MediaContent>
                  </Styles.TableMediaContainerWidth>
                </Styles.TableTitle>
              </Styles.MediaContent>
              <Styles.TextContainer>
              <b>${Math.floor(this.props.mortgageETC).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</b>
              </Styles.TextContainer>
            </Styles.TableMediaContainer>
          </Styles.TableCellBox>
        </Styles.TableGridContainer>
      </Styles.AffordabilityTableContainer>
    )
  }
}

export default AffordabilityTable;