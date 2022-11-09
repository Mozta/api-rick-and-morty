import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./Character";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const url = "https://rickandmortyapi.com/api/character";
  const alumnos = ["Andrea", "Aldo", "Abraham"];

  useEffect(() => {
    // setResult((amount * 3) / 2);
    axios.get(url).then((response) => {
      //console.log(response.data.results);
      setCharacters(response.data.results);
    });
  }, []);

  console.log(characters);

  return (
    <>
      <div className="row">
        {characters.map((character) => {
          return <Character key={character.id} character={character} />;
        })}
      </div>
    </>
  );
};

export default Characters;
