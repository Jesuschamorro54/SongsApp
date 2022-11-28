import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import "../styles/MainSearch.css";

function MainSearch({onChange, onClick}) {
  return (
    <div className="MainSearch">
      <div className="container-search">
        <h2 className="title">SongsApp</h2>
        <h3>Busca la Canción de la cual deseas la letra.</h3>
        <Form className="d-flex">
          <Form.Control onChange={onChange}
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button className="btn-search" onClick={onClick}>Search</Button>
        </Form>
      </div>
    </div>
  );
}

export default MainSearch;
