import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import { Container, Image, Stack } from "react-bootstrap"

import { Section, TitleSection } from "../styles/layouts"
import { AllAboutButton } from "../styles/buttons"
import { Template } from "../templates/default"

export default function Page404() {
  const { t } = useTranslation()
  return (
    <Template>
      <Section dark>
        <Container>
          {/* // <Image className="d-block m-auto" src={error404} /> */}
          <Stack
            className="align-items-center my-5 m-auto"
            style={{ width: "40%" }}
          >
            <TitleSection>{t("404_title")}</TitleSection>
            <AllAboutButton highlight width="60%" />
          </Stack>
        </Container>
      </Section>
    </Template>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
