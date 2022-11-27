import Card from "react-bootstrap/Card";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/SongCard.css";

function SongCard({ data }) {
  return (
    <div className="SongCard">
      {data &&
        data.map((song) => (
          <Card key={song._id} className="myCard">
            <Link to={`/songs/${song._id}`}>
              <Card.Img className="imgCard" variant="top" src={song.image} />
              <Card.Body className="infoCard">
                <Card.Title>{song.name}</Card.Title>
                <Card.Text>{song.author}</Card.Text>
              </Card.Body>
            </Link>
          </Card>
        ))}
    </div>
  );
}

export default SongCard;
