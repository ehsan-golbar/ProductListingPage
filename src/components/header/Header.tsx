import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar
      className="fixed-top"
      style={{
        width: "100%",
        backgroundColor: "#0d6efd",
        // position: "fixed",
        // top: "0px",
        // zIndex: 2,
        // right: "15px",
        // left: "0px",
      }}
      expand="lg"
    >
      <Container fluid className="">
        <Navbar.Brand href="#home" style={{ color: "#FFFFFF" }}>
          React-Bootstrap
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Nav className="me-auto">
          <Nav.Link href="#home" style={{ color: "#FFFFFF" }}>
            All Products
          </Nav.Link>
        </Nav>
        {/* <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: "#FFFFFF" }}>
              All Products
            </Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default Header;
