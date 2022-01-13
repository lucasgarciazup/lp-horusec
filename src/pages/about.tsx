import { graphql } from 'gatsby';
import React from 'react';
import { Container } from 'react-bootstrap';

// import { Container } from './styles';
import Default from '../templates/default';

const pages: React.FC = () => {
  return (
  <Default>
    <Container>
      <h1>oi</h1>

    </Container>
    </Default>
  );
}

export default pages;

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