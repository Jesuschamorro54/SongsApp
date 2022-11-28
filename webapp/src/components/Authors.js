import React, {useEffect, useState} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Dropdown from "react-bootstrap/Dropdown";
//import data from "../assets/autorsData";
import "../styles/Authors.css";

function Authors() {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/authors")
      .then((response) => response.json())
      .then((json) => setAuthors(json.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="Authors">
      <h2>Lista de Autores</h2>
      <div className="authorslist">
        <ListGroup>
          {authors &&
            authors.map((author) => (
              <ListGroup.Item key={author._id}>
                <div className="container-list">
                  <img src={author.image}></img>
                  <div className="description">
                    <h3>
                      <em>{author.name}</em>
                    </h3>
                    <p>Canciones agregadas: {author.songs}</p>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default Authors;
