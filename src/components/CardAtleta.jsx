import React from "react";

const CardAtleta = ({ atleta, addToFavorites }) => {
  return (
    <div className="card">
      <img src={atleta.image || 'default-image.jpg'} alt={atleta.name} />
      <h2>{atleta.name}</h2>
      <h3>{atleta.nickname}</h3>
      <p>{atleta.weight}</p>
      <p>{atleta.category}</p>
      <button onClick={() => addToFavorites(atleta)}>Adicionar aos favoritos</button>
    </div>
  );
};

export default CardAtleta;
