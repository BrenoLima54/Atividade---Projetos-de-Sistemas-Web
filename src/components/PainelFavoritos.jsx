import React from "react";
import CardAtleta from "./CardAtleta";

const PainelFavoritos = ({ favorites, removeFromFavorites }) => {
  return (
    <>
      <h2>Atletas Favoritos</h2>
      {favorites.length > 0 ? (
        favorites.map((atleta) => (
          <div className="painel-favoritos">
            <CardAtleta
              key={atleta.id}
              atleta={atleta}
              isFavorite={true}
              removeFromFavorites={removeFromFavorites}
            />
          </div>
        ))
      ) : (
        <p className="no-results">Nenhum atleta nos favoritos</p>
      )}
    </>
  );
};

export default PainelFavoritos;
