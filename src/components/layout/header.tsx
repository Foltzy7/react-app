import React from "react";
import {Nav, Navbar,} from "react-bootstrap";
import logo from "../../images/black-mage.png"

function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home">
          <a className="navbar-brand" href="/">
              <img src={logo} alt="Logo" width="150" height="150" />
          </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/" className="mr-5">Home</Nav.Link>
          <Nav.Link href="/about" className="mr-5">About</Nav.Link>
          <Nav.Link href="/minitries" className="mr-5">Ministries</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;