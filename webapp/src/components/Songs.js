import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SongCard from "./SongCard";
import Result from "./Result";
import "../styles/Songs.css";

function Songs() {
  const [search, setSearch] = useState();
  const [songsByName, setSongsByName] = useState(null);
  const [songs, setSongs] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    let url = "http://127.0.0.1:5000/api/songs";
    if (name) {
      url = `http://127.0.0.1:5000/api/search?author=${name}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((json) => setSongs(json.data))
      .catch((err) => console.log(err));
  }, [name]);

  return (
    <div className="Songs">
      <h2>Biblioteca de canciones</h2>
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
            fetch(`http://127.0.0.1:5000/api/search?name=${search}`)
              .then((response) => response.json())
              .then((json) => setSongsByName(json))
              .catch((err) => console.log(err));
          }}
        >
          Search
        </Button>
      </Form>
      {songsByName ? (
        songsByName && <Result result={songsByName} />
      ) : (
        <SongCard data={songs} />
      )}
    </div>
  );
}

export default Songs;
