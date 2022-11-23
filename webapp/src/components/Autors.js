import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import data from "../assets/autorsData";
import "../styles/Autors.css";

function Autors() {
  return (
    <div className="Autors">
      <h2>Autores</h2>
      <div className="autorslist">
        <ListGroup>
            {data && data.map((autor) => (
                <ListGroup.Item>
                    <div>
                        <img src={autor.image}></img>
                        <h3><em>{autor.name}</em></h3>
                        <p>{autor.songsNum}</p>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default Autors;
