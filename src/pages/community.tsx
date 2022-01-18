import React from "react"
import { graphql } from "gatsby"
import { Template } from "../templates/default"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Header from "../sections/community/header"
import Tab from "../sections/community/tab"

export default function Community() {
  const { t } = useTranslation()

  return (
    <Template>
      <Header />
      <Tab />
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
