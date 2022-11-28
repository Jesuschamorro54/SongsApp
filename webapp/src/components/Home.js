import React, { useState } from "react";
import MainSearch from "./MainSearch";
import Result from "./Result";
import "../styles/Home.css";

function Home() {
  const [search, setSearch] = useState();
  const [songsByName, setSongsByName] = useState(null);

  return (
    <div className="Home">
      <MainSearch
        onClick={() => {
          fetch(`http://127.0.0.1:5000/api/search?name=${search}`)
            .then((response) => response.json())
            .then((json) => setSongsByName(json))
            .catch((err) => console.log(err));
        }}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      {songsByName && <Result result={songsByName}/>}
    </div>
  );
}

export default Home;
