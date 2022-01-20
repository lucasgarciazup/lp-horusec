import React, { useEffect, useState } from "react"
import { Dropdown } from "react-bootstrap"
import { DropdownToggleProps } from "react-bootstrap/esm/DropdownToggle"
import { useTranslation } from "gatsby-plugin-react-i18next"

import { Next, PerPage, Previous, Wrapper } from "./styles"
import { PaginationInterface } from "../../interfaces/pagination.interface"
import ReactPaginate from "react-paginate"

const CustomPerPage = React.forwardRef(
  (props: DropdownToggleProps, ref: React.Ref<HTMLDivElement>) => (
    <PerPage ref={ref} {...props}>
      {props.children}
    </PerPage>
  )
)

export default function Pagination({
  itemsPerPageOptions,
  items,
  handleCurrentItems,
}: PaginationInterface) {
  const { t } = useTranslation()
  const [pageCount, setPageCount] = useState(0)
  const [pageCurrent, setPageCurrent] = useState(1)
  const [itemOffset, setItemOffset] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0] || 10)

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    handleCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, items])

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    setPageCurrent(++event.selected)
    setItemOffset(newOffset)
  }

  return (
    <Wrapper>
      <div>{itemsPerPage}</div>

      <Dropdown>
        <Dropdown.Toggle
          as={CustomPerPage}
          id="dropdown-per-page"
        ></Dropdown.Toggle>

        <Dropdown.Menu align="start" renderOnMount style={{ minWidth: 0 }}>
          {itemsPerPageOptions.map((el, index) => (
            <Dropdown.Item
              key={index.toString()}
              onClick={() => setItemsPerPage(el)}
              disabled={el === itemsPerPage}
            >
              {el}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <div>
        {t(pageCount === 1 ? "per_page" : "per_page_plural", {
          from: pageCurrent,
          to: pageCount,
        })}
      </div>
      <ReactPaginate
        nextLabel={<Next />}
        previousLabel={<Previous />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={0}
        pageCount={pageCount}
      />
    </Wrapper>
  )
}
