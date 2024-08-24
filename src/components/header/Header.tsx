import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
      <Container fluid className="">
        <Navbar.Brand href="#home" style={{ color: "#FFFFFF" }}>
          React-Bootstrap
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home" style={{ color: "#FFFFFF" }}>
            All Products
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
