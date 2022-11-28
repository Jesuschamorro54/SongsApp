import React, { useEffect, useState } from "react";
import Notfound from "./Notfound";
import SongCard from "./SongCard";
import "../styles/Result.css";

function Result({ result }) {
  console.log(result);
  return (
    <div className="Result">
      {result.status ? (
        <div>
            <h2>Resultados de la búsqueda</h2>
          <SongCard data={result.data} />
        </div>
      ) : (
        <div className="notFound">
          <Notfound />
        </div>
      )}
    </div>
  );
}

export default Result;
