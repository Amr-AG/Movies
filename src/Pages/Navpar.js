import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import React from "react";
import Form from "react-bootstrap/Form";
import "./Nav.css";
import { BsSearch } from "react-icons/bs";

export default function Navpar({ search }) {
  const onSearch = (word) => {
    search(word);
  };
  return (
    <div>
      <Navbar
        expand="md"
        className="fixed-top nav"
        style={{ background: "#000000f2" }}
      >
        <Container fluid="sm">
          <Link
            className="Navbar Brand"
            style={{
              color: "#707070",
              fontWeight: "bold",
              textDecoration: "none",
              fontSize: "22px",
            }}
            to="/"
          >
            Movies App
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="na vbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="d-flex"
            >
              <Form.Control
                type="search"
                placeholder="Your Search About ..."
                className="me-2 searchBar"
                aria-label="Search"
                onChange={(e) => onSearch(e.target.value)}
              />
              <Link className="searchButton" to={"/"}>
                <BsSearch />
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
