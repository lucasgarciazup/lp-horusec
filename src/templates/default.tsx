import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { GlobalStyle } from "../styles/global"

import "bootstrap/dist/css/bootstrap.min.css"
export default function Default({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <GlobalStyle />
    </>
  )
}
