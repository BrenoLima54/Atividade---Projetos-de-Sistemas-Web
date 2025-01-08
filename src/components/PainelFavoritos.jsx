import React from "react";
import { HeartOff } from 'lucide-react';

const PainelFavoritos = ({ favorites, removeFromFavorites }) => {
  return (
    <div className="painel-favoritos">
      <h2>Atletas Favoritos</h2>
      {favorites.length > 0 ? (
        favorites.map((atleta) => (
          <div key={atleta.id} className="favorito-item">
            <h3>{atleta.name}</h3>
            <button className="fav" onClick={() => removeFromFavorites(atleta.id)}>
            <HeartOff />
              Remover dos favoritos
            </button>
          </div>
        ))
      ) : (
        <p className="no-results">Nenhum atleta nos favoritos.</p>
      )}
    </div>
  );
};

export default PainelFavoritos;
