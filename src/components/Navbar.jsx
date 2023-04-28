import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarDiv() {
  return (
    <Navbar className="navbarDiv" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Mohsin Rehman</Navbar.Brand>
        <Navbar.Toggle  bg="dark" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contactme">Contact</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDiv;