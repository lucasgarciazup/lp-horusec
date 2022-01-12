import React from "react"
import { useTranslation } from 'gatsby-plugin-react-i18next'

import Default from '../templates/default'
import { graphql } from 'gatsby';
import Welcome from '../sections/home/welcome';
import TypesOfAnalysis from '../sections/home/typesOfAnalysis';

export default function Home({ data }) {
  const { t } = useTranslation();
  return (
    <Default>
      <Welcome />
      <TypesOfAnalysis />
    </Default>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;