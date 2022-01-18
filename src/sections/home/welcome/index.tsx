import React from "react"
import { Col, Container, Row } from "react-bootstrap"

import { Title, SubTitle, Section, Banner } from "./styles"

import { useTranslation } from "gatsby-plugin-react-i18next"
import { ContributeButton, DownloadButton } from "../../../styles/buttons"
import { graphql, useStaticQuery } from "gatsby"

const Welcome: React.FC = () => {
  const { t } = useTranslation()

  const { image } = useStaticQuery(graphql`
    query {
      image: file(name: { eq: "horusec-cli" }) {
        name
        publicURL
      }
    }
  `)

  return (
    <Section id="welcome">
      <Container className="py-5">
        <Row>
          <Col>
            <Title>{t("welcome_title")}</Title>
            <SubTitle>{t("welcome_subtitle")}</SubTitle>
            <Row>
              <Col className='col-6 col-sm-5 col-md-4'>
                <DownloadButton highlight />
              </Col>
              <Col className='col-6 col-sm-5 col-md-4'>
                <ContributeButton />
              </Col>
            </Row>
          </Col>

          <Col className="d-flex justify-content-end">
            <Banner src={image?.publicURL} fluid alt={image?.name} />
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default Welcome
