import Card from "react-bootstrap/Card";
import React from "react";
import "../styles/SongCard.css";

function SongCard({ data }) {
  return (
    <div className="SongCard">
      {data &&
        data.map((song) => (
          <Card className="myCard">
            <Card.Img className="imgCard" variant="top" src={song.url} />
            <Card.Body className="infoCard">
              <Card.Title>{song.name}</Card.Title>
              <Card.Text>{song.autor}</Card.Text>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
}

export default SongCard;
