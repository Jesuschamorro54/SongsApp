import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../styles/Letter.css";

function Letter() {
  const [key, setKey] = useState("letter");
  const [song, setSong] = useState(null);
  const {id} = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/songs?song_id=${id}`)
      .then((response) => response.json())
      .then((json) => setSong(json.data[0]))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="Letter">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="artist" title={`${song?.author} - ${song?.name}`} disabled></Tab>
        <Tab eventKey="letter" className="containerTab" title="Letra">
        <div dangerouslySetInnerHTML={{__html: song?.lyric}}></div></Tab>
        <Tab eventKey="chord" className="containerTab" title="Acordes">{song?.lyric_with_chord}</Tab>
      </Tabs>
    </div>
  );
}

export default Letter;
