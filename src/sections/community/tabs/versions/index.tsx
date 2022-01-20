import React, { useCallback, useState } from "react"
import { useStaticQuery, withPrefix } from "gatsby"
import { graphql } from "gatsby"

import { useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import { Col, Container, Row, Stack } from "react-bootstrap"
import { Card, CardDescription, CardIcon, CardTitle } from "./styles"
import Pagination from "../../../../components/Pagination"

const ROWS_PER_PAGE_OPTIONS = [10, 25, 50]
const Versions: React.FC = () => {
  const { language } = useI18next()
  const { t } = useTranslation()
  const {
    data: { group },
  } = useStaticQuery(query)
  const versions = group.find(el => el.fieldValue === language)?.nodes || []
  const [currentItems, setCurrentItems] = useState(versions)

  const handleCurrentItems = useCallback(
    (items: any[]) => {
      setCurrentItems(items)
    },
    [currentItems]
  )

  return (
    <Container>
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4">
        {currentItems.map((version, index) => (
          <Col
            key={
              version?.childMarkdownRemark?.frontmatter?.slug + index.toString()
            }
          >
            <Card>
              <Stack>
                <CardIcon src={withPrefix("icons/database.svg")} />
                <CardTitle>
                  {version?.childMarkdownRemark?.frontmatter?.title}
                </CardTitle>
                <CardDescription
                  dangerouslySetInnerHTML={{
                    __html: version?.childMarkdownRemark?.html,
                  }}
                />
              </Stack>
              <a
                className="mt-3"
                href={version?.childMarkdownRemark?.frontmatter.url}
              >
                {t("learn_more")}
              </a>
            </Card>
          </Col>
        ))}
      </Row>
      <Stack className="flex-row justify-content-end mt-5">
        <Pagination
          items={versions}
          itemsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
          handleCurrentItems={handleCurrentItems}
        />
      </Stack>
    </Container>
  )
}

export default Versions

const query = graphql`
  query {
    data: allFile(
      filter: { relativeDirectory: {}, sourceInstanceName: { eq: "versions" } }
      sort: { fields: birthtime, order: DESC }
    ) {
      group(field: relativeDirectory) {
        fieldValue
        nodes {
          name
          childMarkdownRemark {
            html
            frontmatter {
              slug
              title
              url
            }
          }
        }
      }
    }
  }
`
