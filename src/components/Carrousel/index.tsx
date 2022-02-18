import { withPrefix } from "gatsby"
import React from "react"

import Slider from "react-slick"
import { DotItem } from "./styles"

type Props = {
  items: any[]
  settings?: React.ComponentProps<typeof Slider>
  children: (value: Props["items"][number], index: number) => React.ReactNode
}

export default function Carrousel({ items, settings = {}, children }: Props) {
  let slider = React.createRef<Slider>()
  const bulletsQuantity = Math.ceil(items.length)
  const bullets = []

  for (let i = 0; i < bulletsQuantity; i++) {
    bullets.push(i)
  }

  const handleArrows = (type: string) => {
    slider.current[`slick${type}`]()
  }

  const handleDots = (index: number) => {
    slider.current["slickGoTo"](index)
  }

  settings = {
    beforeChange: (oldIndex, newIndex) => {
      const dots: any = document.getElementsByClassName("dots-item")

      if (dots && dots.length) {
        if (dots[oldIndex]) {
          dots[oldIndex].children[0].children[0].className = dots[
            oldIndex
          ].children[0].children[0].className.replaceAll(" is-active", "")
        }

        if (dots[newIndex]) {
          dots[newIndex].children[0].children[0].className += " is-active"
        }
      }
    },
    ...settings,
  }

  return (
    <div>
      <Slider ref={slider} {...settings}>
        {items.map(children)}
      </Slider>

      {settings.dots === false && bullets && bullets.length > 1 ? (
        <div className="container d-block d-md-block d-lg-none">
          <div className="row align-items-center mt-5">
            <div className="col-auto" style={{ cursor: "pointer" }}>
              <span
                onClick={() => {
                  handleArrows("Prev")
                }}
              >
                <img
                  src={withPrefix("/icons/chevron-left.svg")}
                  width={24}
                  height={24}
                />
              </span>
            </div>

            <div className="col-auto dots">
              <div className="row">
                {bullets && bullets.length
                  ? bullets.map((item, index) => (
                      <div key={index} className="col-auto gx-2 dots-item">
                        <span
                          onClick={e => {
                            handleDots(item)
                          }}
                        >
                          <DotItem
                            className={index === 0 ? "is-active" : null}
                          />
                        </span>
                      </div>
                    ))
                  : null}
              </div>
            </div>

            <div className="col-auto" style={{ cursor: "pointer" }}>
              <span
                onClick={() => {
                  handleArrows("Next")
                }}
              >
                <img
                  src={withPrefix("/icons/chevron-right.svg")}
                  width={24}
                  height={24}
                />
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
