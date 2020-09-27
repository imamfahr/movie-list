import React from "react";
import { Link } from "react-router-dom";

//react-bootstrap
import { Navbar,Nav, Container} from "react-bootstrap";

function NavbarOrigin() {
  return (
      <Navbar bg="dark" expand="lg" fixed="top" >
          <Container>
        <Navbar.Brand ><Link to="/" style={{ textDecoration: 'none' }} className='poiret linkNav logo'><img src="https://img.icons8.com/fluent/48/000000/popcorn.png"/>pipcorn</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link ><Link to="/movie/now-playing" style={{ textDecoration: 'none' }} className='linkNav poiret'>Now playing</Link></Nav.Link>
            <Nav.Link ><Link to="/movie/upcoming" style={{ textDecoration: 'none' }} className='linkNav poiret'>Upcoming Movies</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavbarOrigin;
