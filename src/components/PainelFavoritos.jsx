import React from "react";
import CardAtleta from "./CardAtleta";

const PainelFavoritos = ({ favoritos = [] }) => {  
  return (
    <div className="painel-favoritos">
      <h2>Atletas Favoritos</h2>
      {favoritos.length > 0 ? (
        favoritos.map((atleta) => (
          <CardAtleta key={atleta.id} atleta={atleta} /> 
        ))
      ) : (
        <p>Nenhum atleta favorito encontrado.</p>
      )}
    </div>
  );
};

export default PainelFavoritos;
