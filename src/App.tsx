import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/Home";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/header/Header";
import SearchPannel from "./components/search/SearchPannel";
import SortPannel from "./components/sort/SortPannel";
import { Provider } from "react-redux";
import { store } from "./store/Store";

function App() {
  return (
    <>
      <Provider store={store}>
        {/* main conntainer */}

        <div className="bg-gray vw-100 vh-100">
          <Container fluid className="bg-gray ">
            <Row>
              <Header></Header>
            </Row>

            <Row className="">
              <Col lg={3} md={4} sm={12}>
                <SearchPannel></SearchPannel>
              </Col>

              <Col lg={9} md={8} sm={12}>
                <Row>
                  <SortPannel></SortPannel>
                </Row>
                <Row className="">
                  <Home></Home>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </Provider>
    </>
  );
}

export default App;
