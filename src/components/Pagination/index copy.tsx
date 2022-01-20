import React, { useState } from "react"
import { Dropdown } from "react-bootstrap"
import { DropdownToggleProps } from "react-bootstrap/esm/DropdownToggle"
import { useTranslation } from "gatsby-plugin-react-i18next"

import { Next, PerPage, Previous, Wrapper } from "./styles"
import { PaginationInterface } from "../../interfaces/pagination.interface"

const CustomPerPage = React.forwardRef(
  (props: DropdownToggleProps, ref: React.Ref<HTMLDivElement>) => (
    <PerPage ref={ref} {...props}>
      {props.children}
    </PerPage>
  )
)

export default function Pagination(props: PaginationInterface) {
  const { totalItems, rowsPerPage } = props.paginate
  const { rowsPerPageOptions } = props
  const totalPage = Math.ceil(totalItems / rowsPerPage)
  const { t } = useTranslation()

  const handleSelect = (eventKey: number) => {
    props.onChange(eventKey)
  }

  const handlePrevious = e => {
    props.onChange("prev")
  }
  const handeNext = e => {
    props.onChange("next")
  }

  return (
    <Wrapper>
      <div>{rowsPerPage}</div>

      <Dropdown>
        <Dropdown.Toggle
          as={CustomPerPage}
          id="dropdown-per-page"
        ></Dropdown.Toggle>

        <Dropdown.Menu align="start" renderOnMount style={{ minWidth: 0 }}>
          {rowsPerPageOptions.map((el, index) => (
            <Dropdown.Item
              key={index.toString()}
              onClick={() => handleSelect(el)}
              disabled={el === rowsPerPage}
            >
              {el}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <div>
        {t(totalPage === 1 ? "per_page" : "per_page_plural", {
          count: totalPage,
        })}
      </div>
      <Previous onClick={handlePrevious} />
      <Next onClick={handeNext} />
    </Wrapper>
  )
}
