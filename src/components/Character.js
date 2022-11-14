import React from "react";
const Character = ({ character }) => {
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card">
          <img className="card-img-top" src={character.image} alt="" />
          <div className="card-body">
            <h4>{character.name}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Character;
