import React from 'react';
import Styles from './Styled.jsx';

const AffordabilityTable = ({ principal, propertyTax, homeInsurance, mortgageETC}) => (
  <Styles.AffordabilityTableContainer>
    <Styles.TableGridContainer>
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
                <b>${Math.trunc(principal).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</b>
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
          <b>${Math.trunc(propertyTax).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</b>
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
          <b>${Math.trunc(homeInsurance).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</b>
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
          <b>${Math.trunc(mortgageETC).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</b>
          </Styles.TextContainer>
        </Styles.TableMediaContainer>
        <Styles.ButtonCellBox>
          <Styles.Button>Get Pre-Qualified</Styles.Button>
          <Styles.Centered>
          or
        </Styles.Centered>
        <Styles.Centered>
          See today's mortgage rates
        </Styles.Centered>
        </Styles.ButtonCellBox>
      </Styles.TableCellBox>
    </Styles.TableGridContainer>
  </Styles.AffordabilityTableContainer>
)


export default AffordabilityTable;