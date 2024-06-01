import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>MakersGram</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className="navElem" to="/posts">
            View Posts
          </NavLink>
          <NavLink className="navElem" to="/create">
            Create Post
          </NavLink>
          <NavLink className="navElem" to="/edit">
            EditPost
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
