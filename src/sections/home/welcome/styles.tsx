import styled from "styled-components"

export const Section = styled.section`
  padding: 100px 0;
`

export const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 56px;
  line-height: 80px;

  color: ${props => props.theme.colors.secondary};
`

export const SubTitle = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.colors.caption};
  margin-bottom: 32px;
`

export const Banner = styled.img`
  box-shadow: 0px 4px 32px -8px rgba(0, 0, 0, 0.12);
  border-radius: 8px;

  width: 100%;
  max-width: 560px;
`
