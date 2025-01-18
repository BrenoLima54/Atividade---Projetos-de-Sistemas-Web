import "./App.css";
import React, { useMemo, useRef, useState } from "react";
import CardAtleta from "./components/CardAtleta";
import PainelFavoritos from "./components/PainelFavoritos";
import { fetchAthletes } from "./services/api";

function App() {
  const [search, setSearch] = useState("");
  const [atleta, setAtleta] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const NoAthleteText = useMemo(() => {
    if (isLoading) return <p className="loading">Carregando...</p>;
    if (atleta && atleta.length > 0) return <></>;
    if (hasSearched)
      return <p className="no-results">Nenhum atleta encontrado</p>;
    return <p className="no-results">Pesquise por um atleta para vê-lo aqui</p>;
  }, [isLoading, atleta, hasSearched]);

  const handleSearch = async () => {
    setHasSearched(true);
    if (!search) return;
    setIsLoading(true);
    const data = await fetchAthletes(search);
    setAtleta(data);
    setIsLoading(false);
    setSearch("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  const addToFavorites = (atleta) => {
    if (!favorites.find((fav) => fav.id === atleta.id)) {
      setFavorites([...favorites, atleta]);
    }
  };

  const removeFromFavorites = (atletaId) => {
    setFavorites(favorites.filter((fav) => fav.id !== atletaId));
  };

  return (
    <div className="App">
      <h1>Pesquisa de Atletas</h1>
      <h3>Mixed Martial Arts</h3>

      <input
        type="text"
        className="input-search"
        placeholder="Digite o nome do atleta"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button className="search-button" onClick={handleSearch}>
        Pesquisar
      </button>

      {NoAthleteText}

      <div className="atleta-list">
        {atleta.map((atleta) => (
          <CardAtleta
            key={atleta.id}
            atleta={atleta}
            isFavorite={favorites.includes(atleta)}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
          />
        ))}
      </div>

      <PainelFavoritos
        favorites={favorites}
        removeFromFavorites={removeFromFavorites}
      />
    </div>
  );
}

export default App;
