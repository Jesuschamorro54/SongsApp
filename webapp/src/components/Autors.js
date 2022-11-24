import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Dropdown from "react-bootstrap/Dropdown";
import data from "../assets/autorsData";
import "../styles/Autors.css";

function Autors() {
  return (
    <div className="Autors">
      <h2>Lista de Autores</h2>
      <div className="filter">
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            Filtrar por
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Orden alfabético</Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              Mayor número de canciones agregadas
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="autorslist">
        <ListGroup>
          {data &&
            data.map((autor) => (
              <ListGroup.Item>
                <div className="container-list">
                  <img src={autor.image}></img>
                  <div className="description">
                    <h3>
                      <em>{autor.name}</em>
                    </h3>
                    <p>Canciones agregadas: {autor.songsNum}</p>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default Autors;
