import React, { useState } from 'react';
import { useStaticQuery, withPrefix } from 'gatsby';
import { graphql } from 'gatsby';

import { useI18next } from "gatsby-plugin-react-i18next"
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { Card, CardDescription, CardIcon, CardTitle } from './styles';
import Pagination from '../../../../components/Pagination';
import { PaginateInterface } from '../../../../interfaces/pagination.interface';
// import { Container } from './styles';

const Versions: React.FC = () => {

    const [paginate, setPaginate] = useState<PaginateInterface>({
        rowsPerPage: 10,
        totalItems: 0,
        params: {
            nextPageToken: "",
            prevPageToken: "",
        },
    })
    
    const { data: { group } } = useStaticQuery(query);
    const { language } = useI18next()
    const versions = group.find(el => el.fieldValue === language)

    return (
        <Container>
            <Row className='row-cols-1 row-cols-lg-3 gy-4'>
                {versions.nodes.map((version, index) => (
                    <Col key={version?.childMarkdownRemark?.frontmatter?.slug + index.toString()}>
                        <Card >
                            <Stack>
                                <CardIcon src={withPrefix("icons/database.svg")} />
                                <CardTitle>{version?.childMarkdownRemark?.frontmatter?.title}</CardTitle>
                                <CardDescription dangerouslySetInnerHTML={{ __html: version?.childMarkdownRemark?.html }} />
                            </Stack>
                            <a href="">Saber mais</a>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Stack className="flex-row justify-content-end mt-5">
                <Pagination
                    paginate={paginate}
                    rowsPerPageOptions={[10, 50, 100]}
                    onChange={() => {}}
                />
            </Stack>
        </Container>
    );
}

export default Versions;

const query = graphql`
    query {
        data: allFile(filter: {relativeDirectory: {}, sourceInstanceName: {eq: "versions"}}
        sort: {fields: birthtime, order: DESC}
        ) {
            group(field: relativeDirectory) {
                fieldValue
                nodes {
                childMarkdownRemark {
                    html
                    frontmatter {
                    slug
                    title
                    }
                }
                name
                }
            }
        }
    }
  
`