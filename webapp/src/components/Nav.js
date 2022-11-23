import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Navegation from "react-bootstrap/Nav";
import logo from "../assets/logoApp.png";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  return (
    <Navbar className="Nav" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link className="link-logo" to="/">
            <img
              alt=""
              src={logo}
              width="46"
              height="44"
              className="d-inline-block align-top"
            />{" "}
            SongsApp
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Navegation className="me-auto">
            <Navegation.Link>
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </Navegation.Link>
            <Navegation.Link>
              <Link className="nav-link" to="songs">
                Canciones
              </Link>
            </Navegation.Link>
            <Navegation.Link>
              <Link className="nav-link" to="autors">
                Autores
              </Link>
            </Navegation.Link>
          </Navegation>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
