import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" fixed="top">
      <Navbar.Brand as={Link} to="/" className="navbar-brand">
        ReactBlogTutorial
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/about" className="nav-link">
          About
        </Nav.Link>
        <Nav.Link as={Link} to="/blog" className="nav-link">
          Blog
        </Nav.Link>
        <Nav.Link as={Link} to="/contact" className="nav-link">
          Contact
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
