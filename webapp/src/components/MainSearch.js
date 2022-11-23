import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import "../styles/MainSearch.css";

function MainSearch() {
  return (
    <div className="MainSearch">
      <div class="container-search">
        <h2 class="title">SongsApp</h2>
        <h3>Busca la Canción de la cual deseas la letra.</h3>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button className="btn-search">Search</Button>
        </Form>
      </div>
    </div>
  );
}

export default MainSearch;
