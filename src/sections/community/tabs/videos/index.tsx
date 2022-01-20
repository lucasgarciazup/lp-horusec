import axios from "axios"
import React, { useCallback, useEffect, useState } from "react"
import {
  Col,
  Container,
  Image,
  Modal,
  Row,
  Spinner,
  Stack,
} from "react-bootstrap"
import Pagination from "../../../../components/Pagination"

const ROWS_PER_PAGE_OPTIONS = [6, 25, 50]
const Videos: React.FC = () => {
  const [videos, setVideos] = useState([])
  const [currentItems, setCurrentItems] = useState(videos)
  const [isLoading, setIsLoading] = useState(true)
  const [show, setShow] = useState(false)
  const [modal, setModal] = useState({
    title: "",
    videoId: "",
  })

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const params = {
      playlistId: "PLkX9oUrQ1ev6-rAWMgj2PH41EP6TOu6Hj",
      maxResults: 50,
      part: "snippet",
      key: process.env.GOOGLE_API_KEY,
      order: "date",
      sort: "desc",
    }

    axios
      .get("https://www.googleapis.com/youtube/v3/playlistItems", {
        params,
        signal,
      })
      .then(({ data }) => {
        setVideos(data.items.reverse())
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setIsLoading(false)
      })

    return () => {
      controller.abort()
    }
  }, [])

  const handleCurrentItems = useCallback(
    (items: any[]) => {
      setCurrentItems(items)
    },
    [currentItems]
  )

  const handleModal = item => {
    setShow(true)
    setModal({
      title: item?.snippet?.title,
      videoId: item?.snippet?.resourceId?.videoId,
    })
  }

  return (
    <Container>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-3 gx-3">
        {isLoading ? (
          <Stack
            className="justify-content-center align-items-center"
            style={{
              width: "100vw",
              height: "50vh",
            }}
          >
            <Spinner animation="grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Stack>
        ) : (
          currentItems.map((item, index) => (
            <Col key={item + index.toString()}>
              <Image
                src={item?.snippet?.thumbnails?.maxres?.url}
                width={item?.snippet?.thumbnails?.maxres?.width}
                height={item?.snippet?.thumbnails?.maxres?.height}
                fluid
                onClick={() => handleModal(item)}
              />
            </Col>
          ))
        )}
      </Row>
      <Stack className="flex-row justify-content-end mt-5">
        <Pagination
          items={videos}
          itemsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
          handleCurrentItems={handleCurrentItems}
        />
      </Stack>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="xl"
        centered
        contentClassName="border-0 bg-transparent"
      >
        <Modal.Header closeButton className="border-0" />
        <Modal.Body>
          {modal ? (
            <div className="ratio ratio-16x9">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${modal?.videoId}`}
                title={modal?.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : null}
        </Modal.Body>
      </Modal>
    </Container>
  )
}

export default Videos
