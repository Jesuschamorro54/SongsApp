import React from "react";
import SongCard from "./SongCard";
import songs from "../assets/data";
import "../styles/Songs.css";

function Songs() {
  return (
    <div className="Songs">
      <h2>Biblioteca de canciones</h2>
      <SongCard data={songs} />
    </div>
  );
}

export default Songs;
