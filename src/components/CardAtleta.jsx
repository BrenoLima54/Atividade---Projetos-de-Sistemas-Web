import React from "react";

const CardAtleta = ({ atleta }) => {
  return (
    <div className="card">
      <img src={atleta.photo} alt={atleta.name} />
      <h2>{atleta.name}</h2>
      <h3>{atleta.nickname}</h3>
      <p>{atleta.weight}</p>
      <p>{atleta.categoty}</p>
    </div>
  );
};

export default CardAtleta;
