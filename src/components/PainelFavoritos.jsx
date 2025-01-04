import React from "react";
import CardAtleta from "./CardAtleta";

const PainelFavoritos = ({ favoritos }) => {
  return (
    <div className="painel-favoritos">
      <h2>Atletas Favoritos</h2>
      {favoritos.map((atleta) => (
        <CardAtleta atleta={atleta}></CardAtleta>
      ))}
    </div>
  );
};

export default PainelFavoritos;
