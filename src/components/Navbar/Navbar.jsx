import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home" id="nav-logo">
          OSCAR WIBERG.
        </Navbar.Brand>
        <Nav id="nav-links">
          <Nav.Link href="/" id="nav-link">
            Home
          </Nav.Link>
          <Nav.Link href="/about" id="nav-link">
            About
          </Nav.Link>
          <Nav.Link href="/projects" id="nav-link">
            Projects
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
