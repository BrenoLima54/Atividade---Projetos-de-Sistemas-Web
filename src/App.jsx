import "./App.css";
import React, { useState } from 'react';
import CardAtleta from './components/CardAtleta';
import PainelFavoritos from './components/PainelFavoritos';
import { fetchAthletes } from './services/Api';

function App() {
  const [search, setSearch] = useState('');
  const [atleta, setAtleta] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!search) return;
    setLoading(true);
    const data = await fetchAthletes(search);
    setAtleta(data);
    setLoading(false);
    setSearch(''); 
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
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
      <input
        type="text"
        className="input-search"
        placeholder="Digite o nome do atleta"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown} 
      />
      <button className="search-button" onClick={handleSearch}>Pesquisar</button>

      {loading && <p className="loading">Carregando...</p>}

      <div className="atleta-list">
        {atleta && atleta.length > 0 ? (
          atleta.map((atleta) => (
            <CardAtleta
              key={atleta.id}
              atleta={atleta}
              addToFavorites={addToFavorites}
            />
          ))
        ) : (
          <p className="no-results">Nenhum atleta encontrado</p>
        )}
      </div>

      <PainelFavoritos favorites={favorites} removeFromFavorites={removeFromFavorites} />
    </div>
  );
}

export default App;