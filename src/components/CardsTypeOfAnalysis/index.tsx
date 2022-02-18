import { withPrefix } from "gatsby"
import React from "react"
import { useTranslation } from "react-i18next"
import Carrousel from "../Carrousel"

import { Card, CardCaption, CardIcon, CardTitle } from "./styles"

type Card = {
  icon: string
  title: string
  caption: string
}

const CardsTypeOfAnalysis: React.FC = () => {
  const { t } = useTranslation()

  const cards: Card[] = [
    {
      icon: t("type_of_analysis_card_1_icon"),
      title: t("type_of_analysis_card_1_title"),
      caption: t("type_of_analysis_card_1_caption"),
    },
    {
      icon: t("type_of_analysis_card_2_icon"),
      title: t("type_of_analysis_card_2_title"),
      caption: t("type_of_analysis_card_2_caption"),
    },
    {
      icon: t("type_of_analysis_card_3_icon"),
      title: t("type_of_analysis_card_3_title"),
      caption: t("type_of_analysis_card_3_caption"),
    },
  ]

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Carrousel items={cards} settings={settings}>
      {(item: Card) => (
        <div key={item.title} className="p-2">
          <Card className="me-auto">
            <CardIcon src={withPrefix(item.icon)} height={30} width="auto" />
            <CardTitle>{item.title}</CardTitle>
            <CardCaption>{item.caption}</CardCaption>
          </Card>
        </div>
      )}
    </Carrousel>
  )
}

export default CardsTypeOfAnalysis
