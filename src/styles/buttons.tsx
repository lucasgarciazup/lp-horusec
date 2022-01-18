import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Button from "../components/Button"
import { ButtonInterface  } from '../interfaces/button.interface'

export const DownloadButton: React.FC<Omit<ButtonInterface, "children">> = props => {
  const { t } = useTranslation()
  return (
    <Button
      href="https://docs.horusec.io/docs/cli/installation/"
      target="_blank"
      {...props}
    >
      {t("button_download")}
    </Button>
  )
}

export const ContributeButton: React.FC<Omit<ButtonInterface, "children">> = props => {
  const { t } = useTranslation()
  return (
    <Button
      href="https://github.com/ZupIT/horusec-platform"
      target="_blank"
      {...props}
    >
      {t("button_contribute")}
    </Button>
  )
}

export const DocumentationButton: React.FC<Omit<ButtonInterface, "children">> = props => {
  const { t } = useTranslation()
  return (
    <Button
      href="https://docs.horusec.io/docs/overview/"
      target="_blank"
      {...props}
    >
      {t("button_documentation")}
    </Button>
  )
}

export const AllAboutButton: React.FC<Omit<ButtonInterface, "children">> = props => {
  const { t } = useTranslation()
  return (
    <Button
      href="https://docs.horusec.io/docs/overview/"
      target="_blank"
      {...props}
    >
      {t("button_all_about")}
    </Button>
  )
}
