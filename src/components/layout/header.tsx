import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./header.scss";
import CoffeeSmall from "../coffee/coffee-small";

function Header() {
  return (
    <Navbar className="nav-primary" expand="lg" variant="dark">
      <Navbar.Brand href="/">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "baseline",
            margin: "0px 15px 0px",
          }}
        >
          <CoffeeSmall />
          <h1>Foltz Concepts</h1>
        </div>
        {/*<img src={logo} alt="Logo" width="50" height="50" />*/}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/" className="mr-5">
            Home
          </Nav.Link>
          <Nav.Link href="/about" className="mr-5">
            About
          </Nav.Link>
          <Nav.Link href="/minitries" className="mr-5">
            Ministries
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
