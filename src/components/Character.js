import React from "react";
const Character = ({ character }) => {
  return (
    <>
      <div className="col-md-4">
        <h4>{character.name}</h4>
        <img src={character.image} alt="" />
      </div>
    </>
  );
};

export default Character;
