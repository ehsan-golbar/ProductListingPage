// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
// import { Col, Container, Row } from 'react-bootstrap'
import Home from "./components/home/Home";
import { Stack } from "react-bootstrap";
import Header from "./components/header/Header";
import SearchPannel from "./components/search/SearchPannel";
import SortPannel from "./components/sort/SortPannel";
import { Provider } from "react-redux";
import { store } from "./store/Store";
// import { useEffect } from 'react'

function App() {
  return (
    <>
      <Provider store={store}>
        <Stack style={{ width: "100vw", height:'100vw', backgroundColor: "#e9ecef" }}>
          <Header></Header>
          <div className="d-flex">
            <div className="flex-shrink-0" style={{ width: "20%" }}>
              <Stack>
                {/* Content for the first Stack */}
                <SearchPannel></SearchPannel>
              </Stack>
            </div>
            <div className="flex-grow-1" style={{ width: "80%" }}>
              <Stack>
                {/* Content for the second Stack */}

                <SortPannel></SortPannel>
                <Home></Home>
              </Stack>
            </div>
          </div>
        </Stack>
      </Provider>
    </>
  );
}

export default App;
