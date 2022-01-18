import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Col, Container, Row, Stack } from "react-bootstrap"
import Img from "gatsby-image"
import { Avatar, Name, Role, Social } from "./styles"
// import { Container } from './styles';

enum RoleEnum {
  "Tech Lead",
  "Software Engineer",
  "Quality Assurance Engineer",
}

type RoleType = "Quality Assurance Engineer" | "Software Engineer" | "Tech Lead"

interface TeamInterface {
  name: string
  role: RoleType
  github?: string
  linkedin?: string
}

const Team: React.FC = () => {
  const team: TeamInterface[] = [
    {
      name: "Felipe",
      role: "Quality Assurance Engineer",
      github: "#",
      linkedin: "#",
    },
    {
      name: "Ian",
      role: "Software Engineer",
      github: "https://github.com/osodracnai",
      linkedin: "https://www.linkedin.com/in/ian-cardoso-545758132/",
    },
    {
      name: "Lucas",
      role: "Software Engineer",
      github: "https://github.com/Lucasbrunoferreira",
      linkedin: "https://www.linkedin.com/in/lucas-bruno-ferreira/",
    },
    {
      name: "Matheus",
      role: "Software Engineer",
      github: "https://github.com/msAlcantara",
      linkedin: "https://www.linkedin.com/in/matheus-alcantara/",
    },
    {
      name: "Nathan",
      role: "Software Engineer",
      github: "https://github.com/nathansousa",
      linkedin: "https://www.linkedin.com/in/nathan-martins-81b542156/",
    },
    {
      name: "Wilian",
      role: "Tech Lead",
      github: "https://github.com/wilian746",
      linkedin: "https://www.linkedin.com/in/wiliangs/",
    },
  ]

  const {
    avatars: { nodes: avatars },
  } = useStaticQuery(graphql`
    query {
      avatars: allFile(filter: { relativeDirectory: { eq: "images/team" } }) {
        nodes {
          name
          id
          publicURL
          childImageSharp {
            fixed(width: 100, height: 100, quality: 60) {
              aspectRatio
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  `)

  return (
    <Container className="mt-5">
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3">
        {team.map(people => {
          const image = avatars.find(
            elem => elem?.name?.toLowerCase() == people?.name?.toLowerCase()
          )
          return (
            <Col key={people.name} className="mb-3">
              <Row>
                <Col className="col-auto">
                  <Avatar
                    loading="lazy"
                    fixed={image?.childImageSharp?.fixed}
                    alt={image?.name}
                  />
                </Col>
                <Col className="d-flex flex-column justify-content-center">
                  <Name>{people?.name}</Name>
                  <Role>{people?.role}</Role>
                  <Social className="d-flex gap-2">
                    <a href={people?.linkedin} target="_blank">
                      <FaLinkedin />
                    </a>
                    <a href={people?.github} target="_blank">
                      <FaGithub />
                    </a>
                  </Social>
                </Col>
              </Row>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Team
