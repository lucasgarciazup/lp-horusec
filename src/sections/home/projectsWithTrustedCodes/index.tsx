import React from "react"
import { Container, Image } from "react-bootstrap"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Section, SubTitleSection, TitleSection } from "../../../styles/layouts"

import gif from '../../../assets/gifs/pipeline.gif';

const ProjectsWithTrustedCodes: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Section dark>
      <Container>
        <TitleSection>{t("projects_with_trusted_codes_title")}</TitleSection>
        <SubTitleSection className='m-0'>
          {t("projects_with_trusted_codes_subtitle")}
        </SubTitleSection>
        <Image className='d-block m-auto' src={gif}/>
      </Container>
    </Section>
  )
}

export default ProjectsWithTrustedCodes
