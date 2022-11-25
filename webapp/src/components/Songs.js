import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SongCard from "./SongCard";
import songs from "../assets/data";
import "../styles/Songs.css";

function Songs() {
  return (
    <div className="Songs">
      <h2>Biblioteca de canciones</h2>
      <Form className="d-flex SongsSearch">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button className="btn-search">Search</Button>
        </Form>
      <SongCard data={songs} />
    </div>
  );
}

export default Songs;
