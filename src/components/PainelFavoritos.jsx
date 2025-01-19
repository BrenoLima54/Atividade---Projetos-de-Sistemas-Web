import React from "react";
import CardAtleta from "./CardAtleta";

const PainelFavoritos = ({ favorites, removeFromFavorites }) => {
  return (
    <>
      <h2>Atletas Favoritos</h2>
      {favorites.length > 0 ? (
        <div className="painel-favoritos">
          {favorites.map((atleta) => (
            <CardAtleta
              key={atleta.id}
              atleta={atleta}
              isFavorite={true}
              removeFromFavorites={removeFromFavorites}
            />
          ))}
        </div>
      ) : (
        <p className="no-results">Nenhum atleta nos favoritos</p>
      )}
    </>
  );
};

export default PainelFavoritos;
