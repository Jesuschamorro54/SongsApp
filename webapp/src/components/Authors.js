import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Result from "./Result";
import "../styles/Authors.css";
import { Link } from "react-router-dom";

function Authors() {
  const [authors, setAuthors] = useState([]);
  const [search, setSearch] = useState();
  const [songsByAuthor, setSongsByAuthor] = useState(null);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/authors")
      .then((response) => response.json())
      .then((json) => setAuthors(json.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="Authors">
      <h2>Lista de Autores</h2>
      <Form className="d-flex SongsSearch">
        <Form.Control
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button
          className="btn-search"
          onClick={() => {
            fetch(`http://127.0.0.1:5000/api/search?author=${search}`)
              .then((response) => response.json())
              .then((json) => setSongsByAuthor(json))
              .catch((err) => console.log(err));
          }}
        >
          Search
        </Button>
      </Form>
      {songsByAuthor ? (
        songsByAuthor && <Result result={songsByAuthor} />
      ) : (
        <div className="authorslist">
          <ListGroup>
            {authors &&
              authors.map((author) => (
                <Link to={`/authors/${author.name}`}>
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
                </Link>
              ))}
          </ListGroup>
        </div>
      )}
    </div>
  );
}

export default Authors;
