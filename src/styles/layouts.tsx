import styled from "styled-components"

interface SectionInterface {
  dark?: true
}

export const Section = styled.section<SectionInterface>`
  padding: 56px 0;
  background: ${props => (props.dark ? "#F5F6F7" : "#FFFF")};
`

export const TitlePage = styled.section<SectionInterface>`
  padding: 128px 0;
  background: ${props => props.theme.colors.background};

  h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 80px;
    text-align: center;
    color: #113b65;
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #8c909c;
  }
`

export const TitleSection = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  margin-bottom: 24px;

  color: ${props => props.theme.colors.secondary};
`

export const SubTitleSection = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.colors.caption};
  margin-bottom: 32px;
  text-align: center;
`

export const BodySection = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #1a2138;

  h6 {
    font-weight: bold;
  }
`

export const CaptionSection = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #1a2138;
`
