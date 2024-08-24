import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Col, Container, Row } from 'react-bootstrap'
import Home from "./components/home/Home";
import { Col, Container, Row, Stack } from "react-bootstrap";
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
        {/* main conntainer */}

        <div className="bg-gray vw-100 vh-100">
          <Container fluid className="">
            <Row>
              <Header></Header>
            </Row>

            <Row>
              <Col lg={3} md={4} sm={12}>
                <SearchPannel></SearchPannel>
              </Col>

              <Col lg={9} md={8} sm={12}>
                <Row>
                  <SortPannel></SortPannel>
                </Row>
                <Row className="d-sm-none d-md-block">
                  <Home></Home>
                </Row>
              </Col>

              <Col className="d-md-none">
                <Home></Home>
              </Col>
            </Row>

            {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
              return (
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                  omnis velit totam saepe, minima placeat quasi iure blanditiis
                  delectus amet ad? Dolorem, molestiae. Et corrupti nihil
                  cupiditate nisi eius fugiat.
                </p>
              );
            })} */}
            {/* header container */}
            {/* <Container className="d-flex flex-row  w-100  header-color "></Container> */}

            {/* <Container  className="header-color">slam</Container> */}

            {/* body container */}
            {/* <Stack className="mt-5 pt-5 d-flex ">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              quasi accusamus minima eos veritatis doloremque? Ipsam ab error
              nostrum ea odio illum ipsum esse, at veritatis perspiciatis, nulla
              in dolores. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Neque mollitia placeat reprehenderit incidunt repellat animi
              provident fugit qui! Repellat debitis officia ratione? Dolore,
              delectus veniam suscipit dolorum ea officiis et?
            </p>
          </Stack> */}

            {/* filter section */}
            {/* <Container>
            <SearchPannel></SearchPannel>
          </Container> */}
          </Container>
        </div>
      </Provider>
    </>
  );
}

export default App;
