import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import { DocumentationButton, ContributeButton } from "../../../styles/buttons"
import { Section } from "../../../styles/layouts"

const Info: React.FC = () => {
  return (
    <Section>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-3">
            <ContributeButton highlight />
          </Col>
          <Col className="col-3">
            <DocumentationButton />
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default Info
