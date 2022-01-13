import React from "react"
import { Row, Col } from "react-bootstrap"
import { DocumentationButton, ContributeButton } from "../../../styles/buttons"
import { Section } from "../../../styles/layouts"

const Info: React.FC = () => {
  return (
    <Section>
      <Row className="justify-content-center">
        <Col className="col-3">
          <ContributeButton highlight />
        </Col>
        <Col className="col-3">
          <DocumentationButton />
        </Col>
      </Row>
    </Section>
  )
}

export default Info
