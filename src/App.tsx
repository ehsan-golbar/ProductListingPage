
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
// import { Col, Container, Row } from 'react-bootstrap'
import Home from './components/home/Home'
import {  Stack } from "react-bootstrap"
// import { useEffect } from 'react'


function App() {






  return (
    <>
      <Stack className="d-flex justify-content-center align-items-center m-1 w-100">
        {/* <ProductCard>
          
        </ProductCard> */}

        <Home></Home>
      </Stack>
    </>
  )
}

export default App
