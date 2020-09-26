import React from "react";
import { Link } from "react-router-dom";

//react-bootstrap
import { Navbar,Nav, Container} from "react-bootstrap";

function NavbarOrigin() {
  return (
      <Navbar bg="dark" expand="lg">
          <Container>
        <Navbar.Brand ><Link to="/" style={{ textDecoration: 'none' }}>pipcorn</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link ><Link to="/movie/now-playing" style={{ textDecoration: 'none' }}>Now playing</Link></Nav.Link>
            <Nav.Link ><Link to="/movie/upcoming" style={{ textDecoration: 'none' }}>Upcoming Movies</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavbarOrigin;
