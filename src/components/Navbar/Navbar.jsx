import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/" id="nav-logo">
          OSCAR WIBERG.
        </Navbar.Brand>
        <Nav id="nav-links" className="mr-auto">
          <Nav.Link id="nav-link" as={Link} to="/">
            HOME
          </Nav.Link>
          <Nav.Link id="nav-link" as={Link} to="/about">
            ABOUT
          </Nav.Link>
          <Nav.Link id="nav-link" as={Link} to="/projects">
            PROJECTS
          </Nav.Link>
        </Nav>
        {/* <Nav id="nav-links">
          <Link id="nav-link" to="/">
            Home
          </Link>

          <Link id="nav-link" to="/about">
            About
          </Link>

          <Link id="nav-link" to="/projects">
            Projects
          </Link>
        </Nav> */}
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
