// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
// import { Col, Container, Row } from 'react-bootstrap'
import Home from "./components/home/Home";
import {  Stack } from "react-bootstrap";
import Header from "./components/header/Header";
import SearchPannel from "./components/search/SearchPannel";
import SortPannel from "./components/sort/SortPannel";
// import { useEffect } from 'react'

function App() {
  return (
    <>
      <Header></Header>

      <Stack style={{ width: "100vw" }}>
        <div className="d-flex">
          <div className="flex-shrink-0" style={{ width: "25%" }}>
            <Stack>
              {/* Content for the first Stack */}
              <SearchPannel></SearchPannel>
            </Stack>
          </div>
          <div className="flex-grow-1" style={{ width: "75%" }}>
            <Stack>
              {/* Content for the second Stack */}


              <SortPannel></SortPannel>
              <Home></Home>
            </Stack>
          </div>
        </div>
      </Stack>

    </>
  );
}

export default App;
