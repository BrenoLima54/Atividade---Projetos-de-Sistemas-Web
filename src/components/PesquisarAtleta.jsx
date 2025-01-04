import React, { useState } from "react";
import CardAtleta from "./CardAtleta";
import { searchFighterByName } from "../services/api";

const PesquisarAtleta = () => {
  const [atletas, setAtletas] = useState([]);
  const [busca, setBusca] = useState("");
  const handleOnClick = async () => {
    const resultadoAtletas = await searchFighterByName(busca);
    console.log(resultadoAtletas);
    if (resultadoAtletas) setAtletas(resultadoAtletas);
  };
  return (
    <>
      <h1>MMA Atletas</h1>
      <input
        type="text"
        name="pesquisa"
        id="pesquisa"
        placeholder="Digite o nome do atleta"
        value={busca}
        onChange={(event) => {
          setBusca(event.target.value);
        }}
      />
      <button onClick={handleOnClick}>Pesquisar</button>
      {atletas.map((atleta) => (
        <CardAtleta atleta={atleta} />
      ))}
    </>
  );
};

export default PesquisarAtleta;
