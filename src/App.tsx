
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
// import { Col, Container, Row } from 'react-bootstrap'
import Home from './components/home/Home'
import {  Stack } from "react-bootstrap"
import Header from "./components/header/Header"
// import { useEffect } from 'react'


function App() {






  return (
    <>
      <Stack style={{ width: '100vw' }}>
        {/* <ProductCard>
          
        </ProductCard> */}
        <Header></Header>
        <Home></Home>
      </Stack>
    </>
  )
}

export default App
