import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      className="fixed-top"
      style={{
        width: "100%",
        backgroundColor: "#0d6efd",
      }}
      expand="lg"
    >
      <Container
        fluid
        className="d-flex justify-content-start gap-lg-5 gap-md-3 gap-xs-3"
      >
        <Navbar.Brand href="#home" style={{ color: "#FFFFFF" }}>
          React-Bootstrap
        </Navbar.Brand>
        <Nav className="d-flex flex-row gap-3 ">
          <Nav.Link
            as={Link}
            to="/ProductListingPage/"
            style={{ color: "#FFFFFF" }}
          >
            All Products
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/ProductListingPage/contact"
            style={{ color: "#FFFFFF" }}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
