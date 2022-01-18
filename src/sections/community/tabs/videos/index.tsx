import axios from "axios"
import React, { useCallback, useEffect, useState } from "react"
import { Col, Container, Row, Spinner, Stack } from "react-bootstrap"
import Pagination from "../../../../components/Pagination"
import { PaginateInterface } from "../../../../interfaces/pagination.interface"

const Videos: React.FC = () => {
  const [videos, setVideos] = useState({
    isLoading: true,
    items: [],
  })

  const [paginate, setPaginate] = useState<PaginateInterface>({
    rowsPerPage: 10,
    totalItems: 0,
    params: {
      nextPageToken: "",
      prevPageToken: "",
    },
  })

  const getVideos = useCallback(
    (callback?: "next" | "prev" | number) => {
      if (
        (callback === "prev" && !paginate.params.prevPageToken) ||
        (callback === "next" && !paginate.params.nextPageToken)
      ) {
        return
      }

      if (typeof callback === "number") {
        setPaginate(state => ({ ...state, rowsPerPage: callback }))
      }

      const params = {
        playlistId: "PLkX9oUrQ1ev6-rAWMgj2PH41EP6TOu6Hj",
        maxResults: paginate.rowsPerPage,
        part: "snippet",
        key: process.env.GOOGLE_API_KEY,
        order: "date",
        sort: "desc",
      }

      if (paginate.params.nextPageToken) {
        params["pageToken"] =
          paginate.params.prevPageToken || paginate.params.nextPageToken
      }

      setVideos(state => ({ ...state, isLoading: true }))

      const controller = new AbortController()
      const signal = controller.signal

      axios
        .get("https://www.googleapis.com/youtube/v3/playlistItems", {
          params,
          signal,
        })
        .then(({ data }) => {
          setVideos(state => ({
            ...state,
            isLoading: false,
            items: data.items.reverse(),
          }))
          setPaginate(prev => ({
            ...prev,
            totalItems: data.pageInfo.totalResults,
            params: {
              ...prev.params,
              nextPageToken: data?.nextPageToken,
              prevPageToken: data?.prevPageToken,
            },
          }))
          return () => {
            // cancel the request before component unmounts
            controller.abort()
          }
        })
        .catch(error => {
          console.error(error)
        })
    },
    [paginate]
  )

  useEffect(() => {
    getVideos()
  }, [])

  return (
    <Container>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-3 gx-3">
        {videos.isLoading ? (
          <Stack
            className="justify-content-center align-items-center"
            style={{
              width: "100vw",
              height: "50vh",
            }}
          >
            <Spinner animation="grow" role="status" />
          </Stack>
        ) : (
          videos.items.map((item, index) => (
            <Col key={item + index.toString()}>
              <div className="ratio ratio-16x9">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${item?.snippet.resourceId?.videoId}`}
                  title={item?.snippet?.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
          ))
        )}
      </Row>
      <Stack className="flex-row justify-content-end mt-5">
        <Pagination
          paginate={paginate}
          rowsPerPageOptions={[10, 50, 100]}
          onChange={getVideos}
        />
      </Stack>
    </Container>
  )
}

export default Videos
