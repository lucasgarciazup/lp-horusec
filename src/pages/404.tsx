import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql, useStaticQuery, withPrefix } from "gatsby"
import { Container, Image, Stack } from "react-bootstrap"

import { Section, TitleSection } from "../styles/layouts"
import { AllAboutButton } from "../styles/buttons"
import { Template } from "../templates/default"

export default function Page404({ data }) {
  const { t } = useTranslation()
  const { image } = data;
  
  return (
    <Template title={t("404_title")}>
      <Section dark>
        <Container>
          <Image className="d-block m-auto" src={image?.publicURL} title={image?.name} />
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
    image: file(name: { eq: "error_404" }) {
      name
      publicURL
    }
  }
`
