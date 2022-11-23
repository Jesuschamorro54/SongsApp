import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Navegation from "react-bootstrap/Nav";
import logo from "../assets/logoApp.png";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand >
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
      </Container>
    </Navbar>
  );
}

export default Nav;
