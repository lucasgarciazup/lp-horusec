import styled from "styled-components"
import { Section } from "../../../styles/layouts"

export const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 80px;
  color: #113b65;
`

export const SectionStyled = styled(Section)<{ backgroundImage: string }>`
  background-image: url(${props => props.backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
