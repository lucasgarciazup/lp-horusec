import React from "react"
import Citric from 'citric'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { GlobalStyle } from '../styles/global'

export default function Home() {
  return (
    <Citric>
      <Navbar/>
      <main>

      <h1>Hello World!</h1>
      </main>
      <Footer/>
      <GlobalStyle />
    </Citric>
  )
}
