import React, { useState, useEffect } from "react";
import axios from "axios";

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
      <ul>
        {characters.map((character) => {
          return <li key={character.id}>{character.name} <img src={character.image} alt="" /></li>;
        })}
      </ul>
    </>
  );
};

export default Characters;
