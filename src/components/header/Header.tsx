import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar
      className=""
      style={{
        width: "100%",
        backgroundColor: "#1ABA1A",
        position: "fixed",
        zIndex: 1000,
        right: "0px",
        left: "0px",
      }}
    >
      <Container>
        <Navbar.Brand href="#home" style={{ color: "#FFFFFF" }}>
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: "#FFFFFF" }}>
              All Products
            </Nav.Link>
            {/* <Nav.Link href="#link" style={{color:"#FFFFFF"}}>Costum Products</Nav.Link> */}
            {/* <NavDropdown title="Costum Products" id="basic-nav-dropdown"> */}
            {/* <NavDropdown.Item href="#action/3.1">Filter</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="#action/3.2">
               Sort
              </NavDropdown.Item> */}
            {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
            {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            {/* </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
