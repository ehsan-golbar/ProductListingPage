import { Col, Container, Row } from "react-bootstrap";
import Header from "./header/Header";
import Home from "./home/Home";
import SearchPannel from "./search/SearchPannel";
import SortPannel from "./sort/SortPannel";

function AllProducts() {
  return (
    <>
      <Container fluid className="">
        <Row className="">
          {/* <p className="">Hello</p> */}
          <Header></Header>
        </Row>

        <Row className="d-none d-sm-none d-md-flex gx-5">
          <Col lg={3} md={4} className="">
            <SearchPannel></SearchPannel>
          </Col>

          <Col lg={9} md={8} className="">
            <Row>
              <SortPannel></SortPannel>
            </Row>
            <Row>
              <Home></Home>
            </Row>
          </Col>
        </Row>

        <Row className="d-md-none ">
          <SortPannel></SortPannel>
          <SearchPannel></SearchPannel>
          <Home></Home>
          {/* <Col lg={3} md={4}>
            <SearchPannel></SearchPannel>
          </Col>

          <Col lg={9} md={8} className="">
            <Row>
              <SortPannel></SortPannel>
            </Row>
            <Row>
              <Home></Home>
            </Row>
          </Col> */}
        </Row>
      </Container>
    </>
  );
}

export default AllProducts;
