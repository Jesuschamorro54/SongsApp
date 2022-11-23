import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Navegation from 'react-bootstrap/Nav';
import logo from "../assets/logoApp.png";
import "../styles/Nav.css";

function Nav(){
    return(
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand className="container-logo" href="#home">
            <img
              alt=""
              src={logo}
              width="46"
              height="44"
              className="d-inline-block align-top"
            />{' '}
            SongsApp
          </Navbar.Brand>
          <Navegation className="me-auto">
            <Navegation.Link href="#home">Inicio</Navegation.Link>
            <Navegation.Link href="#songs">Canciones</Navegation.Link>
            <Navegation.Link href="#autors">Autores</Navegation.Link>
          </Navegation>
        </Container>
      </Navbar>
    )
}

export default Nav;