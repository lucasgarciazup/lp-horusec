import React from 'react';
import { graphql } from 'gatsby';
import { Template } from '../templates/default'
import { useTranslation } from 'gatsby-plugin-react-i18next';
import HeaderCommunity from '../sections/community/header';
import BodyCommunity from '../sections/community/body';

export default function Community() {
  const { t } = useTranslation();

  return (
    <Template>
      <HeaderCommunity />
      <BodyCommunity />
    </Template>
  );
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