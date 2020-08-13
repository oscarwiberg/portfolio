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
        <Nav id="nav-links">
          <Link id="nav-link" to="/">
            Home
          </Link>

          <Link id="nav-link" to="/about">
            About
          </Link>

          <Link id="nav-link" to="/projects">
            Projects
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
